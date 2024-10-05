import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Jost } from "next/font/google";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/Footer";

const jost = Jost({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${jost.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
