import Image from "next/image";
import React from "react";

const OurResponsibility = () => {
  const benifits = [
    { name: "Traffic Will Increase", imgsrc: "/icons/webtrifficicon.svg" },
    { name: "Sales Will Increase", imgsrc: "/icons/salesicon.svg" },
    { name: "Revenew Will Increase", imgsrc: "/icons/rupeeicon.svg" },
    { name: "Get More Leads", imgsrc: "/icons/leadicon.svg" },
  ];
  return (
    <section className="bg-[#4385F50D] xl:p-16 lg:p-8 sm:p-4">
      <section className="flex flex-row gap-6 justify-between ">
        <section className="w-[50%] flex flex-col gap-4">
          <section className="flex flex-col gap-2">
            <h3 className="text-[#333333] md:text-xl xlg:text-2xl font-medium">
              Your <span className="text-primary">Business,</span>
            </h3>
            <h1 className="text-[#333333] md:text-2xl xlg:text-4xl font-semibold">
              It's Our Responsibility To <br /> Grow
              <span className="text-primary">Your Business</span>
            </h1>
          </section>
          <p className="xlg:text-sm/[20px] lg:text-xs/[18px] md:text-[10px]/[15px] text-[#333333]">
            Lorem ipsum dolor sit amet consectetur. Pretium sem quis feugiat
            velit risus nec nunc. Tristique amet cursus tellus ornare. Cursus
            quam ipsum viverra non duis viverra volutpat laoreet. Ac feugiat eu
            sit quam auctor sed consequat libero vulputate. Duis facilisis
            nullam nulla ornare amet amet. Id at in vestibulum sed mattis a. Sed
            vel pellentesque est tincidunt sollicitudin rhoncus adipiscing.
            Bibendum id in ante consectetur commodo. Nibh mauris vitae
            pellentesque aliquet vel elit. Pharetra pharetra enim lorem
            vulputate quam fusce sagittis ornare. Laoreet faucibus amet diam
            viverra mauris tincidunt porta iaculis. Ultrices phasellus lacinia
            pellentesque feugiat viverra purus tortor. Congue sollicitudin
            luctus id eu fusce eu. Leo nisl tempor aenean lorem ultricies
            tincidunt mauris. Sagittis nunc vel vitae pharetra amet aenean
            cursus. Diam eget tristique vel consequat vitae. Consectetur
            bibendum lacus odio vitae. Morbi egestas metus erat semper id lorem
            volutpat.
            <br />
            Feugiat leo mi etiam cras adipiscing. Dui at eu eget tempus urna. Ut
            et pellentesque viverra morbi. Porta id at risus morbi risus nibh
            sit ac. A sit sagittis consectetur proin.
          </p>
        </section>
        <section className="lg:w-[40%] md:w-[50%] flex flex-col gap-8">
          <h1 className="xlg:text-4xl md:text-2xl font-semibold text-primary">
            Let’ See <br />
            <span className="text-[#333333]">How Will</span> You Benefit?
          </h1>
          <section className="flex flex-col gap-6 ">
            {benifits.map((item, index) => (
              <section key={index} className="flex items-center gap-2 ">
                <i>
                  <Image
                    src={item.imgsrc}
                    alt={item.name}
                    width={244}
                    height={200}
                    className="w-full md:h-[2.5rem] xlg:h-[3rem]"
                  />
                </i>
                <h1 className="xlg:text-3xl md:text-2xl font-medium text-[#333333]">
                  {item.name}
                </h1>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default OurResponsibility;
