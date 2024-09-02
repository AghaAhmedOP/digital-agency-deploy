import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({ className, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1320px] px-6 md:px-4 items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
