import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleGoToEvents = () => {
    router.push("/events"); // Navigate to the events page
  };

  return (

    
      <div className="flex flex-col justify-center  z-10 text-center bg-gray text-gray-800 min-h-screen">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Events Hub</h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover amazing events in the UAE and reserve your tickets effortlessly.
        </p>
        <Link
        href={'/events'}
          onClick={handleGoToEvents}
          className="mt-8 px-6 mx-auto w-1/2 py-3 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition-all"
        >
          Explore Events
        </Link>
      </div>
    
  );
}

