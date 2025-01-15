import React from "react";
import { Box, Container, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import li from '../assets/bg/li.png'
import ri from '../assets/bg/ri.png'
const MotionBox = motion(Box);

const QuoteAndVideoSection = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const quoteAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 8 },
    },
  };

  const leftImagePosition = useBreakpointValue({
    base: "-150px",
    md: "-250px",
    lg: "-350px",
  });

  const rightImagePosition = useBreakpointValue({
    base: "-100px",
    md: "-150px",
    lg: "-200px",
  });

  return (
    <Box py={{ base: 4, md: 8, lg: 24 }}>
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
          textAlign="center"
          mb={{ base: 6, lg: 12 }}
        >
          <Image
            src={li}
            alt="Left Quote Icon"
            position="absolute"
            left={leftImagePosition}
            top="0"
            transform="translateY(-50%)"
            zIndex={1}
          />
          <MotionBox
            className="quote-text"
            minWidth="1000px"
            maxWidth="100%"
            mx="auto"
            px={{ base: 4, md: 8 }}
            pt={4}
            pb={6}
            initial="hidden"
            animate="visible"
            variants={quoteAnimation}
          >
            <Text fontSize={{ base: "18px", md: "22px", lg: "30px" }} fontWeight="bold">
              Our Mission: To be a world leader in energy &amp; process equipment with a focus on
              <br />
              realising the transition to clean energy.
            </Text>
          </MotionBox>
          <Image
            src={ri}
            alt="Right Quote Icon"
            position="absolute"
            right={rightImagePosition}
            top="100%"
            transform="translateY(-50%)"
            zIndex={1}
          />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          py={{ base: 4, md: 8 }}
          borderRadius="md"
        >
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/DPDFUcAMySQ"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};

export default QuoteAndVideoSection;
