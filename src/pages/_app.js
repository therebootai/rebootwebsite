import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { Jost } from "next/font/google";

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
    </>
  );
}
