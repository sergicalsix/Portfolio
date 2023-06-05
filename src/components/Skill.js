// SkillsSection.js

import { Box, Grid, GridItem, Flex, Text, Progress } from "@chakra-ui/react";

const Skill = () => {
  return (
    <Box py={16} px={8} bg="white" textAlign="center">
      <Text fontSize="4xl" mb={8}>Skills</Text>
      <Flex>
      <Box flex={1} bg="gray.200" ml="10%">
        {/* 左側のコンテンツ */}
        ほ
      </Box>
      <Box flex={1} bg="gray.300" ml="2%" mr="2%">
        {/* 中央のコンテンツ */}
        おj
      </Box>
      <Box flex={1} bg="gray.400" mr="10%">
        {/* 右側のコンテンツ */}
        おお
      </Box>
    </Flex>


      <Grid templateColumns="repeat(3, 1fr)" gap={8} mt={12}>
        {/* Skill Card 1 */}
        <Flex direction="column" align="center" p={4} bg="gray.100">
          {/* Skill Icon */}
          <Box boxSize="60px" mb={4} color="blue.500">
            {/* Insert your skill icon here */}
          </Box>
          <Text fontWeight="bold" mb={2}>機械学習</Text>
          {/* Skill Level Bar */}
          <Progress value={90} colorScheme="blue" mb={4} />
          {/* Skill Description */}
          <Text fontSize="sm">データデータデータデータデータデータデータ
          データデータデータデータデータデータデータデータデータデータデータデータデータデータデータ</Text>
        </Flex>

        {/* Skill Card 2 */}
        <Flex direction="column" align="center" p={4} bg="gray.100">
          {/* Skill Icon */}
          <Box boxSize="60px" mb={4} color="blue.500">
            {/* Insert your skill icon here */}
          </Box>
          <Text fontWeight="bold" mb={2}>データ解析</Text>
          {/* Skill Level Bar */}
          <Progress value={90} colorScheme="blue" mb={4} />
          {/* Skill Description */}
          <Text fontSize="sm">pandas</Text>
        </Flex>
        {/* Add more skill cards as needed */}
      </Grid>


    </Box>
  );
};

export default Skill;
