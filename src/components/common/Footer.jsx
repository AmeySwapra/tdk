import { 
  Box, 
  Container, 
  Flex, 
  Link, 
  Text, 
  Button, 
  Stack, 
  Icon, 
  Divider 
} from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" bg="#303030" color="white" py={10}>
      <Container maxW="container.xl">
        <Flex direction="column" align="center">
          {/* Top Section: Links and Button */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "center", md: "flex-start" }}
            w="full"
            mb={6}
            textAlign={{ base: "center", md: "left" }}
            wrap="wrap"
            gap={{ base: 4, md: 0 }}
          >
            {/* Navigation Links */}
            <Stack
              direction={{ base: "column", lg: "row" }}
              spacing={6}
              justify="center"
              align={{ base: "center", lg: "flex-start" }}
            >
              <Link href="/about-us" _hover={{ textDecoration: "underline" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                About Us
              </Link>
              <Link href="/enpro-saudi-arabia" _hover={{ textDecoration: "underline" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                Enpro Saudi Arabia
              </Link>
              <Link href="/career" _hover={{ textDecoration: "underline" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                Careers
              </Link>
              <Link href="/contact" _hover={{ textDecoration: "underline" }} fontSize={{ base: "sm", md: "md", lg: "lg" }}>
                Contact Us
              </Link>
            </Stack>

            {/* Download Brochure Button */}
            <Button
              as="a"
              href="https://www.enproindustries.in/wp-content/uploads/2023/06/Enpro-Brochure-v3.pdf"
              target="_blank"
              bg="#d00000"
              color="white"
              _hover={{ bg: "red.300" }}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              px={{ base: 6, lg: 8 }}
            >
              Download Brochure
            </Button>
          </Flex>

          {/* Divider */}
          <Divider borderColor="#838383" my={6} w="full" />

          {/* Bottom Section: Copyright and Social Icons */}
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            w="full"
            textAlign={{ base: "center", md: "left" }}
            wrap="wrap"
          >
            {/* Copyright Text */}
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} mb={{ base: 4, md: 0 }}>
              &copy; 2023 ENPRO INDUSTRIES PVT. LTD.
            </Text>

            {/* Social Media Icons */}
            <Stack
              direction="row"
              spacing={6}
              justify="center"
              align="center"
              wrap="wrap"
            >
              <Link href="https://www.facebook.com/enproindia" isExternal>
                <Icon as={FaFacebook} boxSize={{ base: 5, md: 6 }} _hover={{ color: "blue.500" }} />
              </Link>
              <Link href="https://www.linkedin.com/company/enproindia/?originalSubdomain=in" isExternal>
                <Icon as={FaLinkedin} boxSize={{ base: 5, md: 6 }} _hover={{ color: "blue.700" }} />
              </Link>
              <Link href="https://www.instagram.com/enproindia/?igshid=YmMyMTA2M2Y%3D" isExternal>
                <Icon as={FaInstagram} boxSize={{ base: 5, md: 6 }} _hover={{ color: "pink.500" }} />
              </Link>
              <Link href="https://www.youtube.com/watch?v=DPDFUcAMySQ" isExternal>
                <Icon as={FaYoutube} boxSize={{ base: 5, md: 6 }} _hover={{ color: "red.500" }} />
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
