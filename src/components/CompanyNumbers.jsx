import React, { useEffect } from 'react';
import { Box, Container, Heading, Image, Text, SimpleGrid, GridItem } from '@chakra-ui/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import divider2 from '../assets/bg/divider2.jpg';
import net from '../assets/logo/net.png';
import set from '../assets/logo/set.png';
import indus from '../assets/logo/indus.png';
import global from '../assets/logo/global.png';
import people from '../assets/logo/people.png';
import hook from '../assets/logo/hook.png';
import contactbg from '../assets/bg/counter-bg.jpg';

const CompanyNumbers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <Box
      bgImage={`url(${contactbg})`}
      bgSize="cover"
      bgPosition="center"
      py={{ base: 6, md: 8, lg: 16 }}
      height="auto"
    >
      <Container maxW="container.xl">
        <Heading as="h2" textAlign="center" color="white" mb={8} data-aos="fade-down">
          Company in Numbers
        </Heading>

        <Box
          textAlign="center"
          mb={8}
          position="relative"
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={{ base: '60px', md: 'auto' }}
        >
          <Image
            src={divider2}
            alt="heading-hr2"
            data-aos="fade-down"
            maxW={{ base: '80%', md: '100%' }}
          />
        </Box>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <GridItem data-aos="fade-left">
            <Box>
              <Heading as="h3" size="md" color="white" mb={6}>
                Global Presence
              </Heading>
              <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center" mb={6}>
                <Image src={set} alt="Active systems worldwide" boxSize="50px" />
                <Box ml={{ lg: 4 }} mt={{ base: 4, lg: 0 }}>
                  <Text fontSize="xl" fontWeight="bold" color="white">4000+</Text>
                  <Text color="white">Active systems worldwide</Text>
                </Box>
              </Box>
              <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center" mb={6}>
                <Image src={net} alt="International clients" boxSize="50px" />
                <Box ml={{ lg: 4 }} mt={{ base: 4, lg: 0 }}>
                  <Text fontSize="xl" fontWeight="bold" color="white">125+</Text>
                  <Text color="white">International clients</Text>
                </Box>
              </Box>
              <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center">
                <Image src={global} alt="Countries of installation" boxSize="50px" />
                <Box ml={{ lg: 4 }} mt={{ base: 4, lg: 0 }}>
                  <Text fontSize="xl" fontWeight="bold" color="white">50+</Text>
                  <Text color="white">Countries of installation</Text>
                </Box>
              </Box>
            </Box>
          </GridItem>

          <GridItem data-aos="fade-right">
            <Box>
              <Heading as="h3" size="md" color="white" mb={6}>
                Scale and Size
              </Heading>
              <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center" mb={6}>
                <Image src={hook} alt="Lifting capacity" boxSize="50px" />
                <Box ml={{ lg: 4 }} mt={{ base: 4, lg: 0 }}>
                  <Text fontSize="xl" fontWeight="bold" color="white">100Ton</Text>
                  <Text color="white">Lifting capacity</Text>
                </Box>
              </Box>
              <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center" mb={6}>
                <Image src={indus} alt="M2 manufacturing space" boxSize="50px" />
                <Box ml={{ lg: 4 }} mt={{ base: 4, lg: 0 }}>
                  <Text fontSize="xl" fontWeight="bold" color="white">30,000m²</Text>
                  <Text color="white">M² manufacturing space</Text>
                </Box>
              </Box>
              <Box display="flex" flexDirection={{ base: 'column', lg: 'row' }} alignItems="center">
                <Image src={people} alt="Employees" boxSize="50px" />
                <Box ml={{ lg: 4 }} mt={{ base: 4, lg: 0 }}>
                  <Text fontSize="xl" fontWeight="bold" color="white">500+</Text>
                  <Text color="white">Employees</Text>
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
