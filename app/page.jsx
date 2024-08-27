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
      <div className="bg-secondary">
        <MaxWidthWrapper>
          <Services />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <Portfolio />
      </MaxWidthWrapper>
      <div className="bg-secondary">
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
      <div className="bg-secondary">
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
