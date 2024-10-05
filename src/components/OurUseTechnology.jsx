import React from "react";
import HeadingComponent from "./HeadingComponent";

import SliderComponent from "./SliderComponent";

const OurUseTechnology = () => {
  const companys = [
    { imgsrc: "/images/adobe-logo.webp", imgalt: "adobe" },
    { imgsrc: "/images/android-studio-logo.webp", imgalt: "android studio" },
    { imgsrc: "/images/asgularjs-logo.webp", imgalt: "asgularjs" },
    { imgsrc: "/images/nodejs-logo.webp", imgalt: "nodejs" },
    { imgsrc: "/images/mongodb-logo.webp", imgalt: "mongodb" },
    { imgsrc: "/images/nextjs-logo.webp", imgalt: "nextjs" },
    { imgsrc: "/images/flutter-logo.webp", imgalt: "flutter" },
    { imgsrc: "/images/jquery-logo.webp", imgalt: "jquery" },
    { imgsrc: "/images/javascript-logo.webp", imgalt: "javascript" },
    { imgsrc: "/images/mysql logo.webp", imgalt: "mysql" },
    { imgsrc: "/images/html-logo.webp", imgalt: "html" },
    { imgsrc: "/images/fogma-logo.webp", imgalt: "figma" },
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
