import { Container } from "@/utils/globals";
import { Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

const DATA = [
  {
    name: "National University of Mongolia",
    url: "https://www.num.edu.mn/en/",
    period: "Sep 2018 - Jun 2022",
    description: "Bachelor degree in Software Engineer",
  },
];

export const Education = () => {
  return (
    <VStack minH="50vh" color="white" id="education" py={[5, 5, 9, 9]} w="100%">
      <VStack w={Container} alignItems="flex-start">
        <Text
          fontWeight={700}
          fontFamily="'nokia'"
          fontSize={["lg", "lg", "2xl", "2xl"]}
        >
          Education
        </Text>

        <VStack py={[6, 6, 9, 9]}>
          {DATA?.map((el, idx) => (
            <VStack key={el.name} alignItems="flex-start" spacing={0}>
              <Link href={el.url} target="_blank">
                <Text fontWeight={700} fontSize={["md", "md", "xl", "xl"]}>
                  {el.name}
                </Text>
              </Link>
              <Text opacity={0.7} fontStyle="italic">
                {el.period}
              </Text>
              <Text pt={[2, 2, 4, 4]}>{el.description}</Text>
            </VStack>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};
