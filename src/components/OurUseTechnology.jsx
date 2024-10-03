import React, { useEffect, useState } from "react";
import HeadingComponent from "./HeadingComponent";
import Slider from "react-slick";
import Image from "next/image";

const OurUseTechnology = () => {
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
    autoplaySpeed: 500,
    arrows: false,
    centerPadding: "60px",
  };
  const companys = [
    { imgsrc: "/images/figma.png", imgalt: "figma" },
    { imgsrc: "/images/reactnative.png", imgalt: "react native" },
    { imgsrc: "/images/wordpress.png", imgalt: "wordpress" },
    { imgsrc: "/images/mongodb.png", imgalt: "mongodb" },
    { imgsrc: "/images/adobe.png", imgalt: "adobe" },
    { imgsrc: "/images/nodejs.png", imgalt: "nodejs" },
  ];
  return (
    <div className="xl:p-16 lg:p-8 xs:p-4 flex flex-col gap-8">
      <HeadingComponent
        heading1={"Lerem Ipsum simple"}
        heading2={"Best Technologies Results"}
      />
      <div className="w-full">
        <Slider {...settings}>
          {companys.map((company, index) => (
            <section
              key={index}
              className="slider-container xs:p-2 md:p-4 !flex items-center justify-center"
            >
              <section className="w-full p-3 xs:h-[4.5rem] md:h-[6rem] xs:rounded-md md:rounded-lg flex justify-center items-center boxsh">
                <Image
                  src={company.imgsrc}
                  alt={company.imgalt}
                  width={244}
                  height={20}
                  className="w-fit xs:h-[1.5rem] sm:h-[1.8rem] md:h-[2.5rem]"
                />
              </section>
            </section>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurUseTechnology;
