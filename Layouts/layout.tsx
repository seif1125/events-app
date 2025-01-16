import { ReactNode } from "react";
import  Navbar  from "../components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between ">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1  container mx-auto  p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Events App. All rights reserved.</p>
      </footer>
    </div>
  );
};
