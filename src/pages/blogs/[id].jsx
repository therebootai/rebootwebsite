import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>RebootAi | Blog Details</title>
      </Head>
      <SubPageBanner
        heading={"Our Blogs"}
        subheading={"Five Way That can Develop Your Business Website"}
      />
      <main className="px-8 md:px-12 xlg:px-16 xl:px-20 py-11 flex flex-col gap-16">
        <div className="flex gap-6">
          <div className="flex flex-col gap-9">
            <Image
              src="/images/blog-cover.png"
              alt="blog-cover"
              width={2400}
              height={1600}
              className="lg:max-w-[60vmax] rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-medium text-[#333] max-w-[30ch]">
                Five Way That can Develop Your Business Website
              </h1>
              <p className="text-[#555] font-medium text-base">
                Lorem ipsum dolor sit amet consectetur. Quam arcu velit
                elementum netus fermentum. Volutpat tellus convallis elit
                interdum tortor pellentesque id. Sit scelerisque arcu est
                ultrices quis integer phasellus. Fames amet sed tincidunt enim.
                Sit adipiscing volutpat et blandit nunc augue magna. Mauris
                tellus porttitor auctor massa nulla dui enim. Mauris morbi
                integer a aliquet commodo et magna egestas. Adipiscing in
                facilisis turpis dapibus sit. <br /> Sed turpis in ac dolor
                proin nulla vitae lacinia tristique. Nulla in blandit cras
                molestie massa. Cras at cras eu ornare fames. Ut aliquet nec
                commodo fermentum dignissim etiam purus faucibus. Varius vivamus
                sapien euismod non pulvinar mollis suscipit. Massa id ut sed
                malesuada ac id. Quis orci eleifend quis volutpat neque
                vestibulum. Congue quis lectus nec et ut felis adipiscing
                sagittis aliquam. Consequat et sit tempor lorem proin
                ullamcorper gravida mi id. Nullam eros vitae mauris pellentesque
                integer porttitor. <br />
                Tincidunt volutpat ultricies integer tellus. Convallis elementum
                nisl egestas arcu nibh etiam nunc tortor. Egestas in posuere vel
                orci proin lobortis. Donec purus vitae amet at ut in nunc amet.
                Pulvinar egestas diam sed egestas etiam nisl cursus nisi
                placerat. Diam non aliquam sagittis sagittis tortor. Ut duis
                odio ullamcorper tellus volutpat. Tempor vel cursus sagittis
                quam arcu sapien. Purus elementum sagittis viverra massa quis.
                Sit fames ultricies dui amet sit arcu eu a. Quis et nunc in ac
                consectetur amet. Platea enim nec viverra eros dictum parturient
                a. Sit fermentum arcu cras velit sollicitudin vulputate. Nisi
                tortor porta et sit urna pretium enim a. Eu dui blandit
                porttitor tempor integer. <br /> Venenatis morbi mauris at
                gravida elit porttitor laoreet. Risus pellentesque tellus
                hendrerit risus neque. Tempor tincidunt vestibulum proin amet
                purus faucibus diam tellus neque. Elementum volutpat mattis nibh
                morbi varius sit quis nam. Arcu ullamcorper quam luctus aliquam
                quis mi. Non volutpat viverra porttitor in amet ut non sed
                habitant. Eu netus nibh volutpat mi bibendum mauris eget.
                Malesuada feugiat velit nec mattis fames ligula at. Et dolor
                quam duis est porta maecenas cras sagittis senectus. Dictumst
                habitasse urna mauris scelerisque accumsan risus. <br /> Aliquam
                nulla amet imperdiet vitae ornare lectus a eget. Elementum
                potenti mi proin sit sollicitudin tortor. Egestas sed. <br />
              </p>
              <ol className="text-[#555] font-medium text-base list-decimal ps-4">
                <li>
                  Lorem ipsum dolor sit amet consectetur. Quam arcu velit
                  elementum netus fermentum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Quam arcu velit
                  elementum netus fermentum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Quam arcu velit
                  elementum netus fermentum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Quam arcu velit
                  elementum netus fermentum.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur. Quam arcu velit
                  elementum netus fermentum.
                </li>
              </ol>
            </div>
            <div className="border-t border-b py-6 border-[#ccc] flex justify-between">
              <div className="flex gap-3">
                <h3 className="text-[#555] font-medium text-xl">Tags</h3>
                <h3 className="text-primary font-medium text-sm px-2 bg-primary/10 flex items-center justify-center">
                  Marketing
                </h3>
                <h3 className="text-primary font-medium text-sm px-2 bg-primary/10 flex items-center justify-center">
                  Business
                </h3>
                <h3 className="text-primary font-medium text-sm px-2 bg-primary/10 flex items-center justify-center">
                  Corporate
                </h3>
              </div>
              <div className="flex gap-3">
                <h3 className="text-[#555] font-medium text-xl">Share With</h3>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-white font-medium text-base p-2 bg-[#0061FF] inline-flex items-center justify-center rounded-full"
                >
                  <CiYoutube />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-white font-medium text-base p-2 bg-[#0061FF] inline-flex items-center justify-center rounded-full"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-white font-medium text-base p-2 bg-[#0061FF] inline-flex items-center justify-center rounded-full"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-white font-medium text-base p-2 bg-[#0061FF] inline-flex items-center justify-center rounded-full"
                >
                  <FaFacebookF />
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex flex-col gap-6">
            <div className="px-10 py-6 flex justify-between bg-[#0061FF] rounded">
              <input
                type="text"
                placeholder="Search Here..."
                className="outline-none bg-transparent placeholder:text-white text-white text-lg font-medium placeholder:text-lg placeholder:font-medium"
              />
              <button type="button" className="text-3xl text-white">
                <FaSearch />
              </button>
            </div>
            <div className="bg-black/5 rounded py-5 px-6 flex flex-col gap-5 min-w-[22vmax]">
              <h2 className="text-xl font-medium text-[#333]">
                Latest Post/Blogs
              </h2>
              <div className="flex gap-3">
                <Image
                  src="/images/blog-cover.png"
                  alt="blog-cover"
                  width={2400}
                  height={1600}
                  className="size-[5vmax] rounded object-cover"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg font-medium text-[#555]">
                    You should know about business plan..
                  </h2>
                  <div className="text-base text-[#555] flex items-center gap-1">
                    <LuCalendarClock />
                    <span>29 August 2024</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-black/5 rounded py-5 px-6 flex flex-col gap-5 min-w-[22vmax]">
              <h2 className="text-xl font-medium text-[#333]">Category</h2>
              <div className="text-white text-xl font-medium bg-[#0061FF] rounded px-7 py-5">
                Business
              </div>
              <div className="text-[#555] text-xl font-medium bg-[#FFF] border border-[#ccc] rounded px-7 py-5">
                Digital Marketing
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-6 flex-col-reverse xlg:flex-row">
          <div className="flex flex-col gap-10">
            <div className="flex gap-5">
              <h1 className="text-4xl text-[#333] font-medium">12 Comment |</h1>
              <div className="inline-flex px-2 py-0.5 bg-[#eaeaea] items-center justify-center rounded text-sm font-medium">
                Most Recent
              </div>
              <div className="inline-flex px-2 py-0.5 bg-[#eaeaea] items-center justify-center rounded text-sm font-medium">
                Highlight
              </div>
            </div>
            <div className="flex items-center border-b border-[#ccc] py-9 gap-9">
              <Image
                src="/comment-avatar.png"
                alt="pro-pic"
                width={500}
                height={625}
                className="size-[8vmax] rounded-full object-cover"
              />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <h1 className="text-xl font-medium text-[#555]">
                    Md. Rahim Khandakar
                  </h1>
                  <button
                    type="button"
                    className="text-sm font-medium inline-flex py-0.5 px-3 bg-primary/10 items-center justify-center text-primary"
                  >
                    Replay
                  </button>
                </div>
                <p className="text-[#555] font-medium text-base">
                  Lorem ipsum dolor sit amet consectetur. Viverra eu ultricies
                  sodales senectus. Libero dolor pretium tortor vestibulum
                  semper aliquam viverra. Ultrices ullamcorper imperdiet sit
                  varius ornare lorem. Eleifend pretium sit justo adipiscing
                  cras risus magna donec at.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 min-w-[22vmax]">
            <h2 className="text-xl font-medium text-[#333]">Leave a Comment</h2>
            <div className="flex flex-col bg-black/5 rounded gap-4 py-5 px-6 ">
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="name"
                  className="text-[#555] text-base font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-[#ccc] rounded outline-none text-lg font-medium px-8 py-4"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="email"
                  className="text-[#555] text-base font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-[#ccc] rounded outline-none text-lg font-medium px-8 py-4"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="message"
                  className="text-[#555] text-base font-medium"
                >
                  Message
                </label>
                <textarea
                  className="border border-[#ccc] rounded outline-none text-lg font-medium px-8 py-4 resize-none min-h-32"
                  id="message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-base font-medium capitalize text-white px-10 bg-primary rounded py-2 self-center"
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogDetails;
