import SectionHeader from "./SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortfolioCards from "./PortfolioCards";
import { PORTFOLIO_CATEGORIES } from "@/constants";

const Portfolio = () => {
  return (
    <div className="pt-32 pb-20 flex flex-col gap-10" id="portfolio">
      <div>
        <SectionHeader
          subHeading={"Creative Portfolio"}
          heading={"Recent Works"}
          paragraph={
            "There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          }
          classname={"items-center text-center"}
          pclassname={"!text-lg"}
        />
      </div>
      <div>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full !bg-inherit !flex-wrap gap-5">
            {PORTFOLIO_CATEGORIES.map(({ title, value }) => (
              <TabsTrigger key={value} value={value}>
                {title}
              </TabsTrigger>
            ))}
          </TabsList>
          {PORTFOLIO_CATEGORIES.map(({ value }) => (
            <TabsContent key={value} value={value}>
              <PortfolioCards category={value} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
