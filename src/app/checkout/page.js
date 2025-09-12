// "use client";

// import { useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   PaymentRequestButtonElement,
//   useStripe,
//   useElements,
//   CardElement,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// export default function CheckoutPage() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
//       <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-6 space-y-6">
//         <h1 className="text-3xl font-bold text-center text-green-700">
//           Complete Your Payment
//         </h1>
//         <Elements stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       </div>
//     </div>
//   );
// }

// function CheckoutForm() {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [clientSecret, setClientSecret] = useState(null);
//   const [paymentRequest, setPaymentRequest] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const amount = 1500; // $15.00 AUD
//   const currency = "aud";

//   useEffect(() => {
//     if (!stripe) return;

//     // 1️⃣ Create PaymentIntent from API
//     fetch("/api/checkout", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount, currency }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));

//     // 2️⃣ Setup PaymentRequest for Google Pay / Apple Pay
//     const pr = stripe.paymentRequest({
//       country: "AU",
//       currency,
//       total: { label: "Bike Payment", amount },
//       requestPayerName: true,
//       requestPayerEmail: true,
//     });

//     pr.canMakePayment().then((result) => {
//       console.log("Wallet Availability:", result);
//       if (result) setPaymentRequest(pr);
//     });
//   }, [stripe]);

//   const handleCardPay = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements || !clientSecret) return;

//     setLoading(true);
//     const cardElement = elements.getElement(CardElement);

//     const { error, paymentIntent } = await stripe.confirmCardPayment(
//       clientSecret,
//       { payment_method: { card: cardElement } }
//     );

//     setLoading(false);

//     if (error) alert(error.message);
//     else if (paymentIntent.status === "succeeded") alert("✅ Payment successful!");
//   };

//   return (
//     <div className="space-y-6">
//       {/* 1️⃣ Wallet Payment (Google Pay / Apple Pay) */}
//       {paymentRequest ? (
//         <PaymentRequestButtonElement
//           options={{ paymentRequest }}
//           className="w-full"
//         />
//       ) : (
//         <div className="text-center text-gray-600">
//           Wallet payments unavailable — use card below.
//         </div>
//       )}

//       {/* Divider */}
//       <div className="flex items-center">
//         <div className="flex-1 h-px bg-gray-200"></div>
//         <span className="px-4 text-gray-500 text-sm">OR</span>
//         <div className="flex-1 h-px bg-gray-200"></div>
//       </div>

//       {/* 2️⃣ Card Payment */}
//       <form onSubmit={handleCardPay} className="space-y-4">
//         <div className="p-3 border border-gray-300 rounded-lg">
//           <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
//         </div>
//         <button
//           type="submit"
//           disabled={!stripe || loading}
//           className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
//         >
//           {loading ? "Processing..." : "Pay $15.00"}
//         </button>
//       </form>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentRequestButtonElement,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-4">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-2xl p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-green-700">
          Complete Your Payment
        </h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState(null);
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canPay, setCanPay] = useState(false);
  const [loading, setLoading] = useState(false);

  const amount = 1500; // $15.00 AUD (in cents)
  const currency = "aud";

  useEffect(() => {
    if (!stripe) return;

    // 1️⃣ Create PaymentIntent
    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, currency }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));

    // 2️⃣ Setup PaymentRequest
    const pr = stripe.paymentRequest({
      country: "AU",
      currency,
      total: { label: "Bike Payment", amount },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setCanPay(true);
        setPaymentRequest(pr);
      } else {
        setCanPay(false);
        setPaymentRequest(null);
      }
    });

    pr.on("cancel", () => alert("Wallet payment cancelled."));
  }, [stripe]);

  const handleCardPay = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      { payment_method: { card: cardElement } }
    );

    setLoading(false);

    if (error) alert(error.message);
    else if (paymentIntent.status === "succeeded")
      alert("✅ Payment successful!");
  };

  return (
    <div className="space-y-6">
      {/* ✅ Wallet Button Section */}
      <div className="w-full">
        {canPay && paymentRequest ? (
          <PaymentRequestButtonElement
            options={{
              paymentRequest,
              style: {
                paymentRequestButton: {
                  type: "default", // shows GPay or Apple Pay automatically
                  theme: "dark",
                  height: "50px",
                },
              },
            }}
          />
        ) : (
          <button
            onClick={() =>
              alert(
                "Wallet payment not available on this device/browser. Please use card payment below."
              )
            }
            className="w-full flex justify-center items-center bg-black text-white rounded-lg py-3 gap-2 shadow-lg"
          >
            {/* Google Pay Icon */}
            <img
              src="/images/gpay-icon.svg"
              alt="Google Pay"
              className="h-6 w-auto"
            />
            <span className="text-lg font-medium">Pay with Google Pay</span>
          </button>
        )}
      </div>

      {/* Divider */}
      <div className="flex items-center">
        <div className="flex-1 h-px bg-gray-200"></div>
        <span className="px-4 text-gray-500 text-sm">OR</span>
        <div className="flex-1 h-px bg-gray-200"></div>
      </div>

      {/* Card Payment */}
      <form onSubmit={handleCardPay} className="space-y-4">
        <div className="p-3 border border-gray-300 rounded-lg">
          <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
        >
          {loading ? "Processing..." : "Pay $15.00"}
        </button>
      </form>
    </div>
  );
}
