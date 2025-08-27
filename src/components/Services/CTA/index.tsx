import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="bg-section bg-opacity-10 px-16 py-14 rounded-3xl border-2 border-opacity-20 border-section text-center">
          <h2 className="text-white sm:text-40 text-30 mb-6 font-medium">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-muted text-opacity-60 text-18 mb-8 max-w-2xl mx-auto">
            Let's work together to create a brand strategy that resonates with your 
            audience and drives sustainable growth for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="text-darkmode bg-primary border border-primary py-3 px-8 rounded-lg sm:text-21 text-18 font-medium hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="text-primary bg-transparent border border-primary py-3 px-8 rounded-lg sm:text-21 text-18 font-medium hover:bg-primary hover:text-darkmode transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
    </section>
  );
};

export default CTA;