import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1320px] px-2.5 md:px-4", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
