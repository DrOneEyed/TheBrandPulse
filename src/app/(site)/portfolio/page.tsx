import Portfolio from "@/components/Portfolio/Portfolio";
import CaseStudies from "@/components/Portfolio/CaseStudies";
import Testimonials from "@/components/Portfolio/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - The Brand Pulse",
  description: "Explore our portfolio of successful brand transformations and marketing campaigns.",
};

const PortfolioPage = () => {
  return (
    <>
      <Portfolio />
      <CaseStudies />
      <Testimonials />
    </>
  );
};

export default PortfolioPage;