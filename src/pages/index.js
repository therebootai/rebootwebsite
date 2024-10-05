import OurServices from "@/components/OurServices";
import OurUseTechnology from "@/components/OurUseTechnology";
import QueryForm from "@/components/QueryForm";
import Head from "next/head";
import Image from "next/image";
import { MdOutlineStarBorder, MdStarRate } from "react-icons/md";

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
          className="w-full max-h-[33.3vw] xlg:max-h-[55.5vw] object-fill"
        />
        <section className="flex xlg:gap-11 xl:gap-12 justify-evenly  items-center my-20 xlg:mx-24 xl:mx-28">
          <h1 className="text-[#333] max-w-[11ch] font-semibold lg:text-3xl xlg:text-4xl">
            Awards &amp; Recognitions
          </h1>
          <div className="flex xlg:gap-12 xl:gap-14 justify-evenly flex-1 items-center">
            {awardsLogo.map((src, index) => (
              <div
                className="shadow-[0_0_10px_2px_rgba(0,_0,_0,_0.12)] rounded relative bg-white flex justify-center items-center"
                key={index}
              >
                <Image
                  src={src}
                  width={272}
                  height={102}
                  className="rounded max-w-[18.8vw] min-h-fit"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="flex justify-between mx-12 xl:mx-16 gap-9">
          <div className="flex gap-5">
            <div className="flex flex-col justify-between">
              <div className="w-[22vw] min-h-[20.83vmax] relative">
                <Image
                  src="/home-about-1.png"
                  alt="about-us"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <div className=" w-[10.3vw] min-h-[11.7vmax] relative">
                  <Image
                    fill
                    src="/home-about-2.png"
                    alt="about us"
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative w-[10.3vw] min-h-[11.7vmax]">
                  <Image
                    fill
                    src="/home-about-3.png"
                    alt="about us"
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="w-[13.125vw] min-h-[33.8vmax] relative">
              <Image
                fill
                src="/home-about-4.png"
                alt="about us"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-2">
            <h3 className="text-black font-semibold text-3xl capitalize">
              About Us!
            </h3>
            <h1 className="text-primary text-5xl font-semibold">
              We are dedicated to your Brand business.
            </h1>
            <p className="text-secondary text-base mt-4 line-clamp-[13] 2xl:line-clamp-none">
              Lorem ipsum dolor sit amet consectetur. Tincidunt non et et
              integer tempus nibh. Scelerisque ullamcorper integer egestas proin
              molestie tristique adipiscing. Tristique morbi risus scelerisque
              dignissim ornare justo. Auctor imperdiet at vitae congue nibh.
              Diam enim hendrerit vitae sit pellentesque. Sed phasellus sit non
              velit neque fusce consectetur ultrices. Ut vestibulum sed commodo
              lobortis mattis quam metus. Mauris enim quam quis laoreet. Magnis
              vel lacus mattis sit. Gravida ridiculus molestie vitae elementum
              ut adipiscing amet. Risus pellentesque quis pretium sit imperdiet.
              Urna amet purus varius sit elementum cras dignissim. Sollicitudin
              rhoncus sem sed quis malesuada id sit. Massa justo quam purus
              blandit cursus felis pellentesque. <br /> Lobortis odio pretium
              sit in amet duis. Cras morbi sed porttitor nam nulla aenean. Id
              dolor cras est consectetur urna viverra amet mattis id. Ut
              ultrices feugiat velit at mi congue consectetur pharetra
              ultricies. Quis diam blandit pellentesque sed. Sollicitudin porta
              sed elit nibh duis nibh. Quis feugiat donec orci amet. Mauris
              praesent elementum at est auctor morbi. Rutrum aliquam mi morbi
              elementum quam condimentum consectetur ipsum. Gravida non sed
              aenean neque gravida nullam. Enim accumsan lacinia commodo
              vestibulum enim orci tincidunt a in. <br /> Dignissim vel
              suspendisse dui massa hendrerit in hac lacus. Hendrerit faucibus
              praesent ut sit. Auctor id sollicitudin sagittis pulvinar lorem
              odio amet mattis. Sit nunc est nibh sed odio. <br /> Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Neque esse debitis
              eveniet, iusto minus, facere non numquam nobis recusandae quasi
              obcaecati porro enim sint aliquid, vel amet laborum distinctio
              incidunt! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Veniam eius, nihil dolorem ea eos blanditiis sequi odio
              perferendis quia, culpa quas cum vero voluptates. Aliquid
              reprehenderit tempora aperiam obcaecati nihil. <br /> Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Cum quo labore
              accusantium repudiandae consequuntur quibusdam quod, vel laborum
              reprehenderit hic, nam adipisci magnam? Sint distinctio cupiditate
              nam fuga, libero quia in sunt dolore perferendis suscipit nemo
              dolorum voluptas corporis similique iusto dignissimos minima
              magnam dolor modi expedita officiis veniam voluptatum. Quae, quo
              consequuntur. Labore sint possimus odio. <br /> Minus, voluptatum.
              Minus eum quidem nesciunt aut iusto nihil, hic eveniet temporibus
              assumenda necessitatibus ullam magni fugit possimus. Reiciendis
              dolor, aut, a, mollitia error magni magnam velit aliquam vero
              tempore vel nemo omnis eius distinctio veritatis libero rerum.
            </p>
          </div>
        </section>
        <OurUseTechnology />
        <OurServices />
        <section className="flex px-16 gap-6 my-20">
          <QueryForm />
          <div className="flex flex-col gap-9">
            <div className="flex flex-col gap-4">
              <h2 className="text-[#333] text-xl font-semibold">
                Let&apos;s See Some
              </h2>
              <h1 className="text-primary text-4xl font-semibold">
                Our Creative Design
              </h1>
              <div className="flex gap-6">
                <div className="relative size-[21.25vw]">
                  <Image
                    src="/our-creative-design-1.png"
                    alt="creative design"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="relative size-[21.25vw]">
                  <Image
                    src="/our-creative-design-2.png"
                    alt="creative design"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-[#333] text-xl font-semibold">
                Let&apos;s See Some Reviews
              </h2>
              <h1 className="text-primary text-4xl font-semibold">
                What Our Client Say
              </h1>
              <div className="flex flex-col gap-3 py-10 bg-[rgba(67,_133,_245,_0.05)] rounded-3xl px-11">
                <h1 className="text-[#333] text-xl font-semibold">
                  &#183; Best{" "}
                  <span className="text-primary">
                    Website Designing Company
                  </span>{" "}
                  In Siliguri
                </h1>
                <p className="text-base text-secondary max-w-[77ch]">
                  Choosing Reboot Marketing Pvt. Ltd. for our website redesign
                  was a fantastic decision. Their team crafted a visually
                  striking and highly functional website that aligns perfectly
                  with our brand&apos;s identity. They impressed us with their
                  creative approach, attention to detail, and commitment to
                  understanding our needs. The result is a site that&apos;s not
                  only aesthetically pleasing but also user-friendly and
                  responsive across all devices. We&apos;ve experienced a
                  noticeable increase in engagement and traffic. Their ongoing
                  support and expertise make them the top choice in Siliguri.
                  Highly recommended!
                </p>
                <h4 className="font-medium text-base text-primary">
                  ---- Mohna Rani
                </h4>
                <div>
                  <div className="text-[#FFB800] text-2xl flex gap-1">
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdStarRate />
                    <MdOutlineStarBorder />
                    <span className="text-base text-[#777] ps-1">
                      &#40;4.3&#41; 512 Reviews
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
