import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Welcome to Reboot AI Pvt Ltd - Top Web, App Development Company
        </title>
        <meta
          name="description"
          content="IT Solutions for the Future, Most Trusted Startups for Web, Apps & Performance Marketing Services."
        />

        <link rel="preload" as="video" href="/videos/header-cover.mp4" />
        <link rel="preload" as="image" href="/images/subbannerbg.webp" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
