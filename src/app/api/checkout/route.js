import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Do NOT use non-null assertion (!) and type annotations here
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
});

export async function POST(request) {
  const { amount } = await request.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'], // Apple Pay & Google Pay are enabled automatically if set up in Stripe Dashboard
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
}
