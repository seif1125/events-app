import { ReactNode } from "react";
import  Navbar  from "../components/Navbar";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <Head>
        <title>Events Hub</title>
        <meta name="description" content="reserve tickets, and make demo payments" />
      </Head>
    <div className="flex flex-col  justify-between min-h-screen  ">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 mt-0  mx-auto w-full overflow-hidden ">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Events App. All rights reserved.</p>
      </footer>
    </div></>
  );
};
