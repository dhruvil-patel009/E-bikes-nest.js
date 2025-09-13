// src/app/components/CheckoutForm.jsx
"use client";
import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";

export default function CheckoutForm({ clientSecret, amount, currency }) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);
  const [canMakePayment, setCanMakePayment] = useState(false);
  const [message, setMessage] = useState(null);

  // Create PaymentRequest (wallets) once stripe is ready
  useEffect(() => {
    if (!stripe) return;

    const pr = stripe.paymentRequest({
      country: currency === "aud" ? "AU" : "IN",
      currency,
      total: { label: "Total", amount },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
        setCanMakePayment(true);
      } else {
        setCanMakePayment(false);
      }
    });

    // handle wallet flow
    pr.on("paymentmethod", async (ev) => {
      // Use the existing PaymentIntent clientSecret to confirm
      try {
        const { error, paymentIntent } = await stripe.confirmCardPayment(
          clientSecret,
          { payment_method: ev.paymentMethod.id },
          { handleActions: false }
        );

        if (error) {
          ev.complete("fail");
          setMessage(error.message || "Payment failed");
        } else {
          ev.complete("success");
          // Handle next_action if any
          if (paymentIntent.status === "requires_action") {
            const { error: confirmError } = await stripe.confirmCardPayment(
              clientSecret
            );
            if (confirmError) setMessage(confirmError.message);
            else window.location.href = "/success";
          } else {
            // Payment succeeded
            window.location.href = "/success";
          }
        }
      } catch (err) {
        ev.complete("fail");
        setMessage(err.message);
      }
    });

    // cleanup listener on unmount
    return () => {
      if (pr && pr.removeListener) pr.removeListener("paymentmethod", () => {});
    };
  }, [stripe, clientSecret, amount, currency]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    if (!stripe || !elements) return;
    // Submit Payment Element
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/success` },
    });
    if (error) setMessage(error.message);
  };

  return (
    <div className="checkout-form">
      <div className="email-row">
        <div>Email</div>
        <div>yourname@example.com</div>
      </div>

      <div className="payment-area">
        <div id="wallet-button">
          {canMakePayment && paymentRequest ? (
            <PaymentRequestButtonElement options={{ paymentRequest }} />
          ) : (
            <div className="wallet-fallback">Pay with card below</div>
          )}
        </div>

        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <button className="pay-btn" disabled={!stripe}>
            Pay
          </button>
          {message && <div className="error">{message}</div>}
        </form>
      </div>
      <div className="notice">
        <small>
          By paying you may see different network logos depending on the
          card/wallet
        </small>
      </div>
    </div>
  );
}
