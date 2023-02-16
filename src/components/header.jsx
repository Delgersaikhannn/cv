import { Container } from "@/utils/globals";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import { IoMenu } from "react-icons/io5";

const Menus = ["About", "Education", "Experience", "Projects"];

export const Header = () => {
  const { scrollYProgress } = useScroll();

  return (
    <VStack w="100%" spacing={0} zIndex={1} fontFamily="'nokia'">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      />

      <HStack w="100%" pos="fixed" top={0} zIndex={1}>
        <HStack
          w={Container}
          py={[4, 4, 9, 9]}
          mx="auto"
          justifyContent="flex-end"
          fontWeight={700}
          color="white"
          px={[5, 5, 0, 0]}
        >
          {/* <Text>Delgersaikhan </Text> */}
          <HStack
            spacing={[3, 3, 4, 4]}
            display={["none", "none", "flex", "flex"]}
          >
            {Menus?.map((el, idx) => (
              <Text
                key={el}
                cursor="pointer"
                opacity={0.5}
                _hover={{ opacity: 1 }}
              >
                {el}
              </Text>
            ))}
          </HStack>
          <Box display={["flex", "flex", "none", "none"]}>
            <IoMenu size="24px" />
          </Box>
        </HStack>
      </HStack>
    </VStack>
  );
};
