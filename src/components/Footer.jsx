import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGlobe, FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { HiLocationMarker, HiOutlineCurrencyRupee } from "react-icons/hi";
import { BsChatQuote } from "react-icons/bs";

const Footer = () => {
  const footerLinks = [
    {
      head: "Quick Web Services",
      links: [
        {
          text: "Website Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Darjeeling",
          src: "",
        },
        {
          text: "App Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In West Bengal",
          src: "",
        },
        {
          text: "App Development In Cooch Behar",
          src: "",
        },
        {
          text: "Website Development In Cooch Behar",
          src: "",
        },
        {
          text: "Graphic Design Services",
          src: "",
        },
        {
          text: "Digital Marketing Services",
          src: "",
        },
        {
          text: "Social Media Marketing",
          src: "",
        },
      ],
    },
    {
      head: "Quick Web Services",
      links: [
        {
          text: "Website Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Darjeeling",
          src: "",
        },
        {
          text: "App Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In West Bengal",
          src: "",
        },
        {
          text: "App Development In Cooch Behar",
          src: "",
        },
        {
          text: "Website Development In Cooch Behar",
          src: "",
        },
        {
          text: "Graphic Design Services",
          src: "",
        },
        {
          text: "Digital Marketing Services",
          src: "",
        },
        {
          text: "Social Media Marketing",
          src: "",
        },
      ],
    },
    {
      head: "Quick Web Services",
      links: [
        {
          text: "Website Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Darjeeling",
          src: "",
        },
        {
          text: "App Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In West Bengal",
          src: "",
        },
        {
          text: "App Development In Cooch Behar",
          src: "",
        },
        {
          text: "Website Development In Cooch Behar",
          src: "",
        },
        {
          text: "Graphic Design Services",
          src: "",
        },
        {
          text: "Digital Marketing Services",
          src: "",
        },
        {
          text: "Social Media Marketing",
          src: "",
        },
      ],
    },
    {
      head: "Quick Web Services",
      links: [
        {
          text: "Website Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Siliguri",
          src: "",
        },
        {
          text: "Website Development In Darjeeling",
          src: "",
        },
        {
          text: "App Development In Kolkata",
          src: "",
        },
        {
          text: "App Development In West Bengal",
          src: "",
        },
        {
          text: "App Development In Cooch Behar",
          src: "",
        },
        {
          text: "Website Development In Cooch Behar",
          src: "",
        },
        {
          text: "Graphic Design Services",
          src: "",
        },
        {
          text: "Digital Marketing Services",
          src: "",
        },
        {
          text: "Social Media Marketing",
          src: "",
        },
      ],
    },
  ];

  return (
    <footer className=" relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer-bg.png"
          alt="Footer Background"
          fill
          quality={100}
          className="opacity-75 object-cover"
        />
      </div>
      <div className="bg-[#222]/85 relative z-10 p-8 xlg:p-16 flex flex-col gap-11">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {footerLinks.map((item, index) => (
            <div className="flex flex-col gap-3" key={index}>
              <h2 className="text-base font-bold text-justify text-white flex items-center gap-1">
                <span>{item.head}</span>
                <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
              </h2>
              <ul className="flex flex-col text-[0.75rem] leading-5">
                {item.links.map((link, count) => (
                  <li
                    className="flex items-center gap-2 text-white"
                    key={count}
                  >
                    <span className="text-primary">&gt;</span>
                    <span>{link.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-16">
          <div className="flex flex-col items-start gap-2">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="logo"
                width={253}
                height={46}
                className="w-[17.5vw]"
              />
            </Link>
            <p className="text-xs text-white text-wrap">
              Lorem ipsum dolor sit amet consectetur. Pellentesque senectus
              augue ipsum dignissim. In vitae aliquet placerat erat.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-bold text-justify text-white flex items-center gap-1">
              <span>Our Pages</span>
              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
            </h2>
            <p className="text-xs text-white whitespace-nowrap">
              CIN No: U74140WB2021PTC243170
            </p>
            <p className="text-xs text-white whitespace-nowrap">
              GSTIN No: U74140WB2021PTC243170
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-bold text-justify text-white flex items-center gap-1">
              <span>Get in touch</span>
              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
            </h2>
            <p className="text-xs text-white flex items-center gap-1">
              <FaPhoneVolume className="text-primary" />{" "}
              <Link href="tel:919024886970">+91 90248 86970</Link>
            </p>
            <p className="text-xs text-white flex items-center gap-1">
              <IoMailSharp className="text-primary" />{" "}
              <Link href="mailTo:info@rebootmarketing.in">
                info@rebootmarketing.in
              </Link>
            </p>
            <p className="text-xs text-white flex items-center gap-1">
              <FaGlobe className="text-primary" />{" "}
              <Link href="/">rebootmarketing.in</Link>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-bold text-justify text-white flex items-center gap-1">
              <span>Our Offices</span>
              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
            </h2>
            <p className="text-xs text-white flex items-center gap-1">
              <HiLocationMarker className="text-primary" />{" "}
              <Link href="tel:919024886970">
                Haren Mukherjee Road, Near Pakurta, Siliguri, West Bengal -
                734001 India
              </Link>
            </p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
        <div className="flex justify-between gap-8 lg:gap-20 flex-col lg:flex-row">
          <div className="min-h-20 xl:min-h-32 w-full lg:w-[17.65vw] relative">
            <Image
              src="/icons/msme.png"
              alt="msme"
              fill
              className="object-contain"
            />
          </div>
          {/* <div className="flex flex-col justify-between gap-2 xlg:gap-0">
            <button
              type="button"
              className="text-sm xl:text-base font-bold text-white px-4 xl:px-10 py-3 bg-primary inline-flex items-center gap-2 rounded-lg"
            >
              <HiOutlineCurrencyRupee /> <span>Pay Online</span>
            </button>
            <button
              type="button"
              className="text-sm xl:text-base font-bold text-white px-4 xl:px-10 py-3 bg-primary inline-flex items-center gap-2 rounded-lg"
            >
              <BsChatQuote /> <span>Ge A Quote</span>
            </button>
          </div> */}
          <div className="min-h-20 xlg:min-h-28 w-full lg:w-48 xlg:w-64 relative bg-white rounded-lg">
            <Image
              src="/icons/google-partner.png"
              alt="google"
              fill
              className="object-contain"
            />
          </div>
          <div className="min-h-20 xlg:min-h-28 w-full lg:w-48 xlg:w-64 relative bg-white rounded-lg">
            <Image
              src="/icons/meta-business-partner-logo.webp"
              alt="meta"
              fill
              className="object-contain"
            />
          </div>
          <div className="min-h-20 xlg:min-h-28 w-full lg:w-48 xlg:w-64 relative bg-white rounded-lg">
            <Image
              src="/icons/makeinindia.webp"
              alt="meta"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="h-0.5 w-full bg-[rgba(139,139,139,0.6)]"></div>
        <div className="flex items-center lg:items-stretch flex-col gap-4 lg:flex-row justify-between">
          <h1 className="text-white text-xs">
            &copy;{" "}
            <span className="font-bold">Reboot Marketing Private Limited.</span>{" "}
            All Rights Reserved
          </h1>
          <h1 className="text-white text-xs">
            Terms and Conditions | Privacy Policy
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
