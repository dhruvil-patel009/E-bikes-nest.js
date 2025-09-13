// src/app/checkout/checkout.js
"use client";
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useSearchParams } from "next/navigation";
import "../styles/checkout.css"; // small CSS shown below

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const currencyParam = searchParams.get("currency") || "aud";
  const priceParam = parseFloat(searchParams.get("price")) || 65;

  const [clientSecret, setClientSecret] = useState(null);
  const [currency, setCurrency] = useState(currencyParam);
  const [price, setPrice] = useState(priceParam);

  // Calculate smallest currency unit (paisa/cents)
  const amount = Math.round(price * 100);

  useEffect(() => {
    // Create PaymentIntent on page load or when currency/amount changes
    async function createPI() {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, currency }),
      });
      const data = await res.json();
      if (data.clientSecret) setClientSecret(data.clientSecret);
      else console.error(data);
    }
    createPI();
  }, [amount, currency]);

  const options = clientSecret ? { clientSecret } : null;

  return (
    <div className="checkout-page">
      <div className="right-col">
        <div className="payment-card">
          {clientSecret && (
            <Elements stripe={stripePromise} options={options}>
              <CheckoutForm
                clientSecret={clientSecret}
                amount={amount}
                currency={currency}
              />
            </Elements>
          )}
          {!clientSecret && <div className="loading">Loading payment...</div>}
        </div>
      </div>
    </div>
  );
}
