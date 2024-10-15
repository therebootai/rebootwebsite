import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const SliderComponent = ({ slides = [] }) => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [centermode, setCenterMode] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 260) {
        setSlidesToShow(1);
        setCenterMode(false);
      } else if (window.innerWidth <= 560) {
        setSlidesToShow(2);
        setCenterMode(false);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
        setCenterMode(false);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(4);
        setCenterMode(true);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(5);
        setCenterMode(true);
      } else {
        setSlidesToShow(6);
        setCenterMode(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: slides.length > slidesToShow,
    centerMode: centermode,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",
    speed: 6000,
    autoplaySpeed: 2000,
    arrows: false,
    centerPadding: "60px",
    lazyLoad: "ondemand",
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((company, index) => (
          <section
            key={index}
            className="slider-container p-[6px] md:p-2 !flex items-center justify-center"
          >
            <section className="w-full md:p-2 h-[4.5rem] md:h-[6rem] xlg:h-[7rem] xs:rounded-md md:rounded-lg flex justify-center items-center boxsh">
              <Image
                src={company.imgsrc}
                alt={company.imgalt}
                width={244}
                height={20}
                priority={index < slidesToShow}
                className="w-fit h-[3.5rem] md:h-[6.5rem]"
              />
            </section>
          </section>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
