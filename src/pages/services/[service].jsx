import ServicePageDesign from "@/components/ServicePageDesign";
import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const CustomWebsiteDevelopment = ({
  title,
  content,
  packages,
  pagedesigns,
}) => {
  return (
    <>
      <Head>
        <title>Reboot AI | Services</title>
      </Head>
      <div>
        <ServicePageDesign
          title={title}
          content={content}
          packages={packages}
          pagedesigns={pagedesigns}
        />
      </div>
    </>
  );
};

export default CustomWebsiteDevelopment;

export const getStaticPaths = async () => {
  // Define 5 static paths for your services
  const paths = [
    { params: { service: "custom_website_development" } },
    { params: { service: "e-commerce_store_development" } },
    { params: { service: "web_application_development" } },
    { params: { service: "dynamic_website_development" } },
    { params: { service: "saas_application_development" } },
    { params: { service: "android_app_development" } },
    { params: { service: "ios_app_development" } },
    { params: { service: "flutter_app_development" } },
    { params: { service: "ai_ml_integration" } },
    { params: { service: "business_consultation" } },
    { params: { service: "performance_marketing" } },
    { params: { service: "pr_brand_building" } },
    { params: { service: "google_marketing" } },
    { params: { service: "social_media_solutions" } },
    { params: { service: "it_consultation" } },
    { params: { service: "web_and_app_security" } },
    { params: { service: "creative_ui_design" } },
    { params: { service: "brand_starter_solution" } },
    { params: { service: "cloud_server_setup" } },
  ];

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want fallback pages
  };
};

export const getStaticProps = async ({ params }) => {
  // Mock data for services
  const serviceData = {
    custom_website_development: {
      title: "Custom Website Development",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },

    "e-commerce_store_development": {
      title: "E-Commerce Store Development",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    web_application_development: {
      title: "Web Application Development",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    dynamic_website_development: {
      title: "Dynamic Website Development",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    sass_application_development: {
      title: "Sass Application Development",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    android_app_development: {
      title: "Android App Development",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    ios_app_development: {
      title: "iOS App Development",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    flutter_app_development: {
      title: "Flutter App Development",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    ai_ml_integration: {
      title: "AI & ML Integration",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    business_consultation: {
      title: "Business Consultation",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    performance_marketing: {
      title: "Performance Marketing",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    pr_brand_building: {
      title: "PR & Brand Building",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    google_marketing: {
      title: "Google Marketing",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    social_media_solutions: {
      title: "Social Media Solutions",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    it_consultation: {
      title: "IT Consultation",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    web_and_apps_security: {
      title: "Web & Apps Security",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    creative_ui_design: {
      title: "Creative UI/UX Design",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    brand_starter_solution: {
      title: "Brand Starter Solution",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
    cloud_server_setup: {
      title: "Cloud Server Setup",
      content: {
        serviceimg: "/images/serviceimg.webp",
        servicename: " Web Development",
        servicedesc1:
          "Today visual content is gaining importance as it creates your brand’s image in the audience’s mind and so, the need for graphic design has increased among all types of businesses. The reason is graphic design helps to make your business stand out different from its competition. In other words, it helps in engaging the audience with your brand.",
        servicedesc2:
          "Lorem ipsum dolor sit amet consectetur. Hendrerit adipiscing morbi lorem nullam sit mattis sit commodo pretium. Risus fermentum lectus sed sed proin justo. Aliquet egestas cursus aliquet urna tellus molestie. Odio interdum nullam ipsum pulvinar placerat pellentesque maecenas tincidunt. Sagittis ut sit pellentesque dignissim. <br /> Vitae varius lectus tempus cilisis aliquet bibendum non in. Et aliquet malesuada malesuada sit sit nulla vitae malesuada  eget. Ut venenatis donec diam nec adipiscing eget quam tincidunt suspendisse. Urna consequat tincidunt tempor dolor mauris. Phasellus morbi quis pretium pharetra. Sit enim urna tellus libero adipiscing massa. Faucibus id nulla porttitor vel in massa  volutpat cursus. Luctus orci duis vitae urna. Donec consequat egestas imperdiet augue nisi tellus sagittis amet volutpat. sodales magna orci quis a aliquet. Nibh vitae non amet vitae. Posuere aliquam venenatis in fringilla risus vel consectetur. Tempus posuere at.",
      },

      packages: [
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
        {
          heading: "Basic Web Designing Package",
          details: [
            "Website Design",
            "SEO Friendly",
            "Mobile and Desktop Responsive",
            "1 Design art reversion",
            "Up to 3-5 Pages Content",
            "1-Month Free Support/Maintenance.",
            "₹ 22,000 INR",
          ],
        },
      ],

      pagedesigns: ["/images/pagedesign.png", "/images/pagedesign.png"],
    },
  };

  const { service } = params;

  // Fetch data based on the service
  const data = serviceData[service];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      title: data.title,
      content: data.content,
      packages: data.packages,
      pagedesigns: data.pagedesigns,
    },
  };
};
