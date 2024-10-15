import Image from "next/image";
import React from "react";

const AboutusComponent = ({ showsection }) => {
  return (
    <section className="flex flex-col gap-4 xl:p-16 lg:p-8 p-4">
      <section className="flex flex-col lg:flex-row justify-between  gap-9">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 md:gap-4">
            <div className="flex flex-col justify-between gap-2 md:gap-6 lg:gap-4">
              <div className=" min-w-[50vw] min-h-[20vmax] md:min-w-[60vw] lg:min-w-0 lg:w-[30vw] xl:w-[22vw] md:min-h-[30vmax] lg:min-h-[23.83vmax] xl:min-h-[20.83vmax] relative">
                <Image
                  src="/home-about-1.webp"
                  alt="about-us"
                  fill
                  priority
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between gap-2 md:gap-4">
                <div className="md:w-[30vw] w-[25vw] lg:w-[14.3vw] xl:w-[10.3vw] min-h-[16vmax] md:min-h-[25.7vmax] lg:min-h-[11.7vmax] relative">
                  <Image
                    fill
                    src="/home-about-2.webp"
                    alt="about us"
                    priority
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative md:w-[30vw] w-[25vw]  lg:w-[14.3vw] xl:w-[10.3vw] min-h-[16vmax] md:min-h-[25.7vmax] lg:min-h-[11.7vmax]">
                  <Image
                    fill
                    src="/home-about-3.webp"
                    alt="about us"
                    priority
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex-1 lg:w-[13.125vw] min-h-[33.8vmax] relative">
              <Image
                fill
                src="/home-about-4.webp"
                alt="about us"
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 xl:gap-5 justify-between">
          <h3 className="text-black font-semibold text-xl xlg:text-3xl capitalize">
            About Us!
          </h3>
          <h1 className="text-primary text-3xl xlg:text-4xl xl:text-5xl font-semibold">
            We are dedicated to your Brand business.
          </h1>
          <p className="text-secondary text-sm/[22px] md:text-base xlg:mt-4 lg:line-clamp-[11] xlg:line-clamp-[13] 2xl:line-clamp-none">
            Lorem ipsum dolor sit amet consectetur. Tincidunt non et et integer
            tempus nibh. Scelerisque ullamcorper integer egestas proin molestie
            tristique adipiscing. Tristique morbi risus scelerisque dignissim
            ornare justo. Auctor imperdiet at vitae congue nibh. Diam enim
            hendrerit vitae sit pellentesque. Sed phasellus sit non velit neque
            fusce consectetur ultrices. Ut vestibulum sed commodo lobortis
            mattis quam metus. Mauris enim quam quis laoreet. Magnis vel lacus
            mattis sit. Gravida ridiculus molestie vitae elementum ut adipiscing
            amet. Risus pellentesque quis pretium sit imperdiet. Urna amet purus
            varius sit elementum cras dignissim. Sollicitudin rhoncus sem sed
            quis malesuada id sit. Massa justo quam purus blandit cursus felis
            pellentesque. <br /> Lobortis odio pretium sit in amet duis. Cras
            morbi sed porttitor nam nulla aenean. Id dolor cras est consectetur
            urna viverra amet mattis id. Ut ultrices feugiat velit at mi congue
            consectetur pharetra ultricies. Quis diam blandit pellentesque sed.
            Sollicitudin porta sed elit nibh duis nibh. Quis feugiat donec orci
            amet. Mauris praesent elementum at est auctor morbi. Rutrum aliquam
            mi morbi elementum quam condimentum consectetur ipsum. Gravida non
            sed aenean neque gravida nullam. Enim accumsan lacinia commodo
            vestibulum enim orci tincidunt a in. <br /> Dignissim vel
            suspendisse dui massa hendrerit in hac lacus. Hendrerit faucibus
            praesent ut sit. Auctor id sollicitudin sagittis pulvinar lorem odio
            amet mattis. Sit nunc est nibh sed odio.
          </p>
        </div>
      </section>
      {showsection && (
        <section className="flex flex-col md:flex-row items-center gap-4 justify-between w-full">
          <section className="flex flex-col w-full md:w-[50%] xl:w-[40%]">
            <p className="xlg:text-2xl text-xl font-medium text-[#333333]">
              Are Your <span className="text-primary"> Ready,</span>
            </p>
            <p className="xlg:text-4xl text-3xl font-semibold text-[#333333]">
              To Grow <span className="text-primary">Your Business</span>
            </p>
            <p className="xlg:text-2xl text-xl font-medium text-[#333333]">
              Make More <span className="text-primary">Benefits</span>
            </p>
          </section>
          <div className="xl:w-[60%] md:w-[50%] w-full h-[5rem] rounded-lg flex justify-center items-center  bg-primary text-white">
            <span className="xl:text-4xl lg:text-3xl md:text-2xl text-xl font-semibold text-white flex items-center w-full justify-center gap-2">
              <Image
                src={"/icons/talkicon.svg"}
                alt="Talk icon"
                width={100}
                height={20}
                className="w-fit h-[2rem] lg:h-[3rem]"
              />
              Talk To Our Experts Now!
            </span>
          </div>
        </section>
      )}
    </section>
  );
};

export default AboutusComponent;
