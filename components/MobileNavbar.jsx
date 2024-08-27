import Link from "next/link";
import { Menu, Search } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { NAVLINKS } from "@/constants";

const MobileNavbar = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu width={36} height={36} />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              <Link href={"/"} className="">
                <img src={"logo.svg"} alt="Logo" />
              </Link>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-full">
            <ul className="flex flex-col gap-6 flex-1 mt-10">
              {NAVLINKS.map((navlink) => (
                <Link
                  key={navlink.label}
                  href={navlink.link}
                  className="hover:text-primary text-lg"
                >
                  {navlink.label}
                </Link>
              ))}
            </ul>
            <div className="flex items-center justify-center mb-10">
              <button className="bg-primary text-white text-base font-bold transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg py-3 px-8 rounded-sm w-full">
                <Link href={"#"}>Get a Quote</Link>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileNavbar;
