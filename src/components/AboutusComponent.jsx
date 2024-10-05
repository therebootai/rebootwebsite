import Image from "next/image";
import React from "react";

const AboutusComponent = ({ showsection }) => {
  return (
    <section className="flex flex-col lg:flex-row justify-between mx-8 xlg:mx-12 xl:mx-16 gap-9">
      <div className="flex gap-5">
        <div className="flex flex-col justify-between gap-6 lg:gap-0">
          <div className="min-w-[60vw] lg:min-w-0 lg:w-[30vw] xl:w-[22vw] min-h-[30vmax] lg:min-h-[23.83vmax] xl:min-h-[20.83vmax] relative">
            <Image
              src="/home-about-1.png"
              alt="about-us"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between gap-4">
            <div className="w-[30vw] lg:w-[14.3vw] xl:w-[10.3vw] min-h-[25.7vmax] lg:min-h-[11.7vmax] relative">
              <Image
                fill
                src="/home-about-2.png"
                alt="about us"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative w-[30vw] lg:w-[14.3vw] xl:w-[10.3vw] min-h-[25.7vmax] lg:min-h-[11.7vmax]">
              <Image
                fill
                src="/home-about-3.png"
                alt="about us"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex-1 lg:w-[13.125vw] min-h-[33.8vmax] relative">
          <Image
            fill
            src="/home-about-4.png"
            alt="about us"
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <h3 className="text-black font-semibold text-xl xlg:text-3xl capitalize">
          About Us!
        </h3>
        <h1 className="text-primary text-3xl xlg:text-5xl font-semibold">
          We are dedicated to your Brand business.
        </h1>
        <p className="text-secondary text-base xlg:mt-4 line-clamp-[13] 2xl:line-clamp-none">
          Lorem ipsum dolor sit amet consectetur. Tincidunt non et et integer
          tempus nibh. Scelerisque ullamcorper integer egestas proin molestie
          tristique adipiscing. Tristique morbi risus scelerisque dignissim
          ornare justo. Auctor imperdiet at vitae congue nibh. Diam enim
          hendrerit vitae sit pellentesque. Sed phasellus sit non velit neque
          fusce consectetur ultrices. Ut vestibulum sed commodo lobortis mattis
          quam metus. Mauris enim quam quis laoreet. Magnis vel lacus mattis
          sit. Gravida ridiculus molestie vitae elementum ut adipiscing amet.
          Risus pellentesque quis pretium sit imperdiet. Urna amet purus varius
          sit elementum cras dignissim. Sollicitudin rhoncus sem sed quis
          malesuada id sit. Massa justo quam purus blandit cursus felis
          pellentesque. <br /> Lobortis odio pretium sit in amet duis. Cras
          morbi sed porttitor nam nulla aenean. Id dolor cras est consectetur
          urna viverra amet mattis id. Ut ultrices feugiat velit at mi congue
          consectetur pharetra ultricies. Quis diam blandit pellentesque sed.
          Sollicitudin porta sed elit nibh duis nibh. Quis feugiat donec orci
          amet. Mauris praesent elementum at est auctor morbi. Rutrum aliquam mi
          morbi elementum quam condimentum consectetur ipsum. Gravida non sed
          aenean neque gravida nullam. Enim accumsan lacinia commodo vestibulum
          enim orci tincidunt a in. <br /> Dignissim vel suspendisse dui massa
          hendrerit in hac lacus. Hendrerit faucibus praesent ut sit. Auctor id
          sollicitudin sagittis pulvinar lorem odio amet mattis. Sit nunc est
          nibh sed odio.
        </p>
        {showsection && (
          <div className="w-full h-[5rem] rounded-lg flex justify-center items-center  bg-primary text-white">
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
        )}
      </div>
    </section>
  );
};

export default AboutusComponent;
