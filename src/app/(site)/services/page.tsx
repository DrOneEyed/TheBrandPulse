import Services from "@/components/Services/Services";
import ServiceDetails from "@/components/Services/ServiceDetails";
import CTA from "@/components/Services/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - The Brand Pulse",
  description: "Discover our comprehensive brand marketing services designed to transform your business.",
};

const ServicesPage = () => {
  return (
    <>
      <Services />
      <ServiceDetails />
      <CTA />
    </>
  );
};

export default ServicesPage;