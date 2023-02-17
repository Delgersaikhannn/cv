import { Container } from "@/utils/globals";
import {
  AspectRatio,
  Avatar,
  Center,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const AvatarBadge = () => {
  const [change, setChange] = useState(false);

  const toggle = () => setChange(!change);

  if (change)
    return (
      <Avatar
        src="/layout/profile.png"
        w="100%"
        onClick={toggle}
        cursor="pointer"
      />
    );
  return (
    <Avatar
      src="/layout/Delgersaikhan.png"
      w="100%"
      boxShadow="  0 0 30px 0px #7f30cb; "
      onClick={toggle}
      cursor="pointer"
    />
  );
};

export const AboutMe = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  console.log(inView);
  return (
    <Center minH="100vh" color="white" id="about" py={[5, 5, 9, 16]} w="100%">
      <VStack w={Container} alignItems="flex-start" ref={ref} h="100%">
        <Text
          fontWeight={700}
          fontFamily="'nokia'"
          opacity={inView ? 1 : 0}
          transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55)"
          transform={inView ? "none" : "translateX(-200px)"}
          fontSize={["lg", "lg", "2xl", "2xl"]}
        >
          About me
        </Text>
        <HStack
          w="100%"
          spacing={[0, 0, 9, 12]}
          flexGrow={1}
          alignItems="center"
        >
          <VStack flex={1}>
            <AspectRatio w="100%" ratio={1}>
              <AvatarBadge />
            </AspectRatio>
            <Text fontSize={["2xs", "2xs", "xs", "xs"]} opacity={0.5} pt={2}>
              Click to change!
            </Text>
          </VStack>
          <VStack
            flex={[1, 1, 3, 3]}
            alignItems={["center", "center", "flex-start", "flex-start"]}
          >
            <Text
              fontSize={["lg", "lg", "2xl", "2xl"]}
              textAlign="center"
              fontWeight={600}
            >
              Delgersaikhan Altanzul
            </Text>
            <VStack textAlign="justify" alignItems="flex-start">
              <Text>
                Hello, nice to meet you. I am a software engineer who is
                motivated to do creative things.
              </Text>
              <Text>
                As a creative developer, i always searches an unique solution in
                every obstacles. I am currently working on the web3 dapps.
              </Text>
              <Text>
                Besides from that, I am really passionate to make an digital or
                traditional arts.
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Center>
  );
};
