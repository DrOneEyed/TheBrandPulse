import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

const Team = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "/images/hero/banner-image.png",
      bio: "With 8+ years in brand strategy, Sarah leads our creative vision and ensures every project tells a compelling story.",
    },
    {
      name: "Michael Chen",
      role: "Digital Marketing Strategist",
      image: "/images/hero/banner-image.png",
      bio: "Michael specializes in data-driven digital campaigns that deliver measurable results across all channels.",
    },
    {
      name: "Emily Rodriguez",
      role: "Brand Strategist",
      image: "/images/hero/banner-image.png",
      bio: "Emily helps brands discover their authentic voice and develop strategies that resonate with their target audience.",
    },
  ];

  return (
    <section className="py-20 bg-dark_grey bg-opacity-30">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <p className="text-muted sm:text-28 text-18 mb-4">
            Meet Our <span className="text-primary">Team</span>
          </p>
          <h2 className="text-white sm:text-40 text-30 font-medium mb-6">
            The Creative Minds Behind Your Success
          </h2>
          <p className="text-muted text-opacity-60 text-18 max-w-3xl mx-auto">
            Our diverse team brings together expertise in strategy, creativity, 
            and digital marketing to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-dark_grey bg-opacity-50 p-6 rounded-xl text-center hover:bg-opacity-80 transition-all duration-300"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-primary bg-opacity-20">
                <Image
                  src={`${getImagePrefix()}${member.image}`}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-22 font-bold mb-2">
                {member.name}
              </h3>
              <p className="text-primary text-16 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-muted text-opacity-60 text-14">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;