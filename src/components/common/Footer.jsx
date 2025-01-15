import { Box, Container, Flex, Link, Text, Button, Stack, Icon, Divider } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="#303030" color="white" py={10}>
      <Container maxW="container.xl">
        <Flex direction="column" align="center">
          
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-around"
            align="center"
            w="full"
            mb={6}
          >
            <Stack direction="row" spacing={6} justify="center" display={{ base: "block", lg: "flex" }}>
              <Link href="/about-us" _hover={{ textDecoration: "underline" }} fontSize="lg">
                About Us
              </Link>
              <Link href="/enpro-saudi-arabia" _hover={{ textDecoration: "underline" }} fontSize="lg">
                Enpro Saudi Arabia
              </Link>
              <Link href="/career" _hover={{ textDecoration: "underline" }}  fontSize="lg">
                Careers
              </Link>
              <Link href="/contact" _hover={{ textDecoration: "underline" }} fontSize="lg">
                Contact Us
              </Link>
            </Stack>
            <Button
              as="a"
              href="https://www.enproindustries.in/wp-content/uploads/2023/06/Enpro-Brochure-v3.pdf"
              target="_blank"
              bg="#d00000"
              color="white"
              _hover={{ bg: "red.300" }}
            >
              Download Brochure
            </Button>
          </Flex>
          <Divider borderColor="#838383" my={6} w="full" />
          
          {/* Bottom Section: Copyright and Social Icons */}
          <Flex
            direction="row"
            align="center"
            justify="space-around"
            w="full"
            spacing={4}
          >
            <Text fontSize="lg" mr={4}>&copy; 2023 ENPRO INDUSTRIES PVT. LTD.</Text>
            <Stack direction="row" spacing={6} justify="center">
              <Link href="https://www.facebook.com/enproindia" isExternal>
                <Icon as={FaFacebook} boxSize={6} _hover={{ color: "blue.500" }} />
              </Link>
              <Link href="https://www.linkedin.com/company/enproindia/?originalSubdomain=in" isExternal>
                <Icon as={FaLinkedin} boxSize={6} _hover={{ color: "blue.700" }} />
              </Link>
              <Link href="https://www.instagram.com/enproindia/?igshid=YmMyMTA2M2Y%3D" isExternal>
                <Icon as={FaInstagram} boxSize={6} _hover={{ color: "pink.500" }} />
              </Link>
              <Link href="https://www.youtube.com/watch?v=DPDFUcAMySQ" isExternal>
                <Icon as={FaYoutube} boxSize={6} _hover={{ color: "red.500" }} />
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
