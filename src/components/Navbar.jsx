import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [isScrolling, setIsScrolling] = useState(false);

  const isActive = (path) => router.asPath === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // At the top of the page
        setIsScrolling(false);
      } else {
        // Scrolling down or not at the top
        setIsScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
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
      text: "about us",
      href: "#",
      subMenu: [
        {
          heading: "About Reboot AI",
          menus: [
            {
              text: "About Us",
              href: "/about",
            },
            {
              text: "Life at Reboot",
              href: "/life_at_reboot",
            },
            {
              text: "Recognition",
              href: "/recognition",
            },
            {
              text: "Privacy Policy",
              href: "/privacy_policy",
            },
            {
              text: "Refund Policy",
              href: "/refund_policy",
            },
            {
              text: "Terms of Services",
              href: "/terms_of_services",
            },
          ],
        },
      ],
    },
    {
      text: "services",
      href: "#",
      subMenu: [
        {
          heading: "Web Development",
          menus: [
            {
              text: "Custom Website Development",
              href: "/services/custom_website_development",
            },
            {
              text: "E-commerce Store Development",
              href: "/services/e-commerce_store_development",
            },
            {
              text: "Web Application Development",
              href: "/services/web_application_development",
            },
            {
              text: "Dynamic Website Development",
              href: "/services/dynamic_website_development",
            },
            {
              text: "Saas Application Development",
              href: "/services/saas_application_development",
            },
          ],
        },
        {
          heading: "App Development",
          menus: [
            {
              text: "Web Apps Development",
              href: "/services/web_apps_development",
            },
            {
              text: "Android App Development",
              href: "/services/android_app_development",
            },
            {
              text: " iOS App Development",
              href: "/services/ios_app_development",
            },
            {
              text: "Flutter App Development",
              href: "/services/flutter_app_development",
            },
            {
              text: "AI & ML Integration",
              href: "/services/ai_ml_integration",
            },
          ],
        },
        {
          heading: "Marketing Solutions",
          menus: [
            {
              text: "Business Consultation",
              href: "/services/business_consultation",
            },
            {
              text: "Performance Marketing",
              href: "/services/performance_marketing",
            },
            {
              text: "PR & Brand Building",
              href: "/services/pr_brand_building",
            },
            {
              text: "Google Marketing",
              href: "/services/google_marketing",
            },
            {
              text: "Social Media Solutions",
              href: "/services/social_media_solutions",
            },
          ],
        },
        {
          heading: "On-Demand Service",
          menus: [
            {
              text: " IT Consultation",
              href: "/services/it_consultation",
            },
            {
              text: "Web & Apps Security",
              href: "/services/web_and_app_security",
            },
            {
              text: "Creative UI Design",
              href: "/services/creative_ui_design",
            },
            {
              text: "Brand Starter Solution",
              href: "/services/brand_starter_solution",
            },
            {
              text: "Cloud Server Setup",
              href: "/services/cloud_server_setup",
            },
          ],
        },
      ],
    },
    {
      text: "Products",
      href: "#",
      subMenu: [
        {
          heading: "Our Live Products",
          menus: [
            {
              text: "Educational Consultant CRM",
              href: "/educational_consultant_crm",
            },
            {
              text: "Clinic Management Software",
              href: "/clinic_management_software",
            },
            {
              text: "Service Center Management CRM ",
              href: "/service_center_management_crm",
            },
          ],
        },
      ],
    },
    {
      text: "case studies",
      href: "/case-studies",
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
          ? "bg-black/90"
          : "bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.80)_0%,_rgba(0,_0,_0,_0.00)_100%)]"
      } pt-5 pb-14 px-8 xlg:px-14 xl:px-16 fixed w-full top-0 left-0 z-[1100] transition-all duration-500`}
    >
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={253}
            height={46}
            className="w-[17.5vw]"
          />
        </Link>
        <ul className="flex items-center justify-center gap-5">
          {navLinks.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                href={item.href}
                className={`${
                  isActive(item.href) ? "text-primary" : "text-white"
                } text-base xlg:text-lg xl:text-xl font-medium capitalize hover:text-primary`}
              >
                {item.text}
              </Link>
              {item.subMenu && (
                <div className="absolute top-full bg-black/90 left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden flex rounded">
                  {item.subMenu.map((menu, con) => (
                    <div
                      className="text-white flex flex-col gap-6 whitespace-nowrap p-4"
                      key={con}
                    >
                      <h1 className="text-base xlg:text-lg font-semibold flex items-center gap-2">
                        {menu.heading}{" "}
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
              )}
            </li>
          ))}
        </ul>
        <Link
          href="/contact-us"
          className="text-center text-sm font-semibold text-white inline-flex items-center justify-center bg-[#09f] gap-1 px-2 xlg:px-4 py-1 xlg:py-2 rounded"
        >
          Book an Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
