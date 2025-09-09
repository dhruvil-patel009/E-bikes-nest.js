// // components/GooglePayInner.js
// "use client";
// import { useEffect, useState } from "react";
// import {
//   PaymentRequestButtonElement,
//   useStripe,
// } from "@stripe/react-stripe-js";

// export default function GooglePayInner({
//   amountCents = 6000,
//   currency = "aud",
// }) {
//   const stripe = useStripe();
//   const [paymentRequest, setPaymentRequest] = useState(null);
//   const [canMakePayment, setCanMakePayment] = useState(false);
//   const [clientSecret, setClientSecret] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!stripe) return;
//     let mounted = true;

//     async function init() {
//       // 1) Ask backend for clientSecret
//       const resp = await fetch("/api/create-payment-intent", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: amountCents, currency }),
//       });
//       const json = await resp.json();
//       if (!json.clientSecret) {
//         console.error("No clientSecret", json);
//         return;
//       }
//       if (!mounted) return;
//       setClientSecret(json.clientSecret);

//       // 2) Create paymentRequest
//       const pr = stripe.paymentRequest({
//         country: "AU",
//         currency,
//         total: {
//           label: "E-bike 6-8h Rental",
//           amount: amountCents,
//         },
//         requestPayerName: true,
//         requestPayerEmail: true,
//       });

//       // 3) Check availability (Google Pay / Apple Pay / Link)
//       const result = await pr.canMakePayment();
//       if (result) {
//         setPaymentRequest(pr);
//         setCanMakePayment(true);
//       } else {
//         setCanMakePayment(false);
//       }

//       // 4) Handle paymentmethod event
//       pr.on("paymentmethod", async (ev) => {
//         setLoading(true);
//         try {
//           const confirmResult = await stripe.confirmCardPayment(
//             clientSecret,
//             { payment_method: ev.paymentMethod.id },
//             { handleActions: false }
//           );

//           if (confirmResult.error) {
//             ev.complete("fail");
//             alert("Payment failed: " + confirmResult.error.message);
//             setLoading(false);
//             return;
//           }

//           ev.complete("success");

//           // Handle 3DS if required
//           if (
//             confirmResult.paymentIntent &&
//             confirmResult.paymentIntent.status === "requires_action"
//           ) {
//             const next = await stripe.confirmCardPayment(clientSecret);
//             if (next.error) {
//               alert("Authentication failed: " + next.error.message);
//               setLoading(false);
//               return;
//             }
//           }

//           // Success: redirect
//           window.location.href = "/checkout/success";
//         } catch (err) {
//           console.error("paymentmethod handler error", err);
//           ev.complete("fail");
//           alert("Payment error, check console");
//         } finally {
//           setLoading(false);
//         }
//       });
//     }

//     init();
//     return () => {
//       mounted = false;
//     };
//   }, [stripe, amountCents, currency]);

//   if (!canMakePayment || !paymentRequest) return null;

//   return loading ? (
//     <button className="btn btn-secondary" disabled>
//       Processing…
//     </button>
//   ) : (
//     <PaymentRequestButtonElement options={{ paymentRequest }} />
//   );
// }

// src/app/components/GooglePayInner.js
"use client";

import { useEffect, useState } from "react";
import {
  Elements,
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function GooglePayButton({ amount }) {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "US",
        currency: "usd",
        total: {
          label: "Pure Kit",
          amount, // cents
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe, amount]);

  if (!paymentRequest) {
    return <p>Google Pay not available</p>;
  }

  return (
    <PaymentRequestButtonElement
      options={{
        paymentRequest,
        style: {
          paymentRequestButton: {
            type: "buy",
            theme: "dark",
            height: "48px",
          },
        },
      }}
    />
  );
}

export default function GooglePayCheckout() {
  return (
    <Elements stripe={stripePromise}>
      <div className="p-4">
        <h2 className="text-xl mb-4">Checkout with Google Pay</h2>
        <GooglePayButton amount={6500} />
      </div>
    </Elements>
  );
}
