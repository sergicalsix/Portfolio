// Footer.js

import { Box, Flex, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
    return (
        <Box py="5px" px={4} bg="gray.800" color="white" textAlign="center" position="fixed"  bottom={0} width="100%">
        <Flex justify="center" align="center" mb={4}>
            <NextLink href="/" passHref>
                <Link mx={2} color="white">Top</Link>
            </NextLink>
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
        <Text fontSize="sm">© 2023 All rights reserved.</Text>
        </Box>
    );
};
export default Footer;
