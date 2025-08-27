import About from "@/components/About/About";
import Team from "@/components/About/Team";
import Values from "@/components/About/Values";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - The Brand Pulse",
  description: "Learn about our mission, values, and the team behind The Brand Pulse's success.",
};

const AboutPage = () => {
  return (
    <>
      <About />
      <Values />
      <Team />
    </>
  );
};

export default AboutPage;