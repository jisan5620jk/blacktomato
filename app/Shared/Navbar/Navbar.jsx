import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaUser, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="absolute z-50 w-full px-6 py-4 flex items-center justify-between">
      {/* Site Logo */}
      <Link href="/">
        <Image
          src="/images/black-tomato.svg" // Public folder path or remote URL
          alt="Website Logo"
          width="40"
          height="30"
          priority
        />
      </Link>

      {/* Nav Links */}
      <div className="flex items-center space-x-6">
        <div className="hidden md:flex space-x-4">
          <Link
            href="/destinations"
            className="font-Brandon font-medium text-white hover:text-PrimaryColor-0"
          >
            DESTINATIONS
          </Link>
          <Link
            href="/experiences"
            className="font-Brandon font-medium text-white hover:text-PrimaryColor-0"
          >
            EXPERIENCES
          </Link>
          <Link
            href="/about"
            className="font-Brandon font-medium text-white hover:text-PrimaryColor-0"
          >
            ABOUT
          </Link>
        </div>
      </div>

      {/* Icons + Phone + CTA */}
      <div className="flex items-center space-x-4">
        <button aria-label="Search">
          <FaSearch className="text-white" />
        </button>
        <span className="hidden md:inline text-white">+44 207 426 9888</span>
        <button aria-label="User">
          <FaUser className="text-white" />
        </button>
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition">
          ENQUIRE NOW
        </button>
        <button className="md:hidden">
          <FaBars className="text-white" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
