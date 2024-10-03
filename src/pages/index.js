import OurServices from "@/components/OurServices";
import OurUseTechnology from "@/components/OurUseTechnology";
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
          className="w-full max-h-[50rem] h-fit object-fill"
        />
        <section className="flex xlg:gap-11 xl:gap-12 justify-evenly items-center my-20 xlg:mx-24 xl:mx-28">
          <h1 className="text-[#333] max-w-[11ch] font-semibold lg:text-3xl xlg:text-4xl">
            Awards &amp; Recognitions
          </h1>
          <div className="flex xlg:gap-12 xl:gap-14 justify-evenly flex-1">
            {awardsLogo.map((src, index) => (
              <div
                className="shadow-[0_0_10px_2px_rgba(0,_0,_0,_0.12)] flex-grow basis-full rounded relative xlg:max-w-64 xl:max-w-72 xlg:h-24 xl:h-28 bg-white py-4 overflow-hidden"
                key={index}
              >
                <Image
                  src={src}
                  quality={100}
                  fill
                  className="object-cover"
                  sizes="18rem"
                />
              </div>
            ))}
          </div>
        </section>
        <section></section>
        <OurUseTechnology />
        <OurServices />
      </main>
    </>
  );
}
