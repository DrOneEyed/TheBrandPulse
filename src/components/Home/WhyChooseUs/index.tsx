import { whyChooseUsData } from "@/app/api/data";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { getImagePrefix } from "@/utils/utils";

const WhyChooseUs = () => {
  return (
    <section className="md:py-40 py-20" id="why-choose-us">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="grid lg:grid-cols-2 sm:gap-0 gap-10 items-center">
          <div>
            <p className="text-primary sm:text-28 text-18 mb-3">Why Choose Us</p>
            <h2 className="text-white sm:text-40 text-30 font-medium mb-5">
              Your Success Is Our Priority
            </h2>
            <p className="text-muted text-opacity-60 text-18 mb-7">
              We don't just create campaigns; we build partnerships. Our collaborative 
              approach ensures that every strategy is tailored to your unique needs 
              and business objectives.
            </p>
            <div className="grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5">
              {whyChooseUsData.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div>
                    <Icon
                      icon="la:check-circle-solid"
                      width="24"
                      height="24"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="text-18 text-white font-medium">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="bg-dark_grey bg-opacity-50 p-6 rounded-lg">
                <h4 className="text-primary text-24 font-bold mb-2">98%</h4>
                <p className="text-white text-18 font-medium mb-1">Client Retention Rate</p>
                <p className="text-muted text-opacity-60 text-14">
                  Our clients stay with us because we deliver results that matter.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <Image
                src={`${getImagePrefix()}images/upgrade/img-upgrade.png`}
                alt="Why Choose The Brand Pulse"
                width={625}
                height={580}
                className="-mr-5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;