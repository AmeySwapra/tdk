import React, { useEffect } from 'react';
import { Box, Container, Heading, Image, Text, SimpleGrid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import AOS from 'aos';  // Import AOS library
import 'aos/dist/aos.css';  // Import AOS CSS

import divider2 from '../assets/bg/divider2.jpg';
import net from '../assets/logo/net.png';
import set from '../assets/logo/set.png';
import indus from '../assets/logo/indus.png';
import global from '../assets/logo/global.png';
import people from '../assets/logo/people.png';
import hook from '../assets/logo/hook.png';
import contactbg from '../assets/bg/counter-bg.jpg'; // Import the contactbg image

const CompanyNumbers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,  // Duration for animations
      easing: 'ease-in-out',  // Easing function for smooth transitions
    });
  }, []);

  const leftImagePosition = useBreakpointValue({
    base: '-150px',
    md: '-250px',
    lg: '-350px',
  });

  const rightImagePosition = useBreakpointValue({
    base: '-100px',
    md: '-150px',
    lg: '-200px',
  });

  return (
    <Box
      bgImage={`url(${contactbg})`}
      bgSize="cover"
      bgPosition="center"
      py={{ base: 4, md: 8, lg: 16 }}
      height="600px"  // Set overall height to 400px
    >
      <Container minW="1000px">  {/* Set container width to 1000px */}
        <Heading 
          as="h2" 
          textAlign="center" 
          color="white" 
          mb={{ base: 4, lg: 8 }} 
          data-aos="fade-down"
          data-aos-offset="300"  // Trigger animation 300px before element is in view
        >
          Company in Numbers
        </Heading>
        
        <Box textAlign="center" mb={{ base: 4, lg: 8 }} position="relative">
          <Image
            src={divider2}
            alt="heading-hr2"
            className="heading-hr2"
            data-aos="fade-down"
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          />
        </Box>

        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 6, lg: 12 }} mb={{ base: 4, lg: 8 }}>
          {/* Left Column */}
          <GridItem 
            data-aos="fade-left" 
            data-aos-delay="300"  // Start the animation after 300ms
            data-aos-offset="200"  // Trigger animation 200px before the element is visible
            data-aos-duration="2000" // Duration of the animation (2000ms)
          >
            <Box p={{ base: 4, lg: 12 }}   borderColor="gray.200">
              <Box mb={{ base: 4, lg: 8 }}>
                <Heading as="h3" size="lg" color="white">Global Presence</Heading>
                <Box display="flex" mt={4} alignItems="center">
                  <Image
                    src={set}
                    alt="Active systems worldwide"
                    boxSize="50px"
                    objectFit="contain"
                  />
                  <Box ml={4}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">4000+</Text>
                    <Text color="white">Active systems worldwide</Text>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box display="flex" mt={{ base: 4, lg: 8 }} alignItems="center">
                  <Image
                    src={net}
                    alt="International clients"
                    boxSize="50px"
                    objectFit="contain"
                  />
                  <Box ml={4}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">125+</Text>
                    <Text color="white">International clients</Text>
                  </Box>
                </Box>
                <Box display="flex" mt={{ base: 4, lg: 8 }} alignItems="center">
                  <Image
                    src={global}
                    alt="Countries of installation"
                    boxSize="50px"
                    objectFit="contain"
                  />
                  <Box ml={4}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">50+</Text>
                    <Text color="white">Countries of installation</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>

          {/* Right Column */}
          <GridItem 
            data-aos="fade-right" 
            data-aos-delay="300" 
            data-aos-offset="200" 
            data-aos-duration="2000"
          >
            <Box p={{ base: 4, lg: 12 }} ml={'40px'}>
              <Box mb={{ base: 4, lg: 8 }}>
                <Heading as="h3" size="lg" color="white">Scale and Size</Heading>
                <Box display="flex" mt={4} alignItems="center">
                  <Image
                    src={hook}
                    alt="Lifting capacity"
                    boxSize="50px"
                    objectFit="contain"
                  />
                  <Box ml={4}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">100Ton</Text>
                    <Text color="white">Lifting capacity</Text>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box display="flex" mt={{ base: 4, lg: 8 }} alignItems="center">
                  <Image
                    src={indus}
                    alt="M2 manufacturing space"
                    boxSize="50px"
                    objectFit="contain"
                  />
                  <Box ml={4}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">30,000m²</Text>
                    <Text color="white">M² manufacturing space</Text>
                  </Box>
                </Box>
                <Box display="flex" mt={{ base: 4, lg: 8 }} alignItems="center">
                  <Image
                    src={people}
                    alt="Employees"
                    boxSize="50px"
                    objectFit="contain"
                  />
                  <Box ml={4}>
                    <Text fontSize="2xl" fontWeight="bold" color="white">500+</Text>
                    <Text color="white">Employees</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default CompanyNumbers;
