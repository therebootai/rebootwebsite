import Image from "next/image";
import React from "react";

const SubPageBanner = ({ heading, subheading }) => {
  return (
    <div className="relative">
      <Image
        className="w-full h-auto object-cover"
        src={"/images/subbannerbg.png"}
        width={5760}
        height={1200}
        alt="Background"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center h-full">
        <h1 className="sm:text-xl md:text-2xl font-semibold lg:text-3xl text-white text-center text-shadow">
          {heading}
        </h1>
        <h2 className="text-lg font-medium text-white">
          Home &#x203A; {heading} {subheading && <>&#x203A; {subheading}</>}
        </h2>
      </div>
    </div>
  );
};

export default SubPageBanner;
