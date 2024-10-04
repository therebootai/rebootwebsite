import React from "react";
import HeadingComponent from "./HeadingComponent";

import SliderComponent from "./SliderComponent";

const OurUseTechnology = () => {
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
        <SliderComponent slides={companys} />
      </div>
    </div>
  );
};

export default OurUseTechnology;
