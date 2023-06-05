// Article.js

import Link from 'next/link';
import { Box, Grid, Flex, Text, Progress, List, Center, 
    ListItem,
    ListIcon, } from "@chakra-ui/react";
import { FaDotCircle } from 'react-icons/fa';

const Article = () => {
  return (
    <Box py={16} px={8} bg="white" >
      <Text fontSize="4xl" textAlign="center" mb={2}>Article</Text>
      <Flex direction="column" mt={8} ml="25%" mr="25%">
            <Box bg="green.100" w="100%" h="200px"  _hover={{ bg: "green.200", }}>
                <Center>
                    <Text fontSize="3xl" as='b'>Qiita</Text>
                </Center>
                <Center> <Text fontSize="xl" mt={2} >機械学習や論文読み、ツールの紹介など幅広く記事にしています。</Text></Center>
                <List spacing={3} justifyContent="flex-start">
                    <Link href="https://qiita.com/sergicalsix/items/c676d95e8fa542c6cbba" passHref>
                        <ListItem fontSize="xl" mt={4}  ml="25%">
                            <ListIcon as={FaDotCircle}  />
                            <Text as='u' color='purple'>【ポケモン】 ターミナルでポケモンを出そう!!</Text>
                        </ListItem>
                    </Link>
                    <Link href="https://qiita.com/sergicalsix/items/ffe7062b5c88ab5bd84e" passHref>
                        <ListItem fontSize="xl" mt={4}  ml="25%" >
                            <ListIcon as={FaDotCircle}  />
                            <Text as='u'color='purple'>理系大学院生必見！お手軽効率化ツールのすすめ </Text>
                        </ListItem>
                    </Link>
                </List>
            </Box>

            <Box bg="blue.100" w="100%" h="200px" mt={4} _hover={{ bg: "blue.200", }}>
                <Center>
                    <Text fontSize="3xl" as='b'>Zenn</Text>
                </Center>
                <Center> <Text fontSize="xl" mt={2} >プログラミングのテクニックなどを記事にしています。</Text></Center>
                <List spacing={3} justifyContent="flex-start">
                    <Link href="https://zenn.dev/sergicalsix/articles/f7ad91d1d7cd04" passHref>
                        <ListItem fontSize="xl" mt={4}  ml="25%">
                            <ListIcon as={FaDotCircle}  />
                            <Text as='u' color='purple'>Pythonでslackを使う(1): slackのメッセージ送信</Text>
                        </ListItem>
                    </Link>
                    <Link href="https://zenn.dev/sergicalsix/articles/d9357dac6e0059" passHref>
                        <ListItem fontSize="xl" mt={4}  ml="25%" >
                            <ListIcon as={FaDotCircle}  />
                            <Text as='u'color='purple'>Pythonでclassを使う: 設計編(2) 汎用親クラスの設計</Text>
                        </ListItem>
                    </Link>
                </List>
            </Box>
            <Box bg="gray.100" w="100%" h="200px" mt={4} _hover={{ bg: "gray.200", }}>
                <Center>
                    <Text fontSize="3xl" as='b'>note</Text>
                </Center>
                <Center>
                <Text fontSize="3xl" mb={2} mt={8}>Comming soon.</Text>
                </Center>
            </Box>
      </Flex>
    </Box>
  );
};

export default Article;
