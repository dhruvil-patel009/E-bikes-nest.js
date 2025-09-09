// 'use client';
// import { loadStripe } from '@stripe/stripe-js';

// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

// export default function CheckoutButton({ amount }) {
//   const handleClick = async () => {
//     const res = await fetch('/api/checkout', {
//       method: 'POST',
//       body: JSON.stringify({ amount }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (!res.ok) {
//   // Handle HTTP errors, maybe read error body if any
//   console.error('Network response error', res.status);
//   return;
// }
//     try {
//   const data = await res.json();
//   window.location.href = data.url;
// } catch (err) {
//   console.error('Failed to parse JSON response:', err);
// }
//   };

//   return <button onClick={handleClick}>Pay $65.00</button>;
// }

// src/app/components/checkout.js
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

async function handleCheckout() {
  const res = await fetch("/api/checkout", {
    method: "POST",
  });
  const data = await res.json();

  //   const session = await res.json();

  //   const stripe = await stripePromise;

  if (data.id) {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );
    stripe?.redirectToCheckout({ sessionId: data.id });
  } else {
    console.error("Checkout error:", data.error);
  }
}

export default function CheckoutPage() {
  return <button onClick={handleCheckout}>Checkout</button>;
}
