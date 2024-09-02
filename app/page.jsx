import About from "@/components/About";
import Blog from "@/components/Blog";
import ContactUs from "@/components/ContactUs";
import HappyClients from "@/components/HappyClients";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthwrapper";
import NewsLetter from "@/components/NewsLetter";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <Hero />
        <About />
      </MaxWidthWrapper>
      <div className="bg-section">
        <MaxWidthWrapper>
          <Services />
        </MaxWidthWrapper>
      </div>
      <div className="bg-[#f8f9ff]">
        <MaxWidthWrapper>
          <Portfolio />
        </MaxWidthWrapper>
      </div>
      <div className="bg-section relative">
        <MaxWidthWrapper>
          <HappyClients />
          <NewsLetter />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <Team />
        <Pricing />
        <Testimonials />
      </MaxWidthWrapper>
      <div className="bg-[#f8f9ff]">
        <MaxWidthWrapper>
          <Blog />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <ContactUs />
      </MaxWidthWrapper>
    </>
  );
}
