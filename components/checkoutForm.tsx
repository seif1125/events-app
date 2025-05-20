import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

interface CheckoutFormProps {
  amount: number;
}

const CheckoutForm = ({ amount }: CheckoutFormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setMessage(error.message || "An error occurred.");
      setPaymentSuccess(false);
      setIsProcessing(false);
      return;
    }

    try {
      const response = await fetch("/api/charge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token.id,
          amount: amount,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setPaymentSuccess(true);
        setMessage("✅ Payment successful! You are now registered for the event.");
      } else {
        setPaymentSuccess(false);
        setMessage("❌ Payment failed. Please try again.");
      }
    } catch (err) {
      setPaymentSuccess(false);
      setMessage("⚠️ Something went wrong. Please try again later.");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": { color: "#aab7c4" },
            },
            invalid: { color: "#9e2146" },
          },
        }}
      />

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {isProcessing ? "Processing..." : `Pay AED ${amount}`}
      </button>

      {message && (
        <p className={`mt-4 text-center ${paymentSuccess ? "text-green-500" : "text-red-500"}`}>
          {message}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
