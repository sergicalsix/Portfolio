// Header.js

import { Box, Flex, Link, Text , Image} from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
  return (
    <Box as="header" bg="gray.800" py={4} px={8} boxShadow="sm" position="sticky" top={0} zIndex={999}>
      <Flex justify="space-between" align="center">
        <NextLink href="/" passHref>
          <Link>
            <Flex>
            <Image src="/mochi.png" alt="My Image" width="50px" height="50px" />
            <Text fontSize="2xl" fontWeight="bold" color="white" mt={1} ml={2}>Portfolio</Text>
            </Flex>
          </Link>
          
        </NextLink>
        
        <Flex>
          {/* <NextLink href="/about" passHref>
            <Link mx={2} color="black">About</Link>
          </NextLink> */}
          <NextLink href="/skill" passHref>
            <Link mx={2} color="white">Skills</Link>
          </NextLink>
          <NextLink href="/project" passHref>
            <Link mx={2} color="white">Projects</Link>
          </NextLink>
          <NextLink href="/article" passHref>
            <Link mx={2} color="white">Article</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
