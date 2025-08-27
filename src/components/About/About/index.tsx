"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const About = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid grid-cols-12 items-center gap-10">
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 col-span-12"
          >
            <h1 className="font-medium lg:text-76 md:text-70 text-54 text-white mb-6">
              About <span className="text-primary">The Brand Pulse</span>
            </h1>
            <p className="text-muted text-opacity-60 text-18 mb-6">
              Founded with a vision to transform how brands connect with their audiences, 
              The Brand Pulse has grown into a trusted partner for businesses seeking 
              authentic and impactful marketing solutions.
            </p>
            <p className="text-muted text-opacity-60 text-18 mb-8">
              Our journey began with a simple belief: every brand has a unique pulse, 
              a rhythm that resonates with its ideal audience. Our mission is to help 
              you find and amplify that pulse.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-primary text-40 font-bold">150+</h3>
                <p className="text-muted text-opacity-60">Brands Transformed</p>
              </div>
              <div className="text-center">
                <h3 className="text-primary text-40 font-bold">5+</h3>
                <p className="text-muted text-opacity-60">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-primary text-40 font-bold">98%</h3>
                <p className="text-muted text-opacity-60">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 col-span-12"
          >
            <Image
              src={`${getImagePrefix()}images/work/img-work-with-us.png`}
              alt="About The Brand Pulse"
              width={600}
              height={425}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default About;