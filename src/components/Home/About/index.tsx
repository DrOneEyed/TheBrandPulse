"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const leftAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  };

  const rightAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  return (
    <section className="md:pt-28 pt-16" id="about">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div ref={ref} className="grid grid-cols-12 items-center gap-10">
          <motion.div {...leftAnimation} className="lg:col-span-6 col-span-12">
            <div className="lg:-ml-32">
              <Image
                src={`${getImagePrefix()}images/work/img-work-with-us.png`}
                alt="About The Brand Pulse"
                width={600}
                height={425}
                className="w-full"
              />
            </div>
          </motion.div>
          <motion.div {...rightAnimation} className="lg:col-span-6 col-span-12">
            <p className="sm:text-28 text-18 text-white mb-4">
              About <span className="text-primary">The Brand Pulse</span>
            </p>
            <h2 className="sm:text-40 text-30 text-white font-medium mb-6">
              We Are Your Strategic Brand Marketing Partner
            </h2>
            <p className="text-muted text-opacity-60 text-18 mb-6">
              At The Brand Pulse, we believe every brand has a unique story waiting to be told. 
              Our team of creative strategists and marketing experts work collaboratively to 
              uncover your brand's authentic voice and amplify it across all touchpoints.
            </p>
            <p className="text-muted text-opacity-60 text-18 mb-8">
              With over 5 years of experience in brand strategy, digital marketing, and creative 
              execution, we've helped 150+ businesses transform their brand presence and achieve 
              sustainable growth.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary bg-opacity-20 p-3 rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/icons/icon-consulting.svg`}
                    alt="Strategy"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="text-white text-18 font-medium">Strategic Approach</h4>
                  <p className="text-muted text-opacity-60 text-14">Data-driven strategies</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary bg-opacity-20 p-3 rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/icons/icon-Services.svg`}
                    alt="Creative"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h4 className="text-white text-18 font-medium">Creative Excellence</h4>
                  <p className="text-muted text-opacity-60 text-14">Award-winning designs</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;