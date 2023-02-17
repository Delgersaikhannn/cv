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
            <VStack textAlign="justify">
              <Text>
                Hi there. It's a pleasure to meet you. I am a Software
                Engineering student cum laude from the National University of
                Mongolia.
              </Text>
              <Text>
                Since childhood, I have always been interested in technology. I
                work at a fintech company as a software engineer on different
                projects implementing the R&A approach. As a technology
                enthusiast, I enjoy experimenting with different technologies
                and frameworks to see changes and capabilities. Recently, I have
                been working on a project, some parts of which need to operate
                in parallel.
              </Text>
              <Text>
                Although using an open-source framework is the easiest way to
                solve this, I decided to discover this in depth through the
                lessons available on the internet. Apart from that, I am keen on
                swimming, yoga, acrylic painting, and playing piano. If you want
                to know more about me, click the arrow below!
              </Text>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Center>
  );
};
