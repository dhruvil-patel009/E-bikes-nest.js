// // src/app/api/create-payment-intent/route.js
// import Stripe from 'stripe';
// import { NextResponse } from 'next/server';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2022-11-15',
// });

// export async function POST(req) {
//   try {
//     const { amount = 6000, currency = 'aud' } = await req.json(); // amount in cents
//     // automatic_payment_methods lets Stripe expose wallets (Google Pay) if enabled in Dashboard
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount,
//       currency,
//       automatic_payment_methods: { enabled: true },
//       metadata: { integration: 'payment-request-button', product: 'E-bike 6-8h' },
//     });

//     return NextResponse.json({ clientSecret: paymentIntent.client_secret });
//   } catch (err) {
//     console.error('create-payment-intent error', err);
//     return NextResponse.json({ error: err.message || 'Server error' }, { status: 500 });
//   }
// }

// src/app/api/create-payment-intent/route.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req) {
  try {
    const { amount = 6000, currency = "aud" } = await req.json(); // amount in cents
    // automatic_payment_methods lets Stripe surface wallets like Google Pay when enabled in Dashboard
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: { product: "E-bike 6-8h" },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("create-payment-intent error", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
