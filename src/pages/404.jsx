import SubPageBanner from "@/components/SubPageBanner";
import Head from "next/head";
import React from "react";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>RebootAi | Page Not Found</title>
      </Head>
      <SubPageBanner heading={"404 Page Not Found"} />
    </>
  );
};

export default Custom404;
