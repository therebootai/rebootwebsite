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
    { imgsrc: "/clients/arthacredit.webp", imgalt: "Artha Credit" },
    { imgsrc: "/clients/astracure.webp", imgalt: "Astracure" },
    { imgsrc: "/clients/azurebali.webp", imgalt: "Azure Bali" },
    { imgsrc: "/clients/bapps.webp", imgalt: "BApps" },
    { imgsrc: "/clients/behold.webp", imgalt: "Behold" },
    { imgsrc: "/clients/carvalue.webp", imgalt: "Car Value" },
    { imgsrc: "/clients/cdcprinters.webp", imgalt: "CDC Printers" },
    {
      imgsrc: "/clients/chiangdentalclinic.webp",
      imgalt: "Chiang Dental Clinic",
    },
    { imgsrc: "/clients/curentisbiotech.webp", imgalt: "Curentis Biotech" },
    { imgsrc: "/clients/dentitydental.webp", imgalt: "Dentity Dental" },
    { imgsrc: "/clients/drsridevshastri.webp", imgalt: "Dr. Sridev Shastri" },
    {
      imgsrc: "/clients/drtwishampatinaskar.webp",
      imgalt: "Dr. Twisham Patinaskar",
    },
    { imgsrc: "/clients/edunethub.webp", imgalt: "Edunet Hub" },
    { imgsrc: "/clients/healthica.webp", imgalt: "Healthica" },
    {
      imgsrc: "/clients/himalihomestaymirik.webp",
      imgalt: "Himali Homestay Mirik",
    },
    { imgsrc: "/clients/hotrlgulmaview.webp", imgalt: "Hotel Gulmaview" },
    { imgsrc: "/clients/ignytepharma.webp", imgalt: "Ignyte Pharma" },
    { imgsrc: "/clients/jalanbuilders.webp", imgalt: "Jalan Builders" },
    { imgsrc: "/clients/justandaman.webp", imgalt: "Just Andaman" },
    { imgsrc: "/clients/kutchinahoogly.webp", imgalt: "Kutchina Hooghly" },
    { imgsrc: "/clients/lalbaba.webp", imgalt: "Lal Baba" },
    { imgsrc: "/clients/mahabirdoctorhub.webp", imgalt: "Mahabir Doctor Hub" },
    { imgsrc: "/clients/medipaspharma.webp", imgalt: "Medipas Pharma" },
    { imgsrc: "/clients/mietcollege.webp", imgalt: "MIET College" },
    { imgsrc: "/clients/mistrislg.webp", imgalt: "Mistri SLG" },
    {
      imgsrc: "/clients/muktadharanursing.webp",
      imgalt: "Muktadhara Nursing",
    },
    { imgsrc: "/clients/muktifresh.webp", imgalt: "Mukti Fresh" },
    { imgsrc: "/clients/muktingo.webp", imgalt: "Muktingo" },
    {
      imgsrc: "/clients/NakshaatraNursingInstitute.webp",
      imgalt: "Nakshaatra Nursing Institute",
    },
    { imgsrc: "/clients/navahomestay.webp", imgalt: "Nava Homestay" },
    { imgsrc: "/clients/nifdslg.webp", imgalt: "NIFD SLG" },
    { imgsrc: "/clients/orosyspharma.webp", imgalt: "Orosys Pharma" },
    { imgsrc: "/clients/planettech.webp", imgalt: "Planet Tech" },
    { imgsrc: "/clients/psinterio.webp", imgalt: "PS Interio" },
    { imgsrc: "/clients/rasulpurprotik.webp", imgalt: "Rasulpur Protik" },
    { imgsrc: "/clients/reddyhealthcare.webp", imgalt: "Reddy Healthcare" },
    { imgsrc: "/clients/retinainstitute.webp", imgalt: "Retina Institute" },
    { imgsrc: "/clients/rgskincare.webp", imgalt: "RGS Skincare" },
    {
      imgsrc: "/clients/rudrakshsuperspecialitycar.webp",
      imgalt: "Rudraksh Super Speciality Car",
    },
    { imgsrc: "/clients/sankhyasutralab.webp", imgalt: "Sankhya Sutra Lab" },
    {
      imgsrc: "/clients/sarojiniinstitution.webp",
      imgalt: "Sarojini Institution",
    },
    { imgsrc: "/clients/shahiltraders.webp", imgalt: "Shahil Traders" },
    {
      imgsrc: "/clients/shaktimanevehicle.webp",
      imgalt: "Shakti Mane Vehicle",
    },
    { imgsrc: "/clients/shantimindcare.webp", imgalt: "Shanti Mind Care" },
    { imgsrc: "/clients/sparshtea.webp", imgalt: "Sparsh Tea" },
    {
      imgsrc: "/clients/spectrumhealthcare.webp",
      imgalt: "Spectrum Healthcare",
    },
    { imgsrc: "/clients/theinsidestory.webp", imgalt: "The Inside Story" },
    { imgsrc: "/clients/toplinerealty.webp", imgalt: "Topline Realty" },
    { imgsrc: "/clients/visaexpress.webp", imgalt: "Visa Express" },
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
