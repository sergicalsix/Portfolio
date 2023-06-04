// ProjectsSection.js

import { Box, Grid, Image, Text } from "@chakra-ui/react";

const Project = () => {
  return (
    <Box py={16} px={8} bg="brand.50" textAlign="center">
      <Text fontSize="4xl" mb={8}>Projects</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={8}>
        {/* Project Card 1 */}
        <Box p={4} bg="white" boxShadow="md">
          {/* Project Thumbnail */}
          <Image src="/project1-thumbnail.jpg" alt="Project 1" mb={4} />
          {/* Project Title */}
          <Text fontWeight="bold" mb={2}>Project 1</Text>
          {/* Project Description */}
          <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </Box>

        {/* Project Card 2 */}
        {/* Add more project cards as needed */}
      </Grid>
    </Box>
  );
};

export default Project;
