import { PORTFOLIOITEMS } from "@/constants";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

const PortfolioCards = ({ category }) => {
  return (
    <div className="flex flex-wrap mt-32">
      {PORTFOLIOITEMS.map(
        (pItem) =>
          pItem.category.includes(category) && (
            <div key={pItem.title} className="w-full md:w-1/2 px-4 mb-10">
              <Card className="!rounded-none !border-none !bg-transparent !shadow-none">
                <CardHeader className="!p-0 !space-y-0 mb-10">
                  <img src={pItem.img} alt={`${pItem.title} Image`} />
                </CardHeader>
                <CardContent className="!px-0">
                  <h3 className="cursor-pointer mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-xl">
                    {pItem.title}
                  </h3>
                  <p className="text-base leading-relaxed font-medium text-para">
                    {pItem.desc}
                  </p>
                </CardContent>
              </Card>
            </div>
          )
      )}
    </div>
  );
};

export default PortfolioCards;
