// pages/api/charge.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Initialize Stripe (without specifying apiVersion for compatibility)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // apiVersion: "2020-08-27", // optional, remove for safety
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { token, amount } = req.body;

      if (!token || !amount) {
        return res.status(400).json({ success: false, error: "Missing token or amount" });
      }

      const charge = await stripe.charges.create({
        amount: amount * 100, // convert to cents
        currency: "aed",
        source: token,
        description: "Event Ticket Payment",
      });

      res.status(200).json({ success: true, charge });
    } catch (error: any) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
