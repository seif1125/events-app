import EventCard from "@/components/EventCard";
import { GetStaticProps } from "next";

// Define the Event type
interface Event {
  id: number;
  name: string;
  date: string;
  time:string;
  location: string;
  description: string;
  category: string;
  price: string;
  tickets_available: boolean;
  image_url: string;
}

interface EventsProps {
  events: Event[]; // Ensure that events is an array
}

const Events: React.FC<EventsProps> = ({ events }) => {
  // Ensure `events` is an array and not undefined
  if (!events || events.length === 0) {
    return <div>No events available at the moment.</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

// Fetch data at build time with getStaticProps
export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch("https://6787b050c4a42c916107d6d9.mockapi.io/events");
    const data = await res.json();

    // Ensure that the fetched data is an array
    if (!Array.isArray(data)) {
      throw new Error("Data is not an array");
    }

    return {
      props: {
        events: data, // Pass the fetched data as props to the component
      },
      revalidate: 60, // Optional: Enable Incremental Static Regeneration (ISR) every 10 seconds
    };
  } catch (error) {
    console.error("Error fetching events:", error);
    return {
      props: {
        events: [], // Return an empty array in case of an error
      },
    };
  }
};

export default Events;