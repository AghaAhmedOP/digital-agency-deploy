import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
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
              <SheetClose asChild>
                <Link href={"/"}>
                  <img src={"logo.svg"} alt="Logo" />
                </Link>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-full">
            <ul className="flex flex-col gap-6 flex-1 mt-10">
              {NAVLINKS.map((navlink) => (
                <SheetClose asChild key={navlink.label}>
                  <Link
                    href={navlink.link}
                    className="hover:text-primary text-lg"
                  >
                    {navlink.label}
                  </Link>
                </SheetClose>
              ))}
            </ul>
            <div className="flex items-center justify-center mb-10">
              <SheetClose asChild>
                <button className="bg-primary text-white text-base font-bold transition duration-300 ease-in-out hover:bg-opacity-90 hover:shadow-lg py-3 px-8 rounded-sm w-full">
                  <Link href={"/#contact"}>Get a Quote</Link>
                </button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
export default MobileNavbar;
