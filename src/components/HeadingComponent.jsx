import React from "react";

const HeadingComponent = ({ heading1, heading2 }) => {
  return (
    <section className="flex flex-col gap-2 justify-center items-center">
      <h2 className="lg:text-xl text-lg font-medium text-[#333333]">
        {heading1}
      </h2>
      <h1 className="lg:text-3xl text-2xl font-medium text-[#4385F5]">
        {heading2}
      </h1>
    </section>
  );
};

export default HeadingComponent;
