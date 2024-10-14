import Image from "next/image";
import React from "react";
import SliderComponent from "./SliderComponent";

const OurResponsibility = ({ showsection }) => {
  const benifits = [
    { name: "Traffic Will Increase", imgsrc: "/icons/webtrifficicon.svg" },
    { name: "Sales Will Increase", imgsrc: "/icons/salesicon.svg" },
    { name: "Revenew Will Increase", imgsrc: "/icons/rupeeicon.svg" },
    { name: "Get More Leads", imgsrc: "/icons/leadicon.svg" },
  ];
  const clients = [
    { imgsrc: "/images/arenaanimation.webp", imgalt: "arenaanimation" },
    { imgsrc: "/images/artha credit.webp", imgalt: "artha credit" },
    {
      imgsrc: "/images/AstraCurePharmaPvtLtd.webp",
      imgalt: "AstraCurePharmaPvtLtd",
    },
    { imgsrc: "/images/btappsschool.webp", imgalt: "btappsschool" },
    { imgsrc: "/images/car value.webp", imgalt: "car value" },
    { imgsrc: "/images/cdc printers.webp", imgalt: "cdc printers" },
    { imgsrc: "/images/edunethub.webp", imgalt: "edunethub" },
    {
      imgsrc: "/images/healthica.webp",
      imgalt: "healthica",
    },
    {
      imgsrc: "/images/hotel gulma view logo.webp",
      imgalt: "hotel gulma view logo",
    },
    {
      imgsrc: "/images/Ignyte Pharma Pvt Ltd.webp",
      imgalt: "Ignyte Pharma Pvt Ltd",
    },
    { imgsrc: "/images/jalan builders.webp", imgalt: "jalan builders" },
    { imgsrc: "/images/just andaman.webp", imgalt: "just andaman" },
    { imgsrc: "/images/kutchinahooghly.webp", imgalt: "kutchinahooghly" },
    { imgsrc: "/images/livetunein.webp", imgalt: "livetunein" },
    {
      imgsrc: "/images/Medipas Pharma Pvt Ltd.webp",
      imgalt: "Medipas Pharma Pvt Ltd",
    },
    { imgsrc: "/images/meitclg.webp", imgalt: "meitclg" },
    { imgsrc: "/images/mistrilogo.webp", imgalt: "mistrilogo" },
    {
      imgsrc: "/images/Muktadhara Nursing Institute.webp",
      imgalt: "Muktadhara Nursing Institute",
    },
    { imgsrc: "/images/muktifresh.webp", imgalt: "muktifresh" },
    { imgsrc: "/images/muktilogo.webp", imgalt: "muktilogo" },
    {
      imgsrc: "/images/Nakshaatra Nursing Institute.webp",
      imgalt: "Nakshaatra Nursing Institute",
    },
    { imgsrc: "/images/nava homestay.webp", imgalt: "nava homestay" },
    { imgsrc: "/images/nifd slg logo.webp", imgalt: "nifd slg logo" },
    { imgsrc: "/images/nifdglobalsiliguri.png", imgalt: "nifdglobalsiliguri" },
    {
      imgsrc: "/images/Orosys Pharma Pvt Ltd.webp",
      imgalt: "Orosys Pharma Pvt Ltd",
    },
    { imgsrc: "/images/planet.webp", imgalt: "planet" },
    { imgsrc: "/images/ps intero.webp", imgalt: "ps intero" },
    {
      imgsrc: "/images/Rasulpur Protik Nursing College.webp",
      imgalt: "Rasulpur Protik Nursing College",
    },
    { imgsrc: "/images/reboot client.webp", imgalt: "reboot client" },
    { imgsrc: "/images/reddy healthcare.webp", imgalt: "reddy healthcare" },
    {
      imgsrc: "/images/Retina Institute Of Bengal.webp",
      imgalt: "Retina Institute Of Bengal",
    },
    { imgsrc: "/images/rgskincare.webp", imgalt: "rgskincare" },
    { imgsrc: "/images/rudraksh.webp", imgalt: "rudraksh" },
    { imgsrc: "/images/sankhyasutralabs.webp", imgalt: "sankhyasutralabs" },
    {
      imgsrc: "/images/sarojini institute of nursing.webp",
      imgalt: "sarojini institute of nursing",
    },
    { imgsrc: "/images/shahil traders.webp", imgalt: "shahil traders" },
    {
      imgsrc: "/images/shaktiman evehicle.webp",
      imgalt: "shaktiman evehicle",
    },
    { imgsrc: "/images/sparshtea.webp", imgalt: "sparshtea" },
    { imgsrc: "/images/spectrum.webp", imgalt: "spectrum" },
    { imgsrc: "/images/the inside story.webp", imgalt: "the inside story" },
    { imgsrc: "/images/toplinerealty.webp", imgalt: "toplinerealty" },
  ];
  return (
    <section className="bg-[#4385F50D] xl:p-16 lg:p-8 sm:p-4 flex flex-col gap-6">
      <section className="flex flex-col lg:flex-row gap-6 justify-between ">
        <section className="lg:w-[50%] flex flex-col gap-4">
          <section className="flex flex-col gap-2">
            <h3 className="text-[#333333] text-xl md:text-xl xlg:text-2xl font-medium">
              Your <span className="text-primary">Business,</span>
            </h3>
            <h1 className="text-[#333333] text-2xl md:text-2xl xlg:text-4xl font-semibold">
              It&apos;s Our Responsibility To <br /> Grow
              <span className="text-primary">Your Business</span>
            </h1>
          </section>
          <p className="xlg:text-sm/[20px] lg:text-xs/[18px] md:text-[10px]/[15px] text-xs/[20px] text-[#333333]">
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
        <section className="lg:w-[40%] flex flex-col gap-8">
          <h1 className="xlg:text-4xl md:text-2xl text-xl font-semibold text-primary">
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
                    className="w-full h-[2.2rem] md:h-[2.5rem] xlg:h-[3rem]"
                  />
                </i>
                <h1 className="xlg:text-3xl text-xl md:text-2xl font-medium text-[#333333]">
                  {item.name}
                </h1>
              </section>
            ))}
          </section>
        </section>
      </section>
      {showsection && (
        <section>
          <SliderComponent slides={clients} />
        </section>
      )}
    </section>
  );
};

export default OurResponsibility;
