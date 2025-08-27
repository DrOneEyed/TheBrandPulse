"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative md:pt-40 md:pb-28 py-20 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <div className="flex gap-6 items-center lg:justify-start justify-center mb-5 mt-24">
              <Image
                src={`${getImagePrefix()}images/icons/icon-star.svg`}
                alt="icon"
                width={40}
                height={40}
              />
              <p className="text-white sm:text-28 text-18 mb-0">
                Strategic <span className="text-primary">Brand</span> Marketing
              </p>
            </div>
            <h1 className="font-medium lg:text-76 md:text-70 text-54 lg:text-start text-center text-white mb-10">
              Transform Your <span className="text-primary">Brand</span> Into a{" "}
              <span className="text-primary">Market Leader</span>
            </h1>
            <p className="text-muted text-opacity-60 text-18 mb-10 lg:text-start text-center">
              We help businesses build powerful brands that resonate with their audience 
              and drive sustainable growth through strategic marketing solutions.
            </p>
            <div className="flex items-center md:justify-start justify-center gap-8">
              <Link
                href="/services"
                className="bg-primary border border-primary rounded-lg text-21 font-medium hover:bg-transparent hover:text-primary text-darkmode py-3 px-8"
              >
                Our Services
              </Link>
              <Link
                href="/portfolio"
                className="bg-transparent border border-primary rounded-lg text-21 font-medium hover:bg-primary hover:text-darkmode text-primary py-3 px-8"
              >
                View Portfolio
              </Link>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-12 mt-20">
              <div className="text-center">
                <h3 className="text-primary text-40 font-bold">150+</h3>
                <p className="text-muted text-opacity-60">Brands Transformed</p>
              </div>
              <div className="text-center">
                <h3 className="text-primary text-40 font-bold">98%</h3>
                <p className="text-muted text-opacity-60">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <h3 className="text-primary text-40 font-bold">5+</h3>
                <p className="text-muted text-opacity-60">Years Experience</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="col-span-6 lg:block hidden"
          >
            <div className="ml-20 -mr-64">
              <Image
                src={`${getImagePrefix()}images/hero/banner-image.png`}
                alt="Brand Marketing"
                width={1150}
                height={1150}
              />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default Hero;