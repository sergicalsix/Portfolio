// HeroSection.js

import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Box py={16} px={8} bg="brand.50" textAlign="center">
      <Flex direction="column" align="center" maxW="lg" mx="auto">
        {/* <Image src="/hero-image.jpg" alt="Hero Image" borderRadius="full" boxSize="200px" mb={8} /> */}
        <Heading as="h1" fontSize="4xl" mb={4}>
          Welcome to My Portfolio
        </Heading>
        {/* <Text fontSize="xl" color="gray.600">
          Frontend Developer | UX Enthusiast
        </Text> */}
      </Flex>
    </Box>
  );
};

export default HeroSection;
