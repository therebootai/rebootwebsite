import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const isActive = (path) => router.asPath === path;

  const navLinks = [
    {
      text: "home",
      href: "/",
    },
    {
      text: "services",
      href: "/services",
    },
    {
      text: "case studies",
      href: "/case-studies",
    },
    {
      text: "about us",
      href: "/about-us",
    },
    {
      text: "career",
      href: "/career",
    },
    {
      text: "contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.80)_0%,_rgba(0,_0,_0,_0.00)_100%)] pt-5 pb-14 px-8 xlg:px-14 xl:px-16 fixed w-full top-0 left-0 z-[1100]">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={420}
            height={51}
            className="w-64 xlg:w-80 xl:w-[26rem]"
          />
        </Link>
        <ul className="flex items-center justify-center gap-5">
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`${
                  isActive(item.href) ? "text-primary" : "text-white"
                } text-base xlg:text-lg xl:text-xl font-medium capitalize hover:text-primary`}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="text-center text-sm font-semibold text-white inline-flex items-center justify-center bg-[#09f] gap-1 px-2 xlg:px-4 py-1 xlg:py-2 rounded"
        >
          Book an Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
