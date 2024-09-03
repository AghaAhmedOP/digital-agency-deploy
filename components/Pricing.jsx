import SectionHeader from "./SectionHeader";
import { PRICING } from "@/constants";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="mt-40" id="pricing">
      <div>
        <SectionHeader
          subHeading={"pricing"}
          heading={"Our Pricing Plan"}
          paragraph={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
          classname={"items-center text-center"}
          pclassname={"!text-base !font-medium"}
        />
      </div>

      <div className="-mx-4 flex flex-wrap justify-center mt-20">
        {PRICING.map(({ subheading, Price, desc, features }) => (
          <PricingCard
            key={subheading}
            subheading={subheading}
            price={Price}
            desc={desc}
            features={features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
