import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  price: string;
  tickets_available: boolean;
  image_url: string;
}

export default function EventDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://6787b050c4a42c916107d6d9.mockapi.io/events?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setEvent(data[0]); // Assuming data is an array with one object
        });
    }
  }, [id]);

  if (!event) return <div>Loading...</div>;

  const handleNavigateToPayment = () => {
    router.push({
      pathname: "/payment",
      query: {
        id: event.id,
        name: event.name,
        price: event.price,
        date: event.date,
        time: event.time,
        location: event.location,
      },
    });
  };

  return (
    <div className="container mx-auto mt-8 max-w-3xl">
      {/* Event Image */}
      <img
        src={event.image_url}
        alt={event.name}
        className="w-full h-60 object-cover rounded-lg"
      />

      {/* Event Details */}
      <div className="mt-4">
        <h1 className="text-3xl font-bold">{event.name}</h1>
        <p className="text-gray-600">{event.category}</p>

        {/* Event Information */}
        <p className="text-gray-800 mt-2">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="text-gray-800">
          <strong>Time:</strong> {event.time}
        </p>
        <p className="text-gray-800">
          <strong>Location:</strong> {event.location}
        </p>
        <p className="text-gray-800">
          <strong>Price:</strong> {event.price}
        </p>

        {/* Availability */}
        {event.tickets_available ? (
          <p className="text-green-600 mt-2">Tickets Available</p>
        ) : (
          <p className="text-red-600 mt-2">Sold Out</p>
        )}

        {/* Event Description */}
        <p className="text-gray-600 mt-4 line-clamp-3">{event.description}</p>

        {/* Reserve Button */}
        <button
          onClick={handleNavigateToPayment}
          className={`${
            event.tickets_available
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-500 cursor-not-allowed"
          } text-white px-4 py-2 rounded mt-4`}
          disabled={!event.tickets_available}
        >
          {event.tickets_available ? "Reserve Tickets" : "Unavailable"}
        </button>
      </div>
    </div>
  );
}
