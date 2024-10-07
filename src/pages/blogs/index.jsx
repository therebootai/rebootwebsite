import BlogCards from "@/components/BlogCards";
import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import React from "react";

export async function getStaticProps() {
  const pageData = [
    {
      img: "/images/blog-cover.png",
      createdAt: "29 Aug",
      category: "Business Category",
      commnets: "12",
      viewsCount: "132",
      heading: "Five Way That can Develop Your Business Website",
      description:
        "Lorem ipsum dolor sit amet consectetur. In vestibulum vel urna quis sed dui cras a. Nunc sed est et diam sed. Lobortis risus nulla id sit vulputate tortor aliquam egestas. Est turpis lectus.",
      postedBy: "Sourav R",
    },
    {
      img: "/images/blog-cover.png",
      createdAt: "29 Aug",
      category: "Business Category",
      commnets: "12",
      viewsCount: "132",
      heading: "Five Way That can Develop Your Business Website",
      description:
        "Lorem ipsum dolor sit amet consectetur. In vestibulum vel urna quis sed dui cras a. Nunc sed est et diam sed. Lobortis risus nulla id sit vulputate tortor aliquam egestas. Est turpis lectus.",
      postedBy: "Achinta C",
    },
    {
      img: "/images/blog-cover.png",
      createdAt: "29 Aug",
      category: "Business Category",
      commnets: "12",
      viewsCount: "132",
      heading: "Five Way That can Develop Your Business Website",
      description:
        "Lorem ipsum dolor sit amet consectetur. In vestibulum vel urna quis sed dui cras a. Nunc sed est et diam sed. Lobortis risus nulla id sit vulputate tortor aliquam egestas. Est turpis lectus.",
      postedBy: "Chirag J",
    },
  ];
  return { props: { pageData } };
}

export default function Blogs({ pageData }) {
  return (
    <>
      <Head>
        <title>ReBoot AI | Our Blogs</title>
      </Head>
      <SubPageBanner heading={"Our Blogs"} />
      <main className="px-8 md:px-12 xlg:px-16 xl:px-20 py-11 flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-stretch gap-6">
          {pageData.map((blog, index) => (
            <BlogCards blog={blog} key={index} />
          ))}
        </div>
        <div className="self-center flex gap-4">
          <button type="button" className="text-xl font-medium text-primary">
            &lt;&lt; Prev
          </button>
          <div className="flex gap-4 items-center">
            <span className="text-primary font-medium text-xl px-3 py-2 rounded-full bg-[rgba(67,133,245,0.10)]">
              01
            </span>
            <span className="text-primary font-medium text-xl px-3 py-2 rounded-full bg-[rgba(67,133,245,0.10)]">
              02
            </span>
            <span className="bg-primary font-medium text-xl px-3 py-2 rounded-full text-white">
              03
            </span>
            <span className="text-primary font-medium text-xl px-3 py-2 rounded-full bg-[rgba(67,133,245,0.10)]">
              04
            </span>
            <span className="text-primary font-medium text-xl px-3 py-2 rounded-full bg-[rgba(67,133,245,0.10)]">
              05
            </span>
          </div>
          <button type="button" className="text-xl font-medium text-primary">
            Next &gt;&gt;
          </button>
        </div>
      </main>
    </>
  );
}
