import React, { useEffect, useState } from "react";
import { MdOutlineStarBorder, MdStarRate } from "react-icons/md";
import Slider from "react-slick/lib/slider";

const ClientReview = () => {
  const reviews = [
    {
      text: "Choosing Reboot Marketing Pvt. Ltd. for our website redesign was a fantastic decision. Their team crafted a visually striking and highly functional website that aligns perfectly with our brand’s identity. They impressed us with their creative approach, attention to detail, and commitment to understanding our needs. The result is a site that’s not only aesthetically pleasing but also user-friendly and responsive across all devices.We’ve experienced a noticeable increase in engagement and traffic. Their ongoing support and expertise make them the top choice in Siliguri.Highly recommended!",
      name: "Mohna Rani",
      designation: "CEO, Founder at MR Salon & Academy",
    },
    {
      text: "Choosing Reboot Marketing Pvt. Ltd. for our website redesign was a fantastic decision. Their team crafted a visually striking and highly functional website that aligns perfectly with our brand’s identity. They impressed us with their creative approach, attention to detail, and commitment to understanding our needs. The result is a site that’s not only aesthetically pleasing but also user-friendly and responsive across all devices.We’ve experienced a noticeable increase in engagement and traffic. Their ongoing support and expertise make them the top choice in Siliguri.Highly recommended!",
      name: "Mohna Rani",
      designation: "CEO, Founder at MR Salon & Academy",
    },
    {
      text: "Choosing Reboot Marketing Pvt. Ltd. for our website redesign was a fantastic decision. Their team crafted a visually striking and highly functional website that aligns perfectly with our brand’s identity. They impressed us with their creative approach, attention to detail, and commitment to understanding our needs. The result is a site that’s not only aesthetically pleasing but also user-friendly and responsive across all devices.We’ve experienced a noticeable increase in engagement and traffic. Their ongoing support and expertise make them the top choice in Siliguri.Highly recommended!",
      name: "Mohna Rani",
      designation: "CEO, Founder at MR Salon & Academy",
    },
    {
      text: "Choosing Reboot Marketing Pvt. Ltd. for our website redesign was a fantastic decision. Their team crafted a visually striking and highly functional website that aligns perfectly with our brand’s identity. They impressed us with their creative approach, attention to detail, and commitment to understanding our needs. The result is a site that’s not only aesthetically pleasing but also user-friendly and responsive across all devices.We’ve experienced a noticeable increase in engagement and traffic. Their ongoing support and expertise make them the top choice in Siliguri.Highly recommended!",
      name: "Mohna Rani",
      designation: "CEO, Founder at MR Salon & Academy",
    },
    {
      text: "Choosing Reboot Marketing Pvt. Ltd. for our website redesign was a fantastic decision. Their team crafted a visually striking and highly functional website that aligns perfectly with our brand’s identity. They impressed us with their creative approach, attention to detail, and commitment to understanding our needs. The result is a site that’s not only aesthetically pleasing but also user-friendly and responsive across all devices.We’ve experienced a noticeable increase in engagement and traffic. Their ongoing support and expertise make them the top choice in Siliguri.Highly recommended!",
      name: "Mohna Rani",
      designation: "CEO, Founder at MR Salon & Academy",
    },
  ];
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 865) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1280) {
        setSlidesToShow(2);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
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
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,

    centerMode: false,
    arrows: false,
  };
  return (
    <section className="xl:p-16 lg:p-8 sm:p-4 ">
      <div className="flex flex-col gap-4">
        <h2 className="text-[#333] text-xl font-semibold">
          Let&apos;s See Some Reviews
        </h2>
        <h1 className="text-primary text-4xl font-semibold">
          What Our Client Say
        </h1>
        <section className="w-full">
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <div className="p-4">
                <div
                  key={index}
                  className="!flex flex-col gap-3 py-10 bg-[rgba(67,_133,_245,_0.05)] rounded-3xl px-11"
                >
                  <h1 className="text-[#333] text-xl font-semibold">
                    &#183; Best
                    <span className="text-primary">
                      Website Designing Company
                    </span>
                    In Siliguri
                  </h1>
                  <p className="text-base text-secondary max-w-[77ch]">
                    {item.text}
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <h4 className="font-medium text-base text-primary">
                      ---- {item.name}
                    </h4>
                    <h2 className="text-base text-[#333333] font-medium">
                      | {item.designation}
                    </h2>
                  </div>
                  <div>
                    <div className="text-[#FFB800] text-2xl flex gap-1">
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdOutlineStarBorder />
                      <span className="text-base text-[#777] ps-1">
                        &#40;4.3&#41; 512 Reviews
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </div>
    </section>
  );
};

export default ClientReview;
