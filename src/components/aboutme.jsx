import { Container } from "@/utils/globals";
import {
  AspectRatio,
  Avatar,
  Box,
  Center,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { BsFileEarmarkTextFill, BsTelephone } from "react-icons/bs";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const DATA = [
  {
    label: "+976 88981797",
    icon: <BsTelephone />,
    href: "tel:+976 88981797",
  },
  {
    label: "+976 90115326",
    icon: <BsTelephone />,
    href: "tel:+976 90115326",
  },
  {
    label: "delgersaikhan.alt@gmail.com",
    icon: <HiOutlineMail />,
    href: "mailto:delgersaikhan.alt@gmail.com",
  },
  {
    label: "20-205, Unur khoroolol, Ulaanbaatar, Mongolia",
    icon: <HiOutlineLocationMarker />,
    href: "https://goo.gl/maps/hsk1AMZn5EC3o2Jd7",
  },
];

const Socials = [
  {
    icon: <FaGithub />,
    href: "https://github.com/Delgersaikhannn",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/delgersaikhan/",
  },
  {
    icon: <FaFacebookSquare />,
    href: "facebook.com/profile.php?id=100005765805891",
  },

  {
    icon: <BsFileEarmarkTextFill />,
    href: "/files/cv.pdf",
  },
  //   {
  //     icon: <FaGithub />,
  //     href: "https://github.com/Delgersaikhannn",
  //   },
  //   {
  //     icon: <FaGithub />,
  //     href: "https://github.com/Delgersaikhannn",
  //   },
];

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

const Contact = ({ label, icon, href }) => {
  return (
    <Link href={href} target="_blank">
      <HStack>
        <Box color="yellow">{icon}</Box>
        <Text fontSize={["sm"]}> {label} </Text>
      </HStack>
    </Link>
  );
};

export const AboutMe = () => {
  const ref = useRef();
  const inView = useInView(ref, { once: true });

  return (
    <Center minH="100vh" color="white" id="about" py={[5, 5, 9, 16]} w="100%">
      <VStack
        w={Container}
        alignItems="flex-start"
        ref={ref}
        h="100%"
        px={[6, 7, 3, 0]}
      >
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
          flexDir={["column", "column", "row", "row"]}
          pt={[5, 5, 9, 9]}
        >
          <VStack flex={1} w={["200px", "260px", "100%", "100%"]}>
            <AspectRatio w="100%" ratio={1}>
              <AvatarBadge />
            </AspectRatio>
            <Text fontSize={["2xs", "2xs", "xs", "xs"]} opacity={0.5} pt={2}>
              Click to change!
            </Text>
            <HStack pt={[2, 2, 3, 3]} spacing={[4, 5, 5, 5]}>
              {Socials?.map((el, idx) => (
                <Link href={el.href} key={el.href} target="_blank">
                  <Box fontSize={["20px", "26px"]}>{el.icon}</Box>
                </Link>
              ))}
            </HStack>
          </VStack>
          <VStack
            flex={[1, 1, 3, 3]}
            alignItems={["center", "center", "flex-start", "flex-start"]}
            pt={[3, 3, 0, 0]}
          >
            <Text
              fontSize={["lg", "lg", "2xl", "2xl"]}
              textAlign="center"
              fontWeight={700}
            >
              Delgersaikhan Altanzul
            </Text>
            <VStack
              textAlign="justify"
              alignItems="flex-start"
              fontSize={["sm", "sm", "md", "md"]}
            >
              <Text>
                Hello, nice to meet you. I am a software engineer who is
                motivated to do creative things. I am a software engineer who is
                highly motivated to master the field of Computer Science.
                Experienced with web development, mobile development, DevOps,
                machine learning, and blockchain technology. I have an
                experience with programming languages including Javascript,
                Java, Python, C, and Solidity.
              </Text>
              <Text>
                As a creative developer, i always searches an unique solution in
                every obstacles. I am currently working on the web3 dapps.
                Besides from that, I am really passionate to make an digital or
                traditional arts.
              </Text>
              {/* <Text>
                
              </Text> */}
              <SimpleGrid
                columns={[1, 2, 2, 2]}
                w="100%"
                spacing={[3, 3, 3, 3]}
                pt={[3, 3, 5, 5]}
              >
                {DATA?.map((el, idx) => (
                  <Contact {...el} key={"contact_" + idx} />
                ))}
              </SimpleGrid>
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Center>
  );
};
