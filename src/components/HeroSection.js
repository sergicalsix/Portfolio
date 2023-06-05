// HeroSection.js

import Link from 'next/link';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text, Image, VStack } from "@chakra-ui/react";
import Icon from '@chakra-ui/icon';
import { AiFillEdit } from 'react-icons/ai';
import { DiCode, DiWebplatform } from 'react-icons/di';

const HeroSection = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <>
    {/* <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%" */}
    {/* // maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}> */}

    <VStack mt={20} >
        <Text fontWeight="bold" as='b' fontSize="3xl">I'm data scientist and programmer.</Text>
        
        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={20} >
            <Link href="/skill" passHref>
              <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "blue.300", }}>
                
                    <Icon color="black" p="4" as={DiCode} w="24" h="24" />
                    <Text color="black" p="4" fontSize="2xl" fontWeight="semibold">
                      Skill
                    </Text>
              </Flex>
            </Link>
            <Link href="/project" passHref>
              <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                  bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "teal.300", }}>
                  <Icon color="black" p="4" as={DiWebplatform} w="24" h="24" />
                  <Text color="black" p="4" fontSize="2xl" fontWeight="semibold">
                      Projects
                  </Text>
              </Flex>
            </Link>
            <Link href="/article" passHref>
              <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                  bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                  _hover={{ bg: "green.300", }}
              >
                  <Icon as={ AiFillEdit } p="4" w="24" h="24" color="black" />
                  <Text color="black" p="4" fontSize="2xl" fontWeight="semibold">
                      Article
                  </Text>
              </Flex>
            </Link>
        </Flex>
    </VStack>
</>
  );
};

export default HeroSection;
