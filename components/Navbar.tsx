import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

 const Navbar: React.FC = () => {

  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;
  return (
    <nav className="bg-gray-800 text-white p-4 w-full overflow-y-hidden overflow-x-hidden">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="flex flex-row-reverse items-center" href="/">
          <span className="text-xl font-bold ml-2 text-primary hidden md:block">Events Hub</span>
          <Image src="/logo.png" alt="Logo" width={50} height={50} className="ml-2" />
        </Link>
        <div className="flex space-x-4">
            <Link href="/about">
        <span
          className={`hover:text-primary hover:underline ${
            isActive("/about") ? "text-primary underline" : "text-secondary"
          }`}
        >
          About
        </span>
      </Link>

      <Link href="/events">
        <span
          className={`hover:text-primary hover:underline ${
            isActive("/events") ? "text-primary underline" : "text-secondary"
          }`}
        >
          Events
        </span>
      </Link>
          
        </div>
      </div>
    </nav>)
    }
    export default Navbar