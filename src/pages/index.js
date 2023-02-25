import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { VStack } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { Container } from "@/utils/globals";
import { Intro } from "@/components/intro";
import localFont from "@next/font/local";
import { Experience } from "@/components/experience";
import { AboutMe } from "@/components/aboutme";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

const SEO = {
  title: "Delgersaikhan Altanzul",
  desc: "The presentation website of Delgersaikhan Altanzul, an ordinary software engineer from Mongolia.",
  img: "https://firebasestorage.googleapis.com/v0/b/delgersaikhan-75641.appspot.com/o/Subject%202.png?alt=media&token=704a9b73-8492-4ff9-aa9f-c97a5691a8b1",
};

export default function Home() {
  return (
    <VStack minH="100vh" spacing={0} bg="#040b1d">
      <Header />
      <Head>
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.desc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        <meta itemprop="name" content={SEO.title} />
        <meta itemprop="description" content={SEO.desc} />
        <meta itemprop="image" content={SEO.img} />
        {/* For facebook */}

        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.desc} />
        <meta property="og:image" content={SEO.img} />

        {/* For twitter */}
        <meta name="twitter:description" content={SEO.desc} />
        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:image" content={SEO.img} />
      </Head>
      <Intro />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </VStack>
  );
}
