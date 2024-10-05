import React from "react";
import HeadingComponent from "./HeadingComponent";
import SliderComponent from "./SliderComponent";

const OurClient = () => {
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
    { imgsrc: "/images/shaktiman evehicle.webp", imgalt: "shaktiman evehicle" },
    { imgsrc: "/images/sparshtea.webp", imgalt: "sparshtea" },
    { imgsrc: "/images/spectrum.webp", imgalt: "spectrum" },
    { imgsrc: "/images/the inside story.webp", imgalt: "the inside story" },
    { imgsrc: "/images/toplinerealty.webp", imgalt: "toplinerealty" },
  ];

  return (
    <div className="xl:p-16 lg:p-8 xs:p-4 flex flex-col gap-8">
      <HeadingComponent
        heading1={"Lerem Ipsum simple"}
        heading2={"Our Client"}
      />
      <div className="w-full">
        <SliderComponent slides={clients} />
      </div>
    </div>
  );
};

export default OurClient;
