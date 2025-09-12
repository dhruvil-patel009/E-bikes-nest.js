"use client";

import { useEffect, useState } from "react";
import { Elements, PaymentElement, PaymentRequestButtonElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function CheckoutForm({ clientSecret }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (!stripe) return;

    // ✅ Setup PaymentRequest API (Google Pay / Apple Pay)
    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Bike Payment",
        amount: 2000, // $20.00
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    // Check if GPay / Apple Pay is available on this device
    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setMessage(error.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ✅ Google Pay / Apple Pay Button */}
      {paymentRequest && (
        <div className="mb-4">
          <PaymentRequestButtonElement options={{ paymentRequest }} />
        </div>
      )}

      <div className="flex items-center my-3">
        <hr className="flex-1" />
        <span className="px-2 text-gray-500">or pay with card</span>
        <hr className="flex-1" />
      </div>

      <PaymentElement />
      {message && <p className="text-red-500">{message}</p>}

      <button
        disabled={loading || !stripe}
        className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? "Processing..." : "Pay and Download My File"}
      </button>
    </form>
  );
}

export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const createPaymentIntent = async () => {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 2000 }),
      });
      const data = await res.json();
      setClientSecret(data.clientSecret);
    };

    createPaymentIntent();
  }, []);

  if (!clientSecret) return <p className="text-center mt-10">Loading payment page...</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Payment method</h1>
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      </div>
    </div>
  );
}
