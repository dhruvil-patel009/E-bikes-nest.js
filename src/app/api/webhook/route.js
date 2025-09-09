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
import { buffer } from "micro";
import Stripe from "stripe";
import nodemailer from "nodemailer";

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27",
});

export default async function handler(req, res) {
  const sig = req.headers["stripe-signature"];

  let event;
  try {
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    // const session = event.data.object as Stripe.Checkout.Session;
    const session = event.data.object;

    // ✅ Fetch invoice
    if (session.invoice) {
      const invoice = await stripe.invoices.retrieve(session.invoice);
      const invoicePdf = invoice.invoice_pdf;

      // ✅ Send Email with Invoice
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: session.customer_email,
        subject: "Your Invoice",
        text: "Thank you for your payment! Download your invoice below.",
        html: `<p>Thank you for your payment!</p><a href="${invoicePdf}">Download Invoice</a>`,
      });
    }
  }

  res.json({ received: true });
}
