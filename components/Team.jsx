import React from "react";
import SectionHeader from "./SectionHeader";
import { TEAM } from "@/constants";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <div className="mt-[450px]">
      <div>
        <SectionHeader
          subHeading={"Team"}
          heading={"Our Awesome Team"}
          paragraph={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
          classname={"items-center text-center"}
          pclassname={"!text-base !font-medium"}
        />
      </div>
      <div className="flex flex-wrap justify-center mt-20">
        {TEAM.map(({ tmName, position, img }) => (
          <TeamCard
            key={tmName}
            tmName={tmName}
            position={position}
            img={img}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
