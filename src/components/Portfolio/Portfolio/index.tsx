"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "TechStart Inc.",
      category: "Technology Startup",
      description: "Complete brand identity and digital marketing strategy for a B2B SaaS platform.",
      image: "/images/portfolio/img-portfolio.png",
      results: ["300% increase in lead generation", "150% growth in brand awareness", "85% improvement in conversion rates"],
    },
    {
      title: "Green Earth Co.",
      category: "Sustainability",
      description: "Eco-friendly brand positioning and content marketing campaign.",
      image: "/images/work/img-work-with-us.png",
      results: ["200% social media engagement", "120% website traffic growth", "90% customer retention rate"],
    },
    {
      title: "Fashion Forward",
      category: "Fashion Retail",
      description: "Omnichannel marketing strategy and visual identity redesign.",
      image: "/images/upgrade/img-upgrade.png",
      results: ["250% online sales increase", "180% social media following", "95% customer satisfaction"],
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
            Our <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-muted text-opacity-60 text-18 max-w-3xl mx-auto">
            Discover how we've helped brands across various industries achieve 
            remarkable growth and build lasting connections with their audiences.
          </p>
        </motion.div>
        
        <div className="space-y-20">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Image
                  src={`${getImagePrefix()}${item.image}`}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full rounded-xl"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <p className="text-primary text-18 font-medium mb-2">
                  {item.category}
                </p>
                <h3 className="text-white text-40 font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted text-opacity-60 text-18 mb-6">
                  {item.description}
                </p>
                <div className="space-y-3">
                  <h4 className="text-white text-22 font-medium">Key Results:</h4>
                  {item.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted text-opacity-80 text-16">
                        {result}
                      </span>
                    </div>
                  ))}
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

export default Portfolio;