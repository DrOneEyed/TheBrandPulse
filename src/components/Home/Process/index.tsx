"use client";
import Image from "next/image";
import { processData } from "@/app/api/data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getImagePrefix } from "@/utils/utils";

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section className="md:pt-40 pt-20" id="process">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted sm:text-28 text-18 mb-9">
              Our <span className="text-primary">Process</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20">
              A Proven Methodology That Delivers Results Every Time
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:block hidden relative">
              <div>
                <Image
                  src={`${getImagePrefix()}images/timeline/img-timeline.png`} 
                  alt="Process Timeline"
                  width={1220}
                  height={1000}
                  className="w-80% mx-auto"
                />
              </div>
              <div className="absolute lg:top-40 top-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Discovery</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    We dive deep into your brand, audience, and market landscape
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-planning.svg`}
                    alt="Discovery"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div className="absolute lg:top-40 top-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm p-6 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-refinement.svg`}
                    alt="Strategy"
                    width={44}
                    height={44}
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-28 mb-3">Strategy</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Develop a comprehensive strategy tailored to your goals
                  </p>
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72 flex items-center gap-6">
                <div className="text-right">
                  <h5 className="text-muted text-28 mb-3">Creation</h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Bring your brand to life with compelling creative execution
                  </p>
                </div>
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-prototype.svg`}
                    alt="Creation"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
              </div>
              <div className="absolute lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72 flex items-center gap-6">
                <div className="bg-light_grey bg-opacity-45 backdrop-blur-sm px-6 py-2 h-fit rounded-full">
                  <Image
                    src={`${getImagePrefix()}images/timeline/icon-support.svg`}
                    alt="Launch & Optimize"
                    width={44}
                    height={44}
                    className="w-16 h-16"
                  />
                </div>
                <div className="text-left">
                  <h5 className="text-muted text-nowrap text-28 mb-3">
                    Launch & Optimize
                  </h5>
                  <p className="text-18 text-muted text-opacity-60">
                    Launch your brand and continuously optimize for better results
                  </p>
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:hidden">
              {processData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-light_grey bg-opacity-45 p-6 rounded-full">
                    <Image
                      src={`${getImagePrefix()}${item.icon}`}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="text-start">
                    <h4 className="text-28 text-muted mb-2">{item.title}</h4>
                    <p className="text-muted text-opacity-60 text-18">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;