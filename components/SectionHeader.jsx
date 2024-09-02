import { cn } from "@/lib/utils";

const SectionHeader = ({
  subHeading,
  heading,
  paragraph,
  classname,
  hclassname,
  pclassname,
}) => {
  return (
    <div className={cn("flex flex-col", classname)}>
      {subHeading !== false && (
        <span className="text-primary text-lg md:text-xl uppercase font-bold mb-3">
          {subHeading}
        </span>
      )}
      <h1
        className={cn(
          "mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-[45px] md:leading-tight",
          hclassname
        )}
      >
        {heading}
      </h1>
      <p
        className={cn(
          "max-w-[570px] text-base font-medium text-para",
          pclassname
        )}
      >
        {paragraph}
      </p>
    </div>
  );
};
export default SectionHeader;
