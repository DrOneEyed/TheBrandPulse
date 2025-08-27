const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CEO, TechStart Inc.",
      company: "Technology",
      testimonial: "The Brand Pulse transformed our entire go-to-market strategy. Their strategic approach and creative execution helped us achieve 300% growth in lead generation within just 6 months.",
      rating: 5,
    },
    {
      name: "David Chen",
      role: "Marketing Director, Green Earth Co.",
      company: "Sustainability",
      testimonial: "Working with The Brand Pulse was a game-changer for our brand. They helped us articulate our sustainability mission in a way that truly resonated with our target audience.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, Fashion Forward",
      company: "Fashion Retail",
      testimonial: "The team's creativity and strategic thinking exceeded our expectations. Our brand transformation led to a 250% increase in online sales and significantly improved customer engagement.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-white sm:text-40 text-30 font-medium mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted text-opacity-60 text-18 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with The Brand Pulse.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-dark_grey bg-opacity-50 p-6 rounded-xl"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted text-opacity-80 text-16 mb-6 italic">
                "{testimonial.testimonial}"
              </p>
              <div>
                <h4 className="text-white text-18 font-medium">
                  {testimonial.name}
                </h4>
                <p className="text-primary text-14 font-medium">
                  {testimonial.role}
                </p>
                <p className="text-muted text-opacity-60 text-14">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;