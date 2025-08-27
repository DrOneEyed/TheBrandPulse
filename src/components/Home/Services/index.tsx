import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { servicesData } from "@/app/api/data";
import Image from "next/image";
import { getImagePrefix } from "@/utils/utils";

const Services = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="md:pt-40 pt-20" id="services">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <p className="text-muted sm:text-28 text-18 mb-4">
            Our <span className="text-primary">Services</span>
          </p>
          <h2 className="text-white sm:text-40 text-30 font-medium mb-6">
            Comprehensive Brand Marketing Solutions
          </h2>
          <p className="text-muted text-opacity-60 text-18 max-w-3xl mx-auto">
            From brand strategy to digital execution, we offer a full suite of services 
            designed to elevate your brand and drive meaningful results.
          </p>
        </div>
        
        <div className="lg:-mt-8 mt-8">
          <Slider {...settings}>
            {servicesData.map((item, index) => (
              <div key={index} className="pr-6">
                <div className="px-6 py-8 bg-dark_grey bg-opacity-80 rounded-xl hover:bg-opacity-100 transition-all duration-300 h-full">
                  <div className="text-center mb-6">
                    <div
                      className={`${item.background} ${item.padding} rounded-full w-fit mx-auto mb-4`}
                    >
                      <Image
                        src={`${getImagePrefix()}${item.icon}`}
                        alt="icon"
                        width={item.width}
                        height={item.height}
                      />
                    </div>
                    <h3 className="text-white text-22 font-bold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted text-opacity-60 text-16">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Services;