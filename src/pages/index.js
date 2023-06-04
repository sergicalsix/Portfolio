import { Box, Heading} from "@chakra-ui/react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Header />

      <HeroSection />

      <Box display="flex" justifyContent="space-between" mx={8}>
        <Box width="45%" bg="gray.200" justifyContent="center" alignItems="center"  p={2} mx={2}>
            <Heading as='h3' size='lg' flexWrap="wrap" >
                hoge
            </Heading>
        </Box>

        <Box width="45%" bg="gray.200" p={2} mx={2}>
        </Box>
      </Box>

      <Footer />

    </>
  )
}
