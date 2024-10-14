import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { GoHome } from "react-icons/go";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>RebootAi | Page Not Found</title>
      </Head>
      <SubPageBanner heading={"404 Page Not Found"} />
      <main className="px-8 md:px-12 xlg:px-16 xl:px-20 py-11 flex flex-col gap-16">
        <Image
          src="/icons/404.svg"
          alt="not-found"
          width={398}
          height={339}
          className="max-w-[27.6vmax] self-center"
        />
        <div className="mt-14">
          <h1 className="text-center text-3xl font-semibold text-primary">
            Sorry! I think you broke the path.
          </h1>
          <h3 className="text-xl text-center text-[#bbb]">
            Please enter the topic which you are looking for
          </h3>
        </div>
        <div className="px-6 py-3 xlg:py-5 flex justify-between rounded-full border border-[#ccc] self-center">
          <input
            type="text"
            placeholder="Enter the keyword..."
            className="outline-none bg-transparent placeholder:text-[#ccc] text-[#ccc] text-lg font-medium placeholder:text-lg placeholder:font-medium min-w-[41vmax]"
          />
          <button
            type="button"
            className="text-xl xlg:text-3xl text-white bg-[#0061FF] rounded-full p-3"
          >
            <FaSearch />
          </button>
        </div>
        <Link
          href="/"
          className="inline-flex py-2 px-4 items-center justify-end self-center bg-[#0061FF] text-base text-center text-white gap-2 rounded"
        >
          <GoHome />
          <span>Go Back to Home Page</span>
        </Link>
      </main>
    </>
  );
};

export default Custom404;
