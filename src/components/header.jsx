import { Container } from "@/utils/globals";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoMenu } from "react-icons/io5";

const Menus = ["about", "education", "experience", "projects"];

export const Header = () => {
  const { scrollYProgress } = useScroll();

  const router = useRouter();

  console.log(router);

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
            spacing={[3, 3, 4, 9]}
            display={["none", "none", "flex", "flex"]}
          >
            {Menus?.map((el, idx) => (
              <Link href={`#${el}`} scroll={false} key={el}>
                <Text
                  cursor="pointer"
                  opacity={router?.asPath?.includes(el) ? 1 : 0.5}
                  _hover={{ opacity: 1 }}
                  textTransform="capitalize"
                >
                  {el}
                </Text>
              </Link>
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
