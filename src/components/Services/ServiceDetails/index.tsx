import { Icon } from "@iconify/react";

const ServiceDetails = () => {
  const serviceDetails = [
    {
      title: "Brand Strategy & Positioning",
      description: "Comprehensive brand strategy development that defines your unique market position.",
      features: [
        "Market Research & Analysis",
        "Competitive Landscape Assessment",
        "Brand Positioning Strategy",
        "Brand Architecture Development",
        "Messaging Framework Creation",
      ],
    },
    {
      title: "Digital Marketing Campaigns",
      description: "Multi-channel digital marketing campaigns that drive engagement and conversions.",
      features: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "Pay-Per-Click Advertising",
        "Email Marketing Campaigns",
        "Content Marketing Strategy",
      ],
    },
    {
      title: "Creative Content Development",
      description: "Compelling content creation that tells your brand story and engages your audience.",
      features: [
        "Visual Identity Design",
        "Website Design & Development",
        "Video Production",
        "Copywriting & Content Creation",
        "Brand Guidelines Development",
      ],
    },
    {
      title: "Social Media Management",
      description: "Strategic social media management that builds communities and drives engagement.",
      features: [
        "Social Media Strategy",
        "Content Calendar Planning",
        "Community Management",
        "Influencer Partnerships",
        "Social Media Analytics",
      ],
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-white sm:text-40 text-30 font-medium mb-6">
            Detailed Service Offerings
          </h2>
          <p className="text-muted text-opacity-60 text-18 max-w-3xl mx-auto">
            Each service is tailored to your specific needs and delivered with 
            the highest level of expertise and attention to detail.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {serviceDetails.map((service, index) => (
            <div
              key={index}
              className="bg-dark_grey bg-opacity-30 p-8 rounded-xl"
            >
              <h3 className="text-white text-28 font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-muted text-opacity-60 text-18 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Icon
                      icon="la:check-circle"
                      width="20"
                      height="20"
                      className="text-primary flex-shrink-0"
                    />
                    <span className="text-muted text-opacity-80 text-16">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;