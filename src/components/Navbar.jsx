import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenuFold } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown for mobile

  const isActive = (path) => {
    return router.asPath === path || router.asPath.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    {
      text: "home",
      href: "/",
    },
    {
      text: "about",

      subMenu: [
        {
          heading: "About Reboot AI",
          menus: [
            {
              text: "About Us",
              href: "/about",
            },

            {
              text: "Privacy Policy",
              href: "/images/Privacy Policy.pdf",
            },
            {
              text: "Refund Policy",
              href: "/images/Refund Policy.pdf",
            },
            {
              text: "Terms of Services",
              href: "/images/Terms & Conditions.pdf",
            },
            {
              text: "List Of Holidays 2025",
              href: "/images/List of Holidays 2025.pdf",
            },
          ],
        },
      ],
    },
    {
      text: "services",

      subMenu: [
        {
          heading: "Web Development",
          menus: [
            {
              text: "Custom Website Development",
              href: "/services/website-development-company-in-kolkata",
            },
            {
              text: "E-commerce Store Development",
              href: "/services/e-commerce-website-developer-in-kolkata",
            },
            {
              text: "Web Application Development",
              href: "/services/web-application-development-service-in-kolkata",
            },
            {
              text: "Dynamic Website Development",
              href: "/services/dynamic-website-development-service-in-siliguri",
            },
            {
              text: "Saas Application Development",
              href: "/services/saas-application-development-service-in-kolkata",
            },
          ],
        },
        {
          heading: "App Development",
          menus: [
            {
              text: "Web Apps Development",
              href: "/services/web-application-development-service-in-kolkata",
            },
            {
              text: "Android App Development",
              href: "/services/app-developer-in-kolkata-android-app-development",
            },
            {
              text: " iOS App Development",
              href: "/services/ios-app-development-company-in-siliguri",
            },
            {
              text: "Flutter App Development",
              href: "/services/flutter-developer-in-kolkata",
            },
            {
              text: "AI & ML Integration",
              href: "/services/ai-ml-integration-services-in-kolkata",
            },
          ],
        },
        {
          heading: "Marketing Solutions",
          menus: [
            {
              text: "Business Consultation",
              href: "/services/business-consultation-service-in-kolkata",
            },
            {
              text: "Performance Marketing",
              href: "/services/performance-marketing-agency-in-kolkata",
            },
            {
              text: "PR & Brand Building",
              href: "/services/influencer-marketing-agency-in-kolkata",
            },
            {
              text: "Google Marketing",
              href: "/services/seo-agency-in-kolkata",
            },
            {
              text: "Social Media Solutions",
              href: "/services/social-media-agency-in-siliguri",
            },
          ],
        },
        {
          heading: "On-Demand Service",
          menus: [
            {
              text: " IT Consultation",
              href: "/services/it-consultation-service-in-kolkata",
            },
            {
              text: "Web & Apps Security",
              href: "/services/cyber-security-service-in-kolkata",
            },
            {
              text: "Creative UI Design",
              href: "/services/ui-ux-developer-in-kolkata",
            },
            {
              text: "Brand Starter Solution",
              href: "/services/brand-starter-solution-agency-in-kolkata",
            },
            {
              text: "Cloud Server Setup",
              href: "/services/cloud-server-setup",
            },
          ],
        },
      ],
    },
    {
      text: "Products",

      subMenu: [
        {
          heading: "Our Live Products",
          menus: [
            {
              text: "Educational CRM Advanced",
              href: "/products/educational-CRM-advanced",
            },
            {
              text: "Clinic Management Software",
              href: "/products/clinic-management-software",
            },
            {
              text: "Service Center Management CRM ",
              href: "/products/service-center-management-crm",
            },
          ],
        },
      ],
    },
    {
      text: "Portfolios",
      href: "/portfolios",
    },
    {
      text: "career",
      href: "/career",
    },
    {
      text: "blogs",
      href: "/blogs",
    },
  ];

  return (
    <nav
      className={`${
        isScrolling
          ? "bg-black/90 lg:pb-5"
          : "bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.80)_0%,_rgba(0,_0,_0,_0.00)_100%)] lg:pb-14 xl:pb-16"
      } pt-5 pb-5 xl:pb-7 px-8 xlg:px-14 xl:px-16 fixed w-full top-0 left-0 z-[1100] transition-all duration-500`}
    >
      <div className="flex justify-between items-center relative">
        <Link href="/">
          <Image
            src="/rebootailogoindianflagcolor.png"
            alt="logo"
            width={253}
            height={46}
            className="w-[17.5vw]"
          />
        </Link>

        <ul className="hidden lg:flex items-center pt-4 justify-center gap-5">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`${
                    isActive(item.href) ? "text-primary" : "text-white"
                  } text-base xlg:text-lg xl:text-xl font-medium capitalize hover:text-primary`}
                >
                  {item.text}
                </Link>
              ) : (
                <div className="relative">
                  <span
                    className={`${
                      isActive(item.href) ? "text-primary" : "text-white"
                    } text-base xlg:text-lg xl:text-xl font-medium capitalize hover:text-primary`}
                  >
                    {item.text}
                  </span>

                  <div className="absolute top-full bg-black/90 left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden flex rounded">
                    {item.subMenu.map((menu, con) => (
                      <div
                        className="text-white flex flex-col gap-6 whitespace-nowrap p-2 py-4 xlg:p-4"
                        key={con}
                      >
                        <h1 className="text-base xlg:text-lg font-semibold flex items-center gap-2">
                          {menu.heading}
                          <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
                        </h1>
                        <ul className="flex flex-col gap-4">
                          {menu.menus.map((link, indx) => (
                            <li key={indx} className="text-base xlg:text-lg">
                              <Link
                                href={link.href}
                                className="flex items-center gap-2"
                              >
                                <span className="text-primary">&gt;</span>
                                {link.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {/* Contact Us Button */}
        <Link
          href="/contact-us"
          className="hidden lg:block bg-blue-600 text-white py-2 px-4 rounded"
        >
          Contact Us
        </Link>
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="menu-open"
        >
          <svg width="0" height="0">
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3FFF74" />
              <stop offset="100%" stopColor="#0A5BFF" />
            </linearGradient>
          </svg>
          <span
            className={`transform transition-transform duration-500 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? (
              <IoCloseSharp
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            ) : (
              <AiOutlineMenuFold
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            )}
          </span>
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-black/90 absolute top-full w-full left-0 text-white lg:hidden p-6 pb-24 rounded-b-lg h-screen overflow-y-scroll">
          <ul className="flex flex-col gap-4 capitalize">
            {navLinks.map((item, index) => (
              <li key={index} className="relative">
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary ">
                    {item.text}
                  </Link>
                ) : (
                  <div>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      <span className="capitalize">{item.text}</span>
                      <span>{openDropdown === index ? "-" : "+"}</span>
                    </div>
                    {openDropdown === index && (
                      <div
                        className={`duration-500 transition-all origin-top ${
                          openDropdown === index
                            ? "h-auto opacity-100"
                            : "h-0 opacity-0"
                        } overflow-hidden flex flex-col rounded`}
                      >
                        {item.subMenu.map((menu, subIndex) => (
                          <div
                            className="text-white flex flex-col gap-6 whitespace-nowrap p-2"
                            key={subIndex}
                          >
                            <h1 className="text-base xlg:text-lg font-semibold flex items-center gap-2">
                              {menu.heading}
                              <span className="bg-[linear-gradient(90deg,_#4385F5_0%,_rgba(67,_133,_245,_0.00)_100%)] w-12 h-1"></span>
                            </h1>
                            <ul className="flex flex-col gap-4">
                              {menu.menus.map((link, linkIndex) => (
                                <li
                                  key={linkIndex}
                                  className="text-base xlg:text-lg"
                                >
                                  <Link
                                    href={link.href}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="text-primary">&gt;</span>
                                    {link.text}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
            <Link
              href="/contact-us"
              className="w-fit bg-blue-600 text-white py-2 px-8 rounded"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
