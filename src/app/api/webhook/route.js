// // src/app/api/webhook/route.js
// import Stripe from "stripe";
// import { headers } from "next/headers";
// import { NextResponse } from "next/server";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-11-15",
// });

// export async function POST(req) {
//   const sig = headers().get("stripe-signature") || "";
//   const rawBody = await req.text(); // app-router: get raw text
//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       rawBody,
//       sig,
//       process.env.STRIPE_WEBHOOK_SECRET
//     );
//   } catch (err) {
//     console.error("Webhook signature verification failed.", err);
//     return new NextResponse("Webhook Error", { status: 400 });
//   }

//   // Handle events:
//   switch (event.type) {
//     case "checkout.session.completed": {
//       const session = event.data.object;
//       console.log("Checkout session completed:", session.id);
//       // TODO: fulfill order, send email, etc.
//       break;
//     }
//     case "payment_intent.succeeded": {
//       const pi = event.data.object;
//       console.log("PaymentIntent succeeded:", pi.id);
//       // TODO: mark payment paid in DB
//       break;
//     }
//     default:
//       console.log(`Unhandled event type ${event.type}`);
//   }

//   return NextResponse.json({ received: true });
// }


// backend/pages/api/webhook/route.js
// src/app/api/webhook/route.ts
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27",
});

export async function POST(req) {
  const body = await req.text(); // raw body for Stripe verification
  const sig = headers().get("stripe-signature");

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook Error:", err.message);
    return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    if (session.invoice) {
      const invoice = await stripe.invoices.retrieve(session.invoice);
      const invoicePdf = invoice.invoice_pdf;

      // ✅ Send email with invoice
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: session.customer_email ?? process.env.FALLBACK_EMAIL,
        subject: "Your Invoice",
        html: `<p>Thank you for your payment!</p><a href="${invoicePdf}">Download Invoice</a>`,
      });
    }
  }

  return NextResponse.json({ received: true });
}
