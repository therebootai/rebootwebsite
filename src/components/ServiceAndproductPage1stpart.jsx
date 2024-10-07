import Image from "next/image";
import React from "react";

const ServiceAndproductPage1stpart = ({ content }) => {
  const { serviceimg, servicename, servicedesc1, servicedesc2 } = content;
  return (
    <section className="xl:p-16 lg:p-8 sm:p-4 flex flex-row gap-4 justify-between">
      <div className="w-[42%] flex flex-col gap-4">
        <section className="">
          <Image
            src={serviceimg}
            alt={servicename}
            width={512}
            height={610}
            className="w-full h-[80vh] object-cover rounded-md"
          />
        </section>
        <section className="flex flex-col">
          <p className="text-2xl font-medium text-[#333333]">
            Are Your <span className="text-primary"> Ready,</span>
          </p>
          <p className="text-4xl font-semibold text-[#333333]">
            To Grow <span className="text-primary">Your Business</span>
          </p>
          <p className="text-2xl font-medium text-[#333333]">
            Make More <span className="text-primary">Benefits</span>
          </p>
        </section>
      </div>
      <section className="w-[55%] flex flex-col gap-6">
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl font-medium ">Service</h2>
          <h1 className=" text-5xl font-semibold text-primary ">
            {servicename} <br /> Services
          </h1>
        </section>
        <section className="flex flex-col gap-4">
          <p className="text-xl/[30px] ">{servicedesc1}</p>
          <p
            className="text-base/[27px]"
            dangerouslySetInnerHTML={{ __html: servicedesc2 }}
          ></p>
          <div className="w-full h-[5rem] rounded-lg flex justify-center items-center mt-4 bg-primary text-white">
            <span className="text-4xl font-semibold text-white flex items-center w-full justify-center gap-2">
              <Image
                src={"/icons/talkicon.svg"}
                alt="Talk icon"
                width={100}
                height={20}
                className="w-fit h-[3rem]"
              />
              Talk To Our Experts Now!
            </span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ServiceAndproductPage1stpart;
