import { HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export const Footer = () => {
  return (
    <VStack
      w="100%"
      bg="black"
      color="white"
      py={[6, 6, 6, 6]}
      spacing={1}
      px={[6, 7, 3, 0]}
    >
      <Text
        fontFamily="'nokia'"
        fontSize={["md", "md", "lg", "lg"]}
        textAlign="center"
      >
        Thank you for exploring me this far!
      </Text>
      <HStack
        fontSize={["sm", "sm", "sm", "sm"]}
        spacing={1}
        flexWrap="wrap"
        justifyContent="center"
      >
        <Text>If you want to contact me, go to</Text>
        <Link href="#about">
          <Text textDecor="underline">about</Text>
        </Link>
        <Text>section.</Text>
      </HStack>
    </VStack>
  );
};
