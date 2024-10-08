import Image from "next/image";
import React from "react";
import { MdStarRate } from "react-icons/md";
import Slider from "react-slick/lib/slider";

const ProductReviews = () => {
  const productreviews = [
    {
      imgsrc: "/images/productpreview.png",
      name: "Dr Saikat Paul",
      heading: "Love Digital Prescription System",
      text: "Lorem ipsum dolor sit amet consectetur. Odio eget imperdiet maecenas ipsum amet commodo tristique penatibus. Ac vel vulputate vitae nulla cursus in. Aenean aenean convallis turpis semper lobortis. Risus lacinia viverra magna vivamus eget adipiscing. Vitae urna duis posuere sed feugiat molestie maecenas odio. </br> Eget in mattis eu sed rutrum felis habitant. Convallis leo phasellus porta vitae vivamus elit. Id neque est ut in commodo tempus semper eu. Aenean non turpis integer mauris maecenas tempus fusce nunc nulla. Vivamus vitae urna pellentesque consectetur non. Fermentum ac amet tortor in porttitor tincidunt enim lacus gravida.",
    },
    {
      imgsrc: "/images/productpreview.png",
      name: "Dr Saikat Paul",
      heading: "Love Digital Prescription System",
      text: "Lorem ipsum dolor sit amet consectetur. Odio eget imperdiet maecenas ipsum amet commodo tristique penatibus. Ac vel vulputate vitae nulla cursus in. Aenean aenean convallis turpis semper lobortis. Risus lacinia viverra magna vivamus eget adipiscing. Vitae urna duis posuere sed feugiat molestie maecenas odio. </br> Eget in mattis eu sed rutrum felis habitant. Convallis leo phasellus porta vitae vivamus elit. Id neque est ut in commodo tempus semper eu. Aenean non turpis integer mauris maecenas tempus fusce nunc nulla. Vivamus vitae urna pellentesque consectetur non. Fermentum ac amet tortor in porttitor tincidunt enim lacus gravida.",
    },
  ];
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 4000,
    arrows: false,
  };
  return (
    <section className="xl:p-16 lg:p-8 sm:p-4 bg-gradient-to-b from-white to-[#4385F526]">
      <section className="w-full">
        <Slider {...settings}>
          {productreviews.map((item, index) => (
            <section
              key={index}
              className="!flex flex-col md:flex-row gap-4 lg:gap-6 p-2 md:p-4 lg:p-8"
            >
              <section className="xl:w-[30%] lg:w-[40%] md:w-[40%] w-full">
                <section className="w-full relative">
                  <Image
                    src={item.imgsrc}
                    alt={item.name}
                    width={512}
                    height={512}
                    className="w-full"
                  />
                  <div className="px-8 h-[2.5rem] absolute bottom-0 rounded-bl-lg rounded-tr-lg flex justify-center items-center w-fit bg-primary text-white text-lg font-medium ">
                    {item.name}
                  </div>
                </section>
              </section>
              <section className="xl:w-[70%] lg:w-[60%] md:w-[60%] w-full p-4 lg:p-6 rounded-lg text-white bg-primary flex flex-col gap-3 lg:gap-6">
                <section className="flex flex-row gap-4 lg:gap-8">
                  <section className="xl:w-[10%] xlg:w-[15%] flex gap-1 items-center">
                    <img
                      src="/icons/koma.svg"
                      alt="koma"
                      className="w-full lg:h-full h-[3rem]"
                    />
                    <img
                      src="/icons/koma.svg"
                      alt="koma"
                      className="w-full lg:h-full h-[3rem]"
                    />
                  </section>
                  <section className="flex  flex-col gap-2">
                    <h1 className="xl:text-4xl xlg:text-3xl lg:text-2xl text-base font-semibold">
                      {item.heading}
                    </h1>
                    <div className="text-[#FFB800] text-2xl flex gap-1">
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                      <MdStarRate />
                    </div>
                  </section>
                </section>
                <p
                  className="xlg:text-lg/[30px] lg:text-sm/[18px] text-xs/[20px] md:text-xs/[18px]"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></p>
              </section>
            </section>
          ))}
        </Slider>
      </section>
    </section>
  );
};

export default ProductReviews;
