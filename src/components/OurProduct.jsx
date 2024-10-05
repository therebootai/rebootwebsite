import React from "react";
import ServiceAndProductComponent from "./ServiceAndProductComponent";

const OurProduct = () => {
  const products = [
    {
      icon: "/icons/wevdevicon.svg",
      name: "Web Development",
      details:
        "Lorem ipsum dolor sit amet consectetur. Egestas amet quis sociis phasellus quis. Condimentum erat vulputate mi a blandit duis odio. Dis ut feugiat leo viverra et tortor. Diam sit bibendum interdum duis enim fermentum. Scelerisque nulla nunc eu maecenas vitae eget morbi. Tortor leo sapien massa sit cras malesuada erat aenean tristique. Sem risus quis ornare accumsan proin semper nibh ipsum enim.",
      link: "",
    },
    {
      icon: "/icons/wevdevicon.svg",
      name: "Web Development",
      details:
        "Lorem ipsum dolor sit amet consectetur. Egestas amet quis sociis phasellus quis. Condimentum erat vulputate mi a blandit duis odio. Dis ut feugiat leo viverra et tortor. Diam sit bibendum interdum duis enim fermentum. Scelerisque nulla nunc eu maecenas vitae eget morbi. Tortor leo sapien massa sit cras malesuada erat aenean tristique. Sem risus quis ornare accumsan proin semper nibh ipsum enim.",
      link: "",
    },
    {
      icon: "/icons/wevdevicon.svg",
      name: "Web Development",
      details:
        "Lorem ipsum dolor sit amet consectetur. Egestas amet quis sociis phasellus quis. Condimentum erat vulputate mi a blandit duis odio. Dis ut feugiat leo viverra et tortor. Diam sit bibendum interdum duis enim fermentum. Scelerisque nulla nunc eu maecenas vitae eget morbi. Tortor leo sapien massa sit cras malesuada erat aenean tristique. Sem risus quis ornare accumsan proin semper nibh ipsum enim.",
      link: "",
    },
    {
      icon: "/icons/wevdevicon.svg",
      name: "Web Development",
      details:
        "Lorem ipsum dolor sit amet consectetur. Egestas amet quis sociis phasellus quis. Condimentum erat vulputate mi a blandit duis odio. Dis ut feugiat leo viverra et tortor. Diam sit bibendum interdum duis enim fermentum. Scelerisque nulla nunc eu maecenas vitae eget morbi. Tortor leo sapien massa sit cras malesuada erat aenean tristique. Sem risus quis ornare accumsan proin semper nibh ipsum enim.",
      link: "",
    },
  ];
  return (
    <section className="xl:p-16 lg:p-8 xs:p-4 flex flex-col gap-8">
      <section className="flex flex-row justify-between items-center">
        <section className="flex flex-col gap-2 lg:w-[45%] xlg:w-[35%] xs:w-[65%]">
          <h3 className="md:text-xl xs:text-lg font-medium text-[#333333]">
            Products
          </h3>
          <h1 className="text-primary xs:text-lg  md:text-3xl font-semibold">
            Our product can help your business management problem.
          </h1>
        </section>
      </section>
      <ServiceAndProductComponent services={products} />
    </section>
  );
};

export default OurProduct;
