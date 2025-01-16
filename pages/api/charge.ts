// pages/api/charge.ts
import Stripe from "stripe";

const stripe = new Stripe("sk_test_51Qhr39HCMdJy5dna4OuZaze86QWlwhgCMilJ3IY4Fawnl8tnqcgMLdx2N8gRDiayhYgoBJqFmEnhBRbpMu5HQMIV00zROX49zq", { apiVersion: "2020-08-27" });

export default async function handler(req:Request, res:Response) {
  if (req.method === "POST") {
    try {
      const { token, amount } = req.body;

      // Create a charge using the token
      const charge = await stripe.charges.create({
        amount: amount, // amount in cents
        currency: "usd",
        source: token,
        description: "Event Ticket Payment",
      });

      // Respond with success
      res.status(200).json({ success: true, charge });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
