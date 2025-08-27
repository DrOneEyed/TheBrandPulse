"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "@/app/api/data";
import { getImagePrefix } from "@/utils/utils";

const Services = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-medium lg:text-76 md:text-70 text-54 text-white mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-muted text-opacity-60 text-18 max-w-3xl mx-auto">
            We offer a comprehensive suite of brand marketing services designed to 
            elevate your brand and drive meaningful results across all touchpoints.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark_grey bg-opacity-50 p-8 rounded-xl hover:bg-opacity-80 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className={`${service.background} ${service.padding} rounded-full flex-shrink-0`}>
                  <Image
                    src={`${getImagePrefix()}${service.icon}`}
                    alt={service.title}
                    width={service.width}
                    height={service.height}
                  />
                </div>
                <div>
                  <h3 className="text-white text-28 font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted text-opacity-60 text-18">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default Services;