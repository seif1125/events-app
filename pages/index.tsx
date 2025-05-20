import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleGoToEvents = () => {
    router.push("/events"); // Navigate to the events page
  };

  return (

    
  
        
       
        <div className="bg-[url('/background.webp')] bg-fixed h-full overflow-hidden bg-cover bg-center bg-no-repeat container mx-auto flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-6xl font-bold">Welcome to Events Hub</h1>
        <p className="mt-4 text-md md:text-xl text-center">
          Discover amazing events in the UAE and reserve your tickets effortlessly.
        </p>
        <Link
        href={'/events'}
          onClick={handleGoToEvents}
          className="text-center mt-8 px-6 mx-auto w-3/4 md:w-1/4 py-3 bg-[#1f2937] text-white text-lg rounded-md hover:bg-[#2f476a] transition-all"
        >
          Explore Events
        </Link>
       
      
    </div>
    
  );
}

