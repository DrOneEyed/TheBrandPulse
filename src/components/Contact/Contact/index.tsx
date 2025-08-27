"use client";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const Contact = () => {
  const contactInfo = [
    {
      icon: "la:envelope",
      title: "Email Us",
      details: "hello@thebrandpulse.com",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: "la:phone",
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak directly with our team during business hours",
    },
    {
      icon: "la:map-marker",
      title: "Visit Us",
      details: "123 Marketing Street, Creative District, NY 10001",
      description: "Schedule a meeting at our creative studio",
    },
  ];

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
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted text-opacity-60 text-18 max-w-3xl mx-auto">
            Ready to transform your brand? Let's start a conversation about your 
            goals and how we can help you achieve them.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-dark_grey bg-opacity-50 p-6 rounded-xl text-center hover:bg-opacity-80 transition-all duration-300"
            >
              <div className="bg-primary bg-opacity-20 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon
                  icon={info.icon}
                  width="32"
                  height="32"
                  className="text-primary"
                />
              </div>
              <h3 className="text-white text-22 font-bold mb-2">
                {info.title}
              </h3>
              <p className="text-primary text-18 font-medium mb-2">
                {info.details}
              </p>
              <p className="text-muted text-opacity-60 text-14">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-white text-40 font-medium mb-6">
            Why Choose The Brand Pulse?
          </h2>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
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
            <div className="text-center">
              <h3 className="text-primary text-40 font-bold">24h</h3>
              <p className="text-muted text-opacity-60">Response Time</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute w-50 h-50 bg-gradient-to-bl from-tealGreen from-50% to-charcoalGray to-60% blur-400 rounded-full -top-64 -right-14 -z-1"></div>
    </section>
  );
};

export default Contact;