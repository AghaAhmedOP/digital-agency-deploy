import { FaFacebookF, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

const About = () => {
  return (
    <div className="mt-40 flex flex-col lg:flex-row gap-10 items-center">
      <div className="flex-1">
        <SectionHeader
          subHeading="About us"
          heading="Better design, better experience"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui ligula, malesuada vel convallis in, tincidunt ut mi Vestibulum sit amet."
          hclassname={"max-w-[400px]"}
        />
      </div>
      <div className="flex flex-col flex-1 items-end">
        <div>
          <h2 className="mb-6 text-2xl font-semibold text-black md:text-3xl">
            Connect with us
          </h2>
          <p className="mb-10 text-base font-medium text-para max-w-prose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            ligula, malesuada vel convallis in, tincidunt ut mi. Vestibulum sit
            amet urna placerat, tempor soloa demanium testi lor Aliq lorem vitae
            semper tempor.
          </p>
          <div className="flex gap-2 items-center justify-start">
            <Link
              href="#"
              className="p-2 rounded-full hover:bg-primary hover:text-white transition duration-150 text-para border border-para"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full hover:bg-primary hover:text-white transition duration-150 text-para border border-para"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full hover:bg-primary hover:text-white transition duration-150 text-para border border-para"
            >
              <FaYoutube />
            </Link>
            <Link
              href="#"
              className="p-2 rounded-full hover:bg-primary hover:text-white transition duration-150 text-para border border-para"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
