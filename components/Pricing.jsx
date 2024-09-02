import React from "react";
import SectionHeader from "./SectionHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
        {PRICING.map((pricing) => (
          <PricingCard
            key={pricing.subheading}
            subheading={pricing.subheading}
            price={pricing.Price}
            desc={pricing.desc}
            features={pricing.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
