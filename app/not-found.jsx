import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col">
      <h2 className="text-4xl font-bold mb-5 flex gap-5">
        404 <Separator orientation="vertical" /> Not Found
      </h2>
      <p className="text-lg font-semibold text-para mb-5">
        Could not find requested resource
      </p>
      <Link
        href="/"
        className="text-xl underline-offset-2 underline hover:text-primary hover:no-underline"
      >
        Return Home
      </Link>
    </div>
  );
}
