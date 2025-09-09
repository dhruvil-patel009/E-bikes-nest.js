// src/app/api/webhook/route.js
import Stripe from "stripe";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req) {
  const sig = headers().get("stripe-signature") || "";
  const rawBody = await req.text(); // app-router: get raw text
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook signature verification failed.", err);
    return new NextResponse("Webhook Error", { status: 400 });
  }

  // Handle events:
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      console.log("Checkout session completed:", session.id);
      // TODO: fulfill order, send email, etc.
      break;
    }
    case "payment_intent.succeeded": {
      const pi = event.data.object;
      console.log("PaymentIntent succeeded:", pi.id);
      // TODO: mark payment paid in DB
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
