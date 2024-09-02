import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const PricingCard = ({ subheading, price, desc, features }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 mb-8">
      <Card className="!relative">
        <CardHeader>
          <h3 className="mb-4 block text-lg font-semibold text-primary">
            {subheading}
          </h3>
          <h2 className="mb-5 text-[42px] font-bold text-dark">
            ${price}{" "}
            <span className="text-base font-medium text-para">/year</span>
          </h2>
          <p className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-para">
            {desc}
          </p>
        </CardHeader>
        <CardContent className=" !space-y-1">
          {features.map((feature) => (
            <p key={feature} className="text-base leading-loose text-para">
              {feature}
            </p>
          ))}
        </CardContent>
        <CardFooter>
          <button
            className={cn(
              "block w-full rounded-md border p-4 text-center text-base font-semibold duration-200 border-[#D4DEFF] bg-transparent text-primary hover:border-primary hover:bg-primary hover:text-white",
              {
                "block w-full rounded-md border p-4 text-center text-base font-semibold duration-200 border-primary bg-primary text-white hover:bg-primary/90":
                  subheading === "Professional",
              }
            )}
          >
            Choose {subheading}
          </button>
        </CardFooter>
        <div>
          <span class="absolute right-0 top-7 z-[100]">
            <DecorativeSVG1 />
          </span>
          <span class="absolute right-4 top-4 z-[100]">
            <DecorativeSVG2 />
          </span>
        </div>
      </Card>
    </div>
  );
};

const DecorativeSVG1 = ({ props }) => (
  <svg
    width="77"
    height="172"
    viewBox="0 0 77 172"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)"></circle>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="86"
        y1="0"
        x2="86"
        y2="172"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3056D3" stop-opacity="0.09"></stop>
        <stop offset="1" stop-color="#C4C4C4" stop-opacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);

const DecorativeSVG2 = ({ props }) => (
  <svg
    width="41"
    height="89"
    viewBox="0 0 41 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="38.9138"
      cy="87.4849"
      r="1.42021"
      transform="rotate(180 38.9138 87.4849)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="38.9138"
      cy="74.9871"
      r="1.42021"
      transform="rotate(180 38.9138 74.9871)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="38.9138"
      cy="62.4892"
      r="1.42021"
      transform="rotate(180 38.9138 62.4892)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="38.9138"
      cy="38.3457"
      r="1.42021"
      transform="rotate(180 38.9138 38.3457)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="38.9138"
      cy="13.634"
      r="1.42021"
      transform="rotate(180 38.9138 13.634)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="38.9138"
      cy="50.2754"
      r="1.42021"
      transform="rotate(180 38.9138 50.2754)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="38.9138"
      cy="26.1319"
      r="1.42021"
      transform="rotate(180 38.9138 26.1319)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="38.9138"
      cy="1.42021"
      r="1.42021"
      transform="rotate(180 38.9138 1.42021)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="26.4157"
      cy="87.4849"
      r="1.42021"
      transform="rotate(180 26.4157 87.4849)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="26.4157"
      cy="74.9871"
      r="1.42021"
      transform="rotate(180 26.4157 74.9871)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="26.4157"
      cy="62.4892"
      r="1.42021"
      transform="rotate(180 26.4157 62.4892)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="26.4157"
      cy="38.3457"
      r="1.42021"
      transform="rotate(180 26.4157 38.3457)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="26.4157"
      cy="13.634"
      r="1.42021"
      transform="rotate(180 26.4157 13.634)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="26.4157"
      cy="50.2754"
      r="1.42021"
      transform="rotate(180 26.4157 50.2754)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="26.4157"
      cy="26.1319"
      r="1.42021"
      transform="rotate(180 26.4157 26.1319)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="26.4157"
      cy="1.4202"
      r="1.42021"
      transform="rotate(180 26.4157 1.4202)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="13.9177"
      cy="87.4849"
      r="1.42021"
      transform="rotate(180 13.9177 87.4849)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="13.9177"
      cy="74.9871"
      r="1.42021"
      transform="rotate(180 13.9177 74.9871)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="13.9177"
      cy="62.4892"
      r="1.42021"
      transform="rotate(180 13.9177 62.4892)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="13.9177"
      cy="38.3457"
      r="1.42021"
      transform="rotate(180 13.9177 38.3457)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="13.9177"
      cy="13.634"
      r="1.42021"
      transform="rotate(180 13.9177 13.634)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="13.9177"
      cy="50.2754"
      r="1.42021"
      transform="rotate(180 13.9177 50.2754)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="13.9177"
      cy="26.1319"
      r="1.42021"
      transform="rotate(180 13.9177 26.1319)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="13.9177"
      cy="1.42019"
      r="1.42021"
      transform="rotate(180 13.9177 1.42019)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="1.41963"
      cy="87.4849"
      r="1.42021"
      transform="rotate(180 1.41963 87.4849)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="1.41963"
      cy="74.9871"
      r="1.42021"
      transform="rotate(180 1.41963 74.9871)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="1.41963"
      cy="62.4892"
      r="1.42021"
      transform="rotate(180 1.41963 62.4892)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="1.41963"
      cy="38.3457"
      r="1.42021"
      transform="rotate(180 1.41963 38.3457)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="1.41963"
      cy="13.634"
      r="1.42021"
      transform="rotate(180 1.41963 13.634)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="1.41963"
      cy="50.2754"
      r="1.42021"
      transform="rotate(180 1.41963 50.2754)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="1.41963"
      cy="26.1319"
      r="1.42021"
      transform="rotate(180 1.41963 26.1319)"
      fill="#3056D3"
    ></circle>
    <circle
      cx="1.41963"
      cy="1.4202"
      r="1.42021"
      transform="rotate(180 1.41963 1.4202)"
      fill="#3056D3"
    ></circle>
  </svg>
);

export default PricingCard;
