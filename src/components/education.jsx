import { Container } from "@/utils/globals";
import { HStack, Text, VStack } from "@chakra-ui/react";
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
    <VStack color="white" id="education" py={[5, 5, 9, 9]} w="100%">
      <VStack w={Container} alignItems="flex-start" px={[6, 7, 3, 0]}>
        <Text
          fontWeight={700}
          fontFamily="'nokia'"
          fontSize={["lg", "lg", "2xl", "2xl"]}
        >
          Education and Training
        </Text>

        <VStack py={[6, 6, 9, 9]} alignItems="flex-start">
          {DATA?.map((el, idx) => (
            <VStack key={el.name} alignItems="flex-start" spacing={0}>
              <Text opacity={0.7} fontStyle="italic" fontSize={["sm"]}>
                {el.period}
              </Text>
              <Link href={el.url} target="_blank">
                <Text fontWeight={700} fontSize={["md", "md", "xl", "xl"]}>
                  {el.name}
                </Text>
              </Link>

              <Text  opacity={0.5} pt={[1]}>{el.description}</Text>
            </VStack>
          ))}

          <VStack spacing={0} alignItems="flex-start" pt={3}>
            <Text fontSize={["xs"]} opacity={0.5}>
              {" "}
              11 Feb 2023
            </Text>
            <HStack
              flexDir={["column", "column", "row", "row"]}
              alignItems={["flex-start", "flex-start", "center", "center"]}
              spacing={[0, 0, 3, 3]}
            >
              <Text fontWeight={700}>IELTS - 6.0 band </Text>
              <Text fontSize={["sm"]} fontStyle="italic">
                International English Language Testing System
              </Text>
            </HStack>
            <Text fontSize={["sm"]} opacity={0.5}>
              Listening - 6.0, Reading - 6.0, Writing - 6.0, Speaking - 6.0
            </Text>
          </VStack>

          <VStack spacing={0} alignItems="flex-start" pt={3}>
            <Text fontSize={["xs"]} opacity={0.5}>
              {" "}
               Aug 2024
            </Text>
            <HStack
              flexDir={["column", "column", "row", "row"]}
              alignItems={["flex-start", "flex-start", "center", "center"]}
              spacing={[0, 0, 3, 3]}
            >
              <Text fontWeight={700}>META Front-End developer  </Text>
              {/* <Text fontSize={["sm"]} fontStyle="italic">
                by Coursera
              </Text> */}
            </HStack>
            <Text fontSize={["sm"]} opacity={0.5}>
            by Coursera
            </Text>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
