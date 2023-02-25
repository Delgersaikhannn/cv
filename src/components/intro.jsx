import { Box, Center, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const Intro = () => {
  const scrollDown = () => {
    window.scrollTo(0, window.innerHeight);
  };
  return (
    <Center
      minH="100vh"
      bg="url(https://firebasestorage.googleapis.com/v0/b/delgersaikhan-75641.appspot.com/o/bg.gif?alt=media&token=6d101f9f-53b8-4d63-90f7-2c11da146509)"
      w="100%"
      pos="relative"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      backgroundAttachment={["none", "none", "fixed", "fixed"]}
    >
      <VStack
        pos="absolute"
        h="100%"
        w="100%"
        bg="linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.3))"
        top="0"
        left="0"
        color="white"
        justifyContent="center"
      >
        <motion.div
          transition={{
            type: "spring",
            damping: 3,
          }}
          style={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <VStack fontFamily="'nokia'">
            <Text
              fontSize={["30px", "40px", "55px", "65px", "70px"]}
              textAlign="center"
              fontWeight={700}
              textShadow={[
                "0 0 5px #fff, 0 0 10px #ff4da6, 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6",
                "0 0 10px #fff, 0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6, 0 0 45px #ff4da6",
              ]}
            >
              Delgersaikhan Altanzul
            </Text>
            <Text fontSize={["md", "md", "lg", "lg"]}>Software engineer</Text>
          </VStack>
        </motion.div>

        <Box onClick={scrollDown} cursor="pointer">
          <div class="scroll-downs">
            <div class="mousey">
              <div class="scroller"></div>
            </div>
          </div>
        </Box>
      </VStack>
    </Center>
  );
};
