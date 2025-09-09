// import { NextResponse } from 'next/server';
// import Stripe from 'stripe';

// // Do NOT use non-null assertion (!) and type annotations here
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: '2023-10-16',
// });

// export async function POST(request) {
//   try {
//     if (!process.env.STRIPE_SECRET_KEY) {
//       throw new Error('Missing STRIPE_SECRET_KEY env variable');
//     }
//   const { amount } = await request.json();

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card','google_pay','apple_pay'], // Apple Pay & Google Pay are enabled automatically if set up in Stripe Dashboard
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Pure kit',
//           },
//           unit_amount: amount,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${request.headers.get('origin')}/success`,
//     cancel_url: `${request.headers.get('origin')}/cancel`,
//   });

//   return NextResponse.json({ url: session.url });

// } catch (error) {
//     console.error('Stripe checkout error:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   }
// }


// src/app/api/checkout/route.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "link"], // Apple Pay & GPay auto included
      mode: "payment",
      customer_email: "Dhruvilpatel200199@gmail.com",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Pure kit",
            },
            unit_amount: 6500, // $65
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
      invoice_creation: { enabled: true },
    });

    return Response.json({ id: session.id });
  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}

