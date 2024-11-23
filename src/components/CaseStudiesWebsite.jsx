import React from "react";
import CaseComponent from "./CaseComponent";

const CaseStudiesWebsite = () => {
  const pageData = [
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Bengal-Tiger-APPS.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Chiang-s-Dental-Clinic.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/dr sridev shastri.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Dr-Saikat-Paul.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Fills Aqua.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Gautam-Industries.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Himali-Homestay.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Just-Andaman-Tours-Travel.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Modern-Institute-of-Engineering-Technology.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Mukti-Fresh.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/muktigreen.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/NIFD-Siliguri- School-of-design.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/PDESIS.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/PS-Interio.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Rasulpur-Group-Of-Institutions.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Reddy-Healthcare-Pvt-Ltd.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/RG-Skin-Care.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Rudraksh-Superspeciality.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/Spectrum-Healthcare-Diagnostics.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
    {
      site: "www.yourwebsite.com",
      img: "/case_studies/subieguys.webp",
      clientlogo: "/clients/mahabirdoctorhub.webp",
      category: "Institute/College",
      link: "",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pageData.map((dtat, index) => (
          <CaseComponent cases={dtat} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesWebsite;
