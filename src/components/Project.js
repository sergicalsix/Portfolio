// ProjectsSection.js

import { Box, Center, Grid, Image, Text } from "@chakra-ui/react";
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'


const Project = () => {
  return (
    <Box px="30%" py={8}>
      <Text fontSize="4xl" textAlign="center" mb={8}>Projects</Text>
      <Accordion allowToggle>
        <AccordionItem py={4}>
            <h2>
              <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
                <Box as="span" flex='1' textAlign='left' fontSize="2xl">
                  配送シミュレーション(Webアプリ)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Center>
              <Image src="/delivery.png" alt="My Image" width="450px" height="350px" mb={4}></Image>
              </Center>
              streamlitを使ったwebアプリケーションです。
              配送のシミュレーションのデモを閲覧できます。
              配送計画の計算にはgurobi、地図の描画にはpydeck、ガントチャートにはplotlyを採用しています。
              ヤマト運輸ハッカソンで優勝しました。

              <Text mt={2}>
              <Link href='https://sergicalsix-yamatohackson-main-vsf5e2.streamlit.app' isExternal>
                Let's go to 配送シミュレーション <ExternalLinkIcon mx='2px' />
              </Link>
              </Text>
            </AccordionPanel>
          </AccordionItem>
        <AccordionItem py={4}>
          <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
              <Box as="span" flex='1' textAlign='left' fontSize="2xl">
                ポートフォリオサイト
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            
            Next.jsを用いたポートフォリオサイトです。コンポーネントライブラリにはChakuraUIを採用しました。デプロイ先はVercelです。

            <Text mt={2}>
            <Link href='https://portfolio-murex-alpha-79.vercel.app' isExternal>
              Let's go to ポートフォリオ(トップページに飛びます) <ExternalLinkIcon mx='2px' />
            </Link>
            </Text>
            
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem py={4}>
          <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
              <Box as="span" flex='1' textAlign='left' fontSize="2xl">
                Travel Planner(Webアプリ)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Center>
              <Image src="/travel_planner.png" alt="My Image" width="450px" height="350px" mb={4}></Image>
            </Center>
            streamlitを使ったwebアプリケーションです。
            行きたい場所を入力すると、その場所の地図や検索結果、所要時間の目安、最短経路などを算出できます。
            Open Map APIでの検索、foliumを用いた地図の描画やpulpを用いた最適化計算を実装しています。

            <Text mt={2}>
            <Link href='https://sergicalsix-travel-map-main-v0imbz.streamlit.app' isExternal>
              Let's go to Travel Planner <ExternalLinkIcon mx='2px' />
            </Link>
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem py={4}>
          <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
              <Box as="span" flex='1' textAlign='left' fontSize="2xl">
                読書管理システムの開発
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Center>
            <Image src="/book.png" alt="My Image" width="650px" height="350px"></Image>
            </Center>
            読書記録をslackに自動送信してくれるシステムを開発しました。
            Kindleでの読書をNotionに保存し、Notion APIを用いて情報を抽出後にSlack APIでslackに送信します。
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem py={4}>
          <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
              <Box as="span" flex='1' textAlign='left' fontSize="2xl">
                インターンでのバックエンド開発
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Django REST frameworkを用いたチーム開発を行いました。
            バックエンドのAPIを開発し、フロントエンドとの結合テストまで行いました。
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem py={4}>
          <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
              <Box as="span" flex='1' textAlign='left' fontSize="2xl">
                LINEBot開発
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Pythonを用いてLINEBotを開発しました。
            気分を入力すると、その気分に合わせたおすすめの行動をサジェストしてくれます。
            Herokuで運用していましたが、Herokuの仕様変更によって現在は動いていません。
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem py={4}>
          <h2>
            <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>
              <Box as="span" flex='1' textAlign='left' fontSize="2xl">
                (仮)KARALIST(Webアプリ)
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            フロントエンドはNext.js、バックエンドはFastapiで開発しています。2023年6月末にベータ版完成予定です。
          </AccordionPanel>
        </AccordionItem>



      </Accordion>
    </Box>
  );
};

export default Project;
