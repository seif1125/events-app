import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState(""); // Message state for showing success or error

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    const cardElement = elements?.getElement(CardElement);
    if (!stripe || !cardElement) return;

    // Create a token with the card details
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      setMessage(error.message || "An error occurred.");
      setIsProcessing(false);
    } else {
      // Send the token to your backend for payment processing
      const response = await fetch("/api/charge", {
        method: "POST",
        body: JSON.stringify({
          token: token.id,  // Send the token ID to the backend
          amount: amount,   // Send the amount to the backend
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        // If payment is successful, show success message
        window.alert('success')
        setMessage("Payment successful! You are now registered for the event.");
      } else {
        window.alert('success')
        // If payment failed, show failure message
        setMessage("Payment failed. Please try again.");
      }
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-gray-300"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>

      {/* Show the success or error message */}
      {message && (
        <p className={`mt-4 ${data.success ? "text-green-500" : "text-red-500"}`}>
          {message+'jj'}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
