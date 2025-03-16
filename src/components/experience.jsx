import { Container } from "@/utils/globals";
import { Text, VStack } from "@chakra-ui/react";

const DATA = [
  {
    title: "Front-end developer, Infinite Solutions LLC, Mongolia",
    description:
      "My first work experience in the industry started here. However, I was studying at the University, and I made a deal to work full and fixed-time at the company. I learned how to use academic knowledge of computer science in the industry while I am experiencing my very first projects of mine in a team or work schedule. Acknowledged web development including the front-end, the back-end, the REST API, and many more with a great understanding of project management, and version control (git, bitbucket). During that period, I experienced more about Javascript, HTML, CSS/Sass, and PHP.",
    date: "Jul 2020 - Jan 2022",
  },
  {
    title: "Software engineer, Tomujin Digital LLC, Mongolia",
    description:
      "After the first work experience, I wanted to do projects with my friends in a start-up-sized company that is a business in the education industry. I am experienced with marketing, and management and led projects. Learned fundamentals of mobile development on Flutter and taught about the development to students of the Tomujin Academy.",
    date: "Jan 2022 - Aug 2022",
  },
  {
    title: "Full-stack developer, Infinite Solutions LLC, Mongolia",
    description:
      "Finally, I got back to my previous work with a new experience. As a full-stack developer, I wrote the server-side codings and did the DevOps tasks such as planning, coding, and testing. Then, I learned about how to write a smart contract with standards including the ERC-20, ERC-720, and ERC-1155 on Solidity.",
    date: "Aug 2022 - Aug 2024",
  },
  {
    title: "Web3 Developer, Freelance",
    description:
      "Starting as a Freelancer developer, I am unlocking new opportunities with every project I was working and expanding my networking. Fully focusing on new tech or creative solutions on Web3 industry.",
    date: "Aug 2024 - present",
  },
];

export const Experience = () => {
  return (
    <VStack color="white" id="experience" py={[5, 5, 9, 9]} w="100%">
      <VStack
        w={Container}
        alignItems="flex-start"
        spacing={[5, 5, 9, 10]}
        px={[6, 7, 3, 0]}
      >
        <Text
          fontWeight={700}
          fontFamily="'nokia'"
          fontSize={["lg", "lg", "2xl", "2xl"]}
        >
          Experience
        </Text>

        <VStack spacing={[6, 6, 9, 12]}>
          {DATA?.map((el, idx) => (
            <VStack key={el.title} spacing={0} alignItems="flex-start" w="100%">
              <Text fontWeight={300} fontSize={["2xs", "2xs", "xs", "xs"]}>
                {el.date}
              </Text>
              <Text fontSize={["md", "md", "lg", "xl"]} fontWeight={700}>
                {el.title}
              </Text>
              <Text
                pt={[2, 2, 3, 3]}
                textAlign="justify"
                fontSize={["sm", "sm", "md", "md"]}
              >
                {" "}
                {el.description}
              </Text>
            </VStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};
