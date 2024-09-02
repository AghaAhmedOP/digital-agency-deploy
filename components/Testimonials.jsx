import { TESTEMONIALS } from "@/constants";
import SectionHeader from "./SectionHeader";
import { Card, CardContent } from "./ui/card";
import TestemonialCard from "./TestemonialCard";

const Testimonials = () => {
  return (
    <div className="mt-40">
      <div>
        <SectionHeader
          subHeading={"Testemonials"}
          heading={"Hear From Our Clients"}
          paragraph={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
          classname={"items-center text-center"}
          pclassname={"!text-base !font-medium"}
        />
      </div>
      <div className="-mx-4 flex flex-wrap mt-20">
        {TESTEMONIALS.map(({ img, name, review, position, avatar }) => (
          <TestemonialCard
            key={name}
            image={img}
            name={name}
            review={review}
            position={position}
            avatar={avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
