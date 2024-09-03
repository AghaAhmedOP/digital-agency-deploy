"use client";
import { NAVLINKS } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import MobileNavbar from "./MobileNavbar";
import MaxWidthWrapper from "./MaxWidthwrapper";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
const Navbar = () => {
  const [scrollPosition, setscrollPosition] = useState(0);
  const handleScroll = () => {
    setscrollPosition(window.scrollY); // => scroll position
  };
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn("w-full flex z-40 items-center transition", {
        "sticky top-0 nav-morph": scrollPosition >= 50,
      })}
    >
      <MaxWidthWrapper>
        <div className="h-full flex justify-between items-center py-4 lg:py-4">
          <Link
            href={"/"}
            className="w-40 sm: sm:w-44 md:w-40 lg:w-44 max-w-full xl:w-48"
          >
            <img
              src={"logo.svg"}
              alt="Logo"
              className="w-full object-contain"
            />
          </Link>

          <ul className="hidden lg:flex gap-10 flex-1 pl-16">
            {NAVLINKS.map((navlink) => (
              <Link
                key={navlink.label}
                href={navlink.link}
                className="hover:text-primary font-medium"
              >
                {navlink.label}
              </Link>
            ))}
          </ul>

          <div className="hidden md:flex gap-5 items-center md:flex-1 flex-none justify-end mr-10">
            <Button variant="ghost">
              <Search className="text-gray-400" />
            </Button>
            <button className="bg-primary text-white text-base font-bold transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg md:px-9 lg:px-8 xl:px-9 py-3 px-8 rounded-full">
              <Link href={"/#contact"}>Get a Quote</Link>
            </button>
          </div>

          <div className="lg:hidden flex">
            <MobileNavbar />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
