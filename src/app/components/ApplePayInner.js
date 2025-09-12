// "use client";
// import { useEffect, useState } from "react";
// import {
//   PaymentRequestButtonElement,
//   useStripe,
// } from "@stripe/react-stripe-js";

// export default function ApplePayButton({ amount = 6500, currency = "aud" }) {
//   const stripe = useStripe();
//   const [paymentRequest, setPaymentRequest] = useState(null);

//   useEffect(() => {
//     if (stripe) {
//       // Ensure amount is a positive integer in cents
//       const safeAmount = parseInt(amount, 10);
//       if (!safeAmount || safeAmount <= 0) {
//         console.error("Invalid amount passed to ApplePayButton:", amount);
//         return;
//       }

//       const pr = stripe.paymentRequest({
//         country: "AU", // ✅ must be "AU" (not "AUS")
//         currency,
//         total: {
//           label: "Pure Kit",
//           amount: safeAmount, // e.g. 6500 = AUD $65.00
//         },
//         requestPayerName: true,
//         requestPayerEmail: true,
//       });

//       pr.canMakePayment().then((result) => {
//         // result can be { applePay: true }, { googlePay: true } or null
//         if (result && result.applePay) {
//           setPaymentRequest(pr);
//         }
//       });
//     }
//   }, [stripe, amount, currency]);

//   if (!paymentRequest) {
//     return <p>Apple Pay not available</p>;
//   }

//   return (
//     <PaymentRequestButtonElement
//       options={{
//         paymentRequest,
//         style: {
//           paymentRequestButton: {
//             type: "buy",
//             theme: "dark",
//             height: "48px",
//           },
//         },
//       }}
//     />
//   );
// }


"use client";
import { useEffect, useState } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";

export default function ApplePayButton({ amount = 6500, currency = "aud" }) {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canPay, setCanPay] = useState(false);

  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: "AU",
      currency,
      total: { label: "Pure Kit", amount },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result && result.applePay) {
        setCanPay(true);
        setPaymentRequest(pr);
      } else {
        setCanPay(false);
      }
    });

    pr.on("token", async (event) => {
      // send token.id to your backend to create PaymentIntent
      console.log("Apple Pay token:", event.token.id);
      event.complete("success");
      alert("✅ Payment successful!");
    });
  }, [stripe, amount, currency]);

  if (!canPay) {
    return (
      <button
        onClick={() => alert("Apple Pay not available. Please use card.")}
        className="w-full flex justify-center items-center bg-black text-white rounded-lg py-3 shadow-lg"
      >
        <img src="/images/apple-pay-logo.svg" className="h-6 mr-2" />
        <span className="text-lg">Pay with Apple Pay</span>
      </button>
    );
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
 