import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Do NOT use non-null assertion (!) and type annotations here
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export async function POST(request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      throw new Error('Missing STRIPE_SECRET_KEY env variable');
    }
  const { amount } = await request.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card','google_pay','apple_pay'], // Apple Pay & Google Pay are enabled automatically if set up in Stripe Dashboard
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Pure kit',
          },
          unit_amount: amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${request.headers.get('origin')}/success`,
    cancel_url: `${request.headers.get('origin')}/cancel`,
  });

  return NextResponse.json({ url: session.url });

} catch (error) {
    console.error('Stripe checkout error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// 




///////////////////////////////////////////////////////////////////////////////////////
// src/app/api/checkout/route.js
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2023-10-16",
// });

// export async function POST(req) {
//   try {
//     const { amount } = await req.json();

//     // Create a PaymentIntent for one-time payment
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount || 2000, // in cents (2000 = $20)
//       currency: "usd",
//       automatic_payment_methods: {
//         enabled: true, // enables Card, Google Pay, Apple Pay automatically
//       },
//     });

//     return new Response(JSON.stringify({ clientSecret: paymentIntent.client_secret }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Stripe error:", error);
//     return new Response(JSON.stringify({ error: error.message }), { status: 500 });
//   }
// }



// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2023-10-16",
// });

// export async function POST(req) {
//   try {
//     const { amount, currency } = await req.json();

//     // Stripe requires amount >= 50 cents (500 cents = $5.00 AUD)
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount || 500, // in cents
//       currency: currency || "aud",
//       automatic_payment_methods: { enabled: true }, // ✅ allow card + GPay + ApplePay
//     });

//     return new Response(
//       JSON.stringify({ clientSecret: paymentIntent.client_secret }),
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Stripe PaymentIntent Error:", err.message);
//     return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//   }
// }



// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2023-10-16",
// });

// export async function POST(req) {
//   try {
//     const { amount, currency } = await req.json();

//     // Stripe requires minimum of 50 cents (so at least 50 in cents)
//     const finalAmount = amount && amount >= 50 ? amount : 500; // fallback $5 AUD

//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: finalAmount, // amount is in cents
//       currency: currency || "aud",
//       automatic_payment_methods: { enabled: true },
//     });

//     return new Response(
//       JSON.stringify({ clientSecret: paymentIntent.client_secret }),
//       { status: 200 }
//     );
//   } catch (err) {
//     console.error("Stripe Error:", err.message);
//     return new Response(JSON.stringify({ error: err.message }), { status: 500 });
//   }
// }


