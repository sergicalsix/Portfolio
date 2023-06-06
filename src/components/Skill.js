// SkillsSection.js

import { Box, Grid, GridItem, Flex, Text, HStack,  Heading, UnorderedList, ListItem } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const Skill = () => {
  return (
    <>
      <Text fontSize="4xl" textAlign="center" mb={8} mt={8}>Skills</Text>
      
    
      <HStack spacing="3">
        
        <Box w="full" h="500px"  border='4px' borderColor='gray.200' p="8" ml="17%">
          <Heading as='h4' size='md'>
            機械学習
          </Heading>
          <Text mt={4} fontSize={16}>
            アルゴリズム研究を３年間行っていました。
            フルスクラッチでの実装や論文の再現実装を行うことができます。
          </Text>
          <Heading as='h5' size='sm' mt={4}>
            # ライブラリ
          </Heading>
          <UnorderedList>
            <ListItem fontSize={18}>
              Pytorch
            </ListItem>
            <ListItem fontSize={18}>
              Cupy
            </ListItem>
            <ListItem fontSize={18}>
              PyTorch Geometric(PyG)
            </ListItem>
          </UnorderedList>
        </Box>

        <Box w="full" h="500px" border='4px' borderColor='gray.200' p="8" ml="3%" mr="3%">
            <Heading as='h4' size='md' >
              アプリ•システム開発
            </Heading>
            <Text mt={4} fontSize={16}>
              個人、インターン、ハッカソンで開発を行っていました。主な技術は以下です。
            </Text>
            <Heading as='h5' size='sm' mt={4}>
              # フロントエンド
            </Heading>
            <UnorderedList>
              <ListItem fontSize={18}>
                HTML•CSS
              </ListItem>
              <ListItem fontSize={18}>
                React
              </ListItem>
              <ListItem fontSize={18}>
                Next.js
              </ListItem>
              </UnorderedList>
            <Heading as='h5' size='sm' mt={4}>
              # バックエンド
            </Heading>
              <UnorderedList>
              <ListItem fontSize={18}>
                Django
              </ListItem>
              <ListItem fontSize={18}>
                Django REST framework(DRF)
              </ListItem>
              <ListItem fontSize={18}>
                Fastapi
              </ListItem>
            </UnorderedList>
            <Heading as='h5' size='sm' mt={4}>
              # その他
            </Heading>
              <UnorderedList>
              <ListItem fontSize={18}>
                streamlit
              </ListItem>
            </UnorderedList>
        </Box>
        <Box w="full" h="500px" border='4px' borderColor='gray.200' p="8" mr="17%">
            <Heading as='h4' size='md'>
              その他
            </Heading>
            <Text mt={4} fontSize={16}>
              機械学習や開発には属さない分野で、コーディングしていたものは以下です。
            </Text>
            <Heading as='h5' size='sm' mt={4}>
              # 技術
            </Heading>
            <UnorderedList>
              <ListItem fontSize={18}>
                データ解析•グラフ解析
              </ListItem>
              <ListItem fontSize={18}>
                最適化(ベイズ的最適化)
              </ListItem>
              <ListItem fontSize={18}>
                自動化•スクレイピング
              </ListItem>
              <ListItem fontSize={18}>
                API(LINE API, Slack API, Notion API)
              </ListItem>
            </UnorderedList>
        </Box>
      </HStack>
      

    </>
  );
};

export default Skill;
