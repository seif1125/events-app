import Link from "next/link";
import React from "react";


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

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      {/* Event Image */}
      <img
        src={event.image_url}
        alt={event.name}
        className="w-full h-40 object-cover rounded-t-lg"
      />

      {/* Event Details */}
      <div className="mt-4">
        <h2 className="text-xl font-bold text-accent">{event.name}</h2>
        <p className=" text-primary">{event.category}</p>
        <p className="text-gray-800">
          <strong className="text-accent">Date:</strong> {event.date}
        </p>
        <p className="text-gray-800">
          <strong className="text-accent">Time:</strong> {event.time}
        </p>
        <p className="text-gray-800">
          <strong className="text-accent">Location:</strong> {event.location}
        </p>
        <p className="text-gray-800">
          <strong className="text-accent">Price:</strong> {event.price}
        </p>

        {/* Availability */}
        {event.tickets_available ? (
          <p className="text-green-600 mt-2">Tickets Available</p>
        ) : (
          <p className="text-red-600 mt-2">Sold Out</p>
        )}

        {/* Description */}
        <p className="text-accent my-2 line-clamp-2">{event.description}</p>

        {/* Reserve Button */}
        <div className="flex justify-between ">
        {/* <button
          className={`${
            event.tickets_available
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-500 cursor-not-allowed"
          } text-white px-4 py-2 rounded mt-4`}
          disabled={!event.tickets_available}
        >
          {event.tickets_available ? "Reserve Tickets" : "Unavailable"}
        </button> */}
         
         <Link className=" text-primary px-4 py-2 bg-accent rounded-md hover:bg-[#2f476a]" href={`event/${event.id}`}>
          View Details
         </Link>

        </div>
     
      </div>
    </div>
  );
};

export default EventCard;
