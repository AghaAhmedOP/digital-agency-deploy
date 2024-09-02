import React from "react";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SERVICES } from "@/constants";
import { Separator } from "./ui/separator";

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
              href={"#"}
              className="uppercase text-lg font-medium text-white underline hover:text-primary"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10"
          >
            <Card className="!rounded-none !border-none">
              <CardHeader className="!p-0 !space-y-0 mb-10">
                <img src={service.img} alt={`${service.title} Image`} />
              </CardHeader>
              <CardContent className="!px-10">
                <h3 className="mb-4 block text-lg font-bold text-dark hover:text-primary sm:text-xl">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-para">
                  {service.desc}
                </p>
              </CardContent>
              <CardFooter className="!px-4 !py-2">
                <div className="w-full px-6">
                  <Separator />
                  <Link
                    href="#"
                    className="flex items-center gap-4 py-6 text-base font-medium text-para hover:text-primary"
                  >
                    View Details <FaArrowRight />
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
