import { Container } from "@/utils/globals";
import { Text, VStack } from "@chakra-ui/react";

export const Experience = () => {
  return (
    <VStack
      minH="100vh"
      color="white"
      id="experience"
      py={[5, 5, 9, 9]}
      w="100%"
    >
      <VStack w={Container} alignItems="flex-start">
        <Text fontWeight={700} fontFamily="'nokia'">
          Experience
        </Text>
      </VStack>
    </VStack>
  );
};
