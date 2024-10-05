import Image from "next/image";
import React from "react";

const QueryForm = () => {
  return (
    <div className="flex flex-col bg-[rgba(67,_133,_245,_0.05)] rounded-lg px-8 min-w-[30rem] xl:min-w-[40rem] flex-1 py-5">
      <Image
        src="/icons/query-icon.png"
        alt="query icon"
        width={154}
        height={117}
        className="size-[5.45vmax] object-contain self-center"
      />

      <form
        action=""
        className="flex flex-col gap-5 py-1 justify-between flex-1"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="capitalize text-xl text-[#333]">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-9 py-4 xl:py-8 text-xl text-[rgba(51,51,51,0.25)]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="mobile" className="capitalize text-xl text-[#333]">
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobile"
            className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-9 py-4 xl:py-8 text-xl text-[rgba(51,51,51,0.25)]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="capitalize text-xl text-[#333]">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-9 py-4 xl:py-8 text-xl text-[rgba(51,51,51,0.25)]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="support" className="capitalize text-xl text-[#333]">
            Support For
          </label>
          <select
            name=""
            id="support"
            className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-9 py-4 xl:py-8 text-xl text-[rgba(51,51,51,0.25)]"
          >
            <option value="App Development">App Development</option>
            <option value="Web Development">Web Development</option>
            <option value="SAAS">SAAS</option>
            <option value="Branding">Branding</option>
            <option value="Marketing">Marketing</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="capitalize text-xl text-[#333]">
            Messages
          </label>
          <input
            type="email"
            id="email"
            className="border border-[rgba(67,_133,_245,_0.30)] rounded-lg bg-white outline-none px-9 py-4 xl:py-8 text-xl text-[rgba(51,51,51,0.25)]"
          />
        </div>
        <button
          type="button"
          className={` text-white text-2xl font-semibold bg-primary py-5 xl:py-7 text-center rounded-lg`}
        >
          Send Query
        </button>
      </form>
    </div>
  );
};

export default QueryForm;
