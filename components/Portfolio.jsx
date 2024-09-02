import React from "react";
import SectionHeader from "./SectionHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PortfolioCards from "./PortfolioCards";

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
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="app">App</TabsTrigger>
            <TabsTrigger value="graphic">Graphic</TabsTrigger>
            <TabsTrigger value="webdesign">Web Design</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <PortfolioCards category="all" />
          </TabsContent>
          <TabsContent value="web">
            <PortfolioCards category="web" />
          </TabsContent>
          <TabsContent value="design">
            <PortfolioCards category="design" />
          </TabsContent>
          <TabsContent value="app">
            <PortfolioCards category="app" />
          </TabsContent>
          <TabsContent value="graphic">
            <PortfolioCards category="graphic" />
          </TabsContent>
          <TabsContent value="webdesign">
            <PortfolioCards category="webdesign" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Portfolio;
