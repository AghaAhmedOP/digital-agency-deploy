import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { FaArrowRight } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import Link from "next/link";

const ServicesCard = ({ title, img, desc, link }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
      <Card className="!rounded-none !border-none">
        <CardHeader className="!p-0 !space-y-0 mb-10">
          <img src={img} alt={`${title} Image`} />
        </CardHeader>
        <CardContent className="!px-10">
          <h3 className="mb-4 block text-lg font-bold text-dark hover:text-primary sm:text-xl">
            {title}
          </h3>
          <p className="text-base leading-relaxed text-para">{desc}</p>
        </CardContent>
        <CardFooter className="!px-4 !py-2">
          <div className="w-full px-6">
            <Separator />
            <Link
              href={link}
              className="flex items-center gap-4 py-6 text-base font-medium text-para hover:text-primary"
            >
              View Details <FaArrowRight />
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ServicesCard;
