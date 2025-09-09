"use client";
import { useEffect, useState } from "react";
import {
  PaymentRequestButtonElement,
  useStripe,
} from "@stripe/react-stripe-js";

export default function ApplePayButton({ amount, currency = "aud" }) {
  const stripe = useStripe();
  const [paymentRequest, setPaymentRequest] = useState(null);

  useEffect(() => {
    if (stripe) {
      const pr = stripe.paymentRequest({
        country: "AU", // Australia
        currency,
        total: {
          label: "Pure Kit",
          amount,
        },
        requestPayerName: true,
        requestPayerEmail: true,
      });

      pr.canMakePayment().then((result) => {
        if (result && result.applePay) {
          setPaymentRequest(pr);
        }
      });
    }
  }, [stripe, amount, currency]);

  if (!paymentRequest) {
    return <p>Apple Pay not available</p>;
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
