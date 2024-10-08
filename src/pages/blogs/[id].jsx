import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import React from "react";

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
      <main></main>
    </>
  );
};

export default BlogDetails;
