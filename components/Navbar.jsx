import { NAVLINKS } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  return (
    <div className="h-full flex justify-between items-center py-6 lg:py-8">
      <Link
        href={"/"}
        className="w-44 sm: sm:w-48 md:w-44 lg:w-48 max-w-full xl:w-56 px-4"
      >
        <img src={"logo.svg"} alt="Logo" className="w-full object-contain" />
      </Link>

      <ul className="hidden lg:flex gap-5 flex-1 pl-16">
        {NAVLINKS.map((navlink) => (
          <Link
            key={navlink.label}
            href={navlink.link}
            className="hover:text-primary"
          >
            {navlink.label}
          </Link>
        ))}
      </ul>

      <div className="hidden md:flex gap-5 items-center md:flex-1 flex-none justify-center">
        <Button variant="ghost">
          <Search className="text-gray-400" />
        </Button>
        <button className="bg-primary text-white text-base font-bold transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg md:px-9 lg:px-8 xl:px-9 py-3 px-8 rounded-full">
          <Link href={"#"}>Get a Quote</Link>
        </button>
      </div>

      {/* Mobile Nav bar */}
      <div className="lg:hidden flex">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Navbar;
