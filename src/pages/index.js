import OurServices from "@/components/OurServices";
import OurUseTechnology from "@/components/OurUseTechnology";
import SliderComponent from "@/components/SliderComponent";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  
  const awardsLogo = [
    "/partner-image-1.png",
    "/partner-image-2.png",
    "/partner-image-1.png",
  ];

  return (
    <>
      <Head>
        <title>Reboot Ai</title>
      </Head>
      <main>
        <video
          src="/videos/header-cover.mp4"
          width={960}
          height={540}
          autoPlay
          loop
          muted
          preload="auto"
          className="w-full max-h-[30rem] xlg:max-h-[50rem] h-fit object-fill"
        />
        <section className="flex xlg:gap-11 xl:gap-12 justify-evenly items-center my-20 xlg:mx-24 xl:mx-28">
          <h1 className="text-[#333] max-w-[11ch] font-semibold lg:text-3xl xlg:text-4xl">
            Awards &amp; Recognitions
          </h1>
          <div className="flex xlg:gap-12 xl:gap-14 justify-evenly flex-1 w-full overflow-hidden">
            <SliderComponent>
              {awardsLogo.map((src, index) => (
                <div
                  className="shadow-[0_0_10px_2px_rgba(0,_0,_0,_0.12)] flex-grow basis-full bg-white py-4 !flex items-center justify-center slider-container relative"
                  key={index}
                >
                  <div className="flex items-center justify-center">
                    <Image
                      src={src}
                      alt="partner-logo"
                      quality={100}
                      width={272}
                      height={102}
                      className="object-cover w-56 xlg:w-64 xl:w-72 h-20 xlg:h-24 xl:h-28 rounded"
                    />
                  </div>
                </div>
              ))}
            </SliderComponent>
          </div>
        </section>
        <section></section>
        <OurUseTechnology />
        <OurServices />
      </main>
    </>
  );
}
