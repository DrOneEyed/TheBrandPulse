import React from "react";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Process from "@/components/Home/Process";
import Portfolio from "@/components/Home/Portfolio";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Team from "@/components/Home/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Brand Pulse - Strategic Brand Marketing Agency",
  description: "Transform your brand with strategic marketing solutions that drive growth and engagement.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <WhyChooseUs />
      <Team />
    </main>
  );
}