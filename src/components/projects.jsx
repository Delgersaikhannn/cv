import { Container } from "@/utils/globals";
import { HStack, SimpleGrid, Tag, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

const TECHS = {
  js: {
    color: "yellow",
    tag: "JS",
  },
  css: {
    color: "#4287f5",
    tag: "CSS",
  },
  html: {
    color: "#f25613",
    tag: "HTML",
  },
  react: {
    color: "#1a6bed",
    tag: "React JS",
  },
  flutter: {
    color: "#58e1ed",
    tag: "Flutter",
  },
  mongodb: {
    color: "#1b9425",
    tag: "MongoDB",
  },
  sql: {
    color: "pink",
    tag: "SQL",
  },
  next: {
    color: "white",
    tag: "Next JS",
  },
  sol: {
    color: "#d4d4cf",
    tag: "Solidity",
  },
  php: {
    color: "#6913f2",
    tag: "PHP",
  },
};

const DATA = [
  {
    title: "MLS-Tax",
    description:
      "Property sales and management web system. As a front-end developer on a team, I developed the user interface as same as it has to be. Learned a good understanding of React JS and improved my skills in HTML and CSS.",
    date: "Aug 2020 - Oct 2020",
    link: "https://www.crsdata.com/",
    techs: ["js", "html", "css"],
  },
  {
    title: "Shuffle",
    description:
      "A web platform for digital business cards. Developed the front-end logic and user interface with the React JS and PHP library named Symfony. This project gave me a practical experience with massive code structure and the basics of DevOps such as different types of project environment and web hosting.",
    date: "Sep 2020 - Feb 2021",
    link: "https://www.elifyshuffle.com/",
    techs: ["js", "html", "css", "php", "react", "sql"],
  },
  {
    title: "Complex",
    description:
      "The crypto exchange platform with numerous a variety of digital assets. Mainly focused on front-end development and experienced with socket connection, and complex state management on React JS. ",
    date: "Mar 2021 - Jul 2021",
    link: "https://complex.mn/",
    techs: ["js", "react"],
  },
  {
    title: "Tenmanga",
    description:
      "Despite the company-related projects, I made a manga reading platform with my friends. This project taught me development and business relation in a real marketplace. Experienced with content management, data security, and server-side-rendering with Next JS during this project.",
    date: "Jan 2020 - Jun 2022",
    link: "",
    techs: ["react", "css", "html", "mongodb", "flutter"],
  },
  {
    title: "VSign",
    description:
      "A digital signing web platform from Finland. My role in this project was building a complex, drag-drop user interface and a middleware server to the back end. I acquired knowledge of Docker from the project and I still maintaining this project and making the updates.",
    date: "May 2021 - present",
    link: "https://vsign.mn/",
    techs: ["js", "html", "css", "php", "react", "sql"],
  },
  {
    title: "NFT.mn",
    description:
      "An NFT marketplace with various artists. As a front-end lead developer, this project challenged me with complex project management, understanding of blockchain, and stress testing. Tried out different project management structures during the project.",
    date: "Jan 2022 - Jul 2022",
    link: "https://nft.mn/",
    techs: ["react", "flutter", "js"],
  },
  {
    title: "Flappy Wolf",
    description:
      "Web-based, off-chain game. Learned about game management, unity program, and request encoding with different algorithms. Mastered with Vite and React JS.",
    date: "Oct 2022 - Dec 2022",
    link: "https://game.mongolnft.com/",
    techs: ["js", "html", "react"],
  },
  {
    title: "Exam system",
    description:
      "In terms of my bachelor thesis, I built a web-based exam system with a variety of exam types. From its development, I learned about how to write good documentation of software products and test in different versions.",
    date: "Sep 2021 - Apr 2022",
    link: "",
    techs: ["next", "react", "css", "mongodb"],
  },
  {
    title: "Feast",
    description:
      "DAO (Decentralized Autonomous Organization) web3 d-app based on collect and gain model. I am experiencing knowledge about blockchain and its standards with the implementation of front-end applications.",
    date: "Dec 2022 - present",
    link: "https://feast.thewolves.io/",
    techs: ["js", "next", "react", "mongodb", "sol"],
  },
];

export const Projects = () => {
  return (
    <VStack minH="100vh" color="white" id="projects" py={[5, 5, 9, 9]} w="100%">
      <VStack w={Container} alignItems="flex-start" px={[6, 7, 3, 0]}>
        <Text
          fontWeight={700}
          fontFamily="'nokia'"
          fontSize={["lg", "lg", "2xl", "2xl"]}
        >
          Projects
        </Text>

        <SimpleGrid
          columns={[1, 1, 2, 2]}
          spacing={[5, 5, 6, 9]}
          py={[5, 5, 6, 6]}
        >
          {DATA?.map((el, idx) => (
            <VStack key={el.title} alignItems="flex-start" spacing={0}>
              <Text fontSize={["2xs", "2xs", "xs", "xs"]} opacity={0.5}>
                {el.date}
              </Text>
              {el.link.length > 0 ? (
                <Link href={el.link} target="_blank">
                  <HStack>
                    <Text fontSize={["md", "md", "lg", "xl"]} fontWeight={700}>
                      {el.title}
                    </Text>
                    <BiLinkExternal />
                  </HStack>
                </Link>
              ) : (
                <Text fontSize={["md", "md", "lg", "xl"]} fontWeight={700}>
                  {el.title}
                </Text>
              )}

              <Text
                pt={[2, 2, 3, 3]}
                textAlign="justify"
                fontSize={["sm", "sm", "md", "md"]}
              >
                {" "}
                {el.description}
              </Text>
              <HStack pt={2}>
                {el.techs?.map((e, i) => (
                  <Tag
                    color={TECHS[e].color}
                    key={el.title + e}
                    variant="outline"
                    size="sm"
                    boxShadow={`inset 0 0 0px 1px ${TECHS[e].color}`}
                  >
                    {" "}
                    {TECHS[e].tag}
                  </Tag>
                ))}
              </HStack>
            </VStack>
          ))}
        </SimpleGrid>
      </VStack>
    </VStack>
  );
};
