import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const SliderComponent = ({ slides = [] }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(4);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(5);
      } else {
        setSlidesToShow(6);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: true,
    centerMode: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    speed: 6000,
    autoplaySpeed: 2000,
    arrows: false,
    centerPadding: "60px",
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((company, index) => (
          <section
            key={index}
            className="slider-container xs:p-2 md:p-2 !flex items-center justify-center"
          >
            <section className="w-full p-2 xs:h-[4.5rem] md:h-[6rem] xlg:h-[7rem] xs:rounded-md md:rounded-lg flex justify-center items-center boxsh">
              <Image
                src={company.imgsrc}
                alt={company.imgalt}
                width={244}
                height={20}
                className="w-fit xs:h-[1.5rem] sm:h-[1.8rem] md:h-[6.5rem]"
              />
            </section>
          </section>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
