// src/app/api/checkout/route.js
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export async function POST(req) {
  try {
    const body = await req.json();
    const quantity = body?.quantity ?? 1;

    // NOTE:
    // - unit_amount is in cents (6000 => $60.00)
    // - set currency to 'aud' for Australian Dollars
    // - replace product image URL with your absolute URL

    const productImage = `${process.env.NEXT_PUBLIC_SITE_URL}/images/CartoonCycleProductdetailsFrontBlur.jpg`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: {
              name: "E-bike 6-8h Rental - Beyond Bikes",
              images: [productImage], // must be absolute URL
            },
            unit_amount: 6000, // $60.00 AUD in cents
          },
          quantity,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error("Checkout session error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
