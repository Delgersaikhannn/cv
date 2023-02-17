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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <VStack minH="100vh" spacing={0} bg="#040b1d">
      <Header />
      <Head>
        <title>Delgersaikhan Altanzul</title>
        <meta
          name="description"
          content="The presentation website of Delgersaikhan Altanzul, a software engineer from Mongolia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Intro />
      <AboutMe />
      <Education />
      <Experience />
      <Projects />
    </VStack>
  );
}
