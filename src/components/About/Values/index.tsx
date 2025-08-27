import { Icon } from "@iconify/react";

const Values = () => {
  const values = [
    {
      icon: "la:lightbulb",
      title: "Innovation",
      description: "We constantly explore new ideas and approaches to keep your brand ahead of the curve.",
    },
    {
      icon: "la:handshake",
      title: "Collaboration",
      description: "We believe the best results come from working closely with our clients as true partners.",
    },
    {
      icon: "la:chart-line",
      title: "Results-Driven",
      description: "Every strategy we develop is designed to deliver measurable, meaningful results.",
    },
    {
      icon: "la:heart",
      title: "Authenticity",
      description: "We help brands find their authentic voice and connect genuinely with their audience.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <p className="text-muted sm:text-28 text-18 mb-4">
            Our <span className="text-primary">Values</span>
          </p>
          <h2 className="text-white sm:text-40 text-30 font-medium mb-6">
            What Drives Us Every Day
          </h2>
          <p className="text-muted text-opacity-60 text-18 max-w-3xl mx-auto">
            Our core values shape everything we do and guide us in delivering 
            exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-dark_grey bg-opacity-50 p-6 rounded-xl text-center hover:bg-opacity-80 transition-all duration-300"
            >
              <div className="bg-primary bg-opacity-20 p-4 rounded-full w-fit mx-auto mb-4">
                <Icon
                  icon={value.icon}
                  width="32"
                  height="32"
                  className="text-primary"
                />
              </div>
              <h3 className="text-white text-22 font-bold mb-3">
                {value.title}
              </h3>
              <p className="text-muted text-opacity-60 text-16">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;