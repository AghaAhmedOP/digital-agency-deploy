import React from "react";
import { Button } from "./ui/button";
import { MdDownload } from "react-icons/md";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mt-20 flex flex-col lg:flex-row items-center">
      {/* Left Section */}
      <div className="flex flex-col flex-1">
        <h1 className="text-4xl font-bold leading-snug text-[#1d2144] sm:text-[42px] lg:text-[40px] xl:text-[42px]">
          Next.js Site Template For <br /> Agency and Portfolio
        </h1>
        <p className="max-w-[480px] text-base text-[#959cb1] font-medium mt-8">
          Elevate your online presence and impress clients effortlessly! —
          featuring essential integrations, pre-built pages, and customizable
          components. Modern, responsive design with fast loading and SEO
          optimization.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 mt-10">
          <Link
            href={"#"}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-10 py-4 text-center text-base font-medium tracking-wide text-white hover:bg-primary/90 lg:px-8 xl:px-10"
          >
            Explore Portfolio
          </Link>

          <Link
            href={"#"}
            className="inline-flex items-center justify-center tracking-wide py-1 text-center text-base font-medium text-[#959cb1] hover:text-primary gap-2"
          >
            <MdDownload className="fill-primary w-6 h-6" />
            Download Brochure
          </Link>
        </div>

        <div className=" flex flex-col gap-4 mt-10">
          <p className="mb-2 flex items-center text-xs text-[#959cb1] font-medium">
            Trusted by the best
            <span className="ml-2 inline-block h-[1px] w-8 bg-[#959cb1] tracking-wide"></span>
          </p>
          <div className="flex flex-wrap gap-10">
            <img
              src="hero/lineicons.svg"
              alt="lineicons image"
              className="sm:w-40"
            />
            <img
              src="hero/formbold.svg"
              alt="formbold image"
              className="sm:w-40"
            />
            <img
              src="hero/uideck.svg"
              alt="ui-deck image"
              className="sm:w-40"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex px-4 sm:px-0 lg:justify-end items-center mt-10 lg:mt-0 relative">
        <img src="hero/hero-image-01.webp" alt="Man looking at laptop" />
        <img
          src="hero/deco.svg"
          className="absolute -bottom-10 -left-10 -z-20"
        />
      </div>
    </div>
  );
};

export default Hero;
