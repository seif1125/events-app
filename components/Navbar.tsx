import Link from "next/link";

 const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-xl font-bold">Events App</span>
        </Link>
        <div className="flex space-x-4">
          <Link href="/about">
            <span className="hover:underline">About</span>
          </Link>
          <Link href="/events">
            <span className="hover:underline">events</span>
          </Link>
          
        </div>
      </div>
    </nav>)
    }
    export default Navbar