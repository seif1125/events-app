import { GetServerSideProps } from "next";

interface AboutProps {
  companyInfo: {
    name: string;
    description: string;
    mission: string;
    vision: string;
  };
}

const About: React.FC<AboutProps> = ({ companyInfo }) => {
  const { name, description, mission, vision } = companyInfo;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <section className="mt-6">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="mt-4">{description}</p>
      </section>
      <section className="mt-8">
        <h3 className="text-xl font-bold">Our Mission</h3>
        <p className="mt-2">{mission}</p>
      </section>
      <section className="mt-8">
        <h3 className="text-xl font-bold">Our Vision</h3>
        <p className="mt-2">{vision}</p>
      </section>
    </div>
  );
};

// Fetch data for the page on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Simulated API data
  const companyInfo = {
    name: "Events Hub",
    description: "Events Hub is a leading platform for finding and reserving tickets for events in the UAE.",
    mission: "To make events accessible and enjoyable for everyone by simplifying ticketing.",
    vision: "To become the go-to platform for events and entertainment across the Middle East.",
  };

  // Simulate server-side caching (use real API or database in production)
  return {
    props: {
      companyInfo,
    },
  };
};

export default About;
