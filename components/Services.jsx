import SectionHeader from "./SectionHeader";
import Link from "next/link";

import { SERVICES } from "@/constants";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div
      id="services"
      className="mt-40 flex flex-col pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="-mx-4 mb-10 flex flex-wrap items-end lg:mb-[60px]">
        <div className="w-full px-4 lg:w-8/12">
          <SectionHeader
            subHeading={"What we do"}
            heading={"We help to build clients their dream projects"}
            classname={"max-w-[625px] mb-[50px]"}
            hclassname={"text-white"}
          />
        </div>

        <div className="w-full px-4 lg:w-4/12">
          <div className="mb-[50px] flex lg:justify-end">
            <Link
              href={"#services"}
              className="uppercase text-lg font-medium text-white underline hover:text-primary"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {SERVICES.map(({ img, desc, link, title }) => (
          <ServicesCard
            img={img}
            desc={desc}
            link={link}
            title={title}
            key={title}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
