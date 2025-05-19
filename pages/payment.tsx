import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const stripePromise = loadStripe("pk_test_51Qhr39HCMdJy5dnakfyahonBq0IZCxESIs8ypKINiXR72I9nAmSRwi5wTa6flAmbPfpWvmZ9KkrKiyq5zKgZCxNt00BnHwR3jN");

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();
  const { name, price, date, time, location } = router.query;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const cardElement = elements?.getElement(CardElement);
    if (!stripe || !cardElement) return;

    const result = await stripe.createToken(cardElement);

    if (result.error) {
      setMessage(result.error.message || "An error occurred.");
      setIsProcessing(false);
    } else {
      setMessage("Payment successful! (Token generated)");
      console.log("Stripe Token:", result.token);
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold text-primary">Event: {name}</h2>
      <p className="text-secondary">Date: {date}</p>
      <p className="text-secondary">Time: {time}</p>
      <p className="text-secondary">Location: {location}</p>
      <p className="text-secondary">Price: {price}</p>

      <CardElement
        options={{
          style: {
            base: { fontSize: "16px", color: "#424770", "::placeholder": { color: "#aab7c4" } },
            invalid: { color: "#9e2146" },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="bg-primary text-accent px-6 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {message && <p className="mt-4 text-primary">{message}</p>}
    </form>
  );
}

export default function PaymentDemo() {
  return (
    <div className="bg-[url('/background.webp')] bg-fixed overflow-hidden  bg-cover bg-center bg-no-repeat pt-2 pb-4">
    <div className="w-full h-[75%] overflow-y-hidden flex flex-col justify-center mx-auto max-w-xl bg-accent bg-opacity-90 p-8 rounded-md">
      
     
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
     
    </div>
    </div>
  );
}
