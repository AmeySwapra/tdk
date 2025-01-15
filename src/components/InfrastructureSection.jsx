import { Box, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import divider from '../assets/bg/divider.jpg'
import p1 from '../assets/infra/p1.jpg';
import p2 from '../assets/infra/p2.jpg';
import p3 from '../assets/infra/p3.jpg';
import p4 from '../assets/infra/p4.jpg';
import p5 from '../assets/infra/p5.jpg';
import p6 from '../assets/infra/p6.jpg';
import p7 from '../assets/infra/p7.jpg';

const InfrastructureSection = () => {
  return (
    <Box as="section" py={16}>
      <Container maxW="container.lg">
        <Heading as="h2" fontSize="2xl" mb={4} color="red.500">
          Infrastructure
        </Heading>
        
        <Box textAlign="center" mb={6}>
          <Image 
            src={divider} 
            alt="heading-hr1" 
            mx="auto"
            data-aos="fade-down"
          />
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={6}>
          <Box data-aos="flip-left">
            <Image 
              src={p1}
              alt="Infrastructure" 
              boxSize="100%" 
              objectFit="cover" 
            />
            <Text mt={4} fontSize="xl" fontWeight="bold">5000m2 area</Text>
          </Box>
          <Box data-aos="fade-left">
            <Text>
              Enpro Saudi Arabia has a world-class manufacturing facility of more than 20,000 sq. ft. area
              designed with lean principles for smooth material flow. The factory is capable of manufacturing more
              than 15 mechanical fluid systems simultaneously, and over 60 skids annually.
            </Text>
          </Box>
        </SimpleGrid>

        <Box py={16}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {[
              { title: '5,000m2 Manufacturing Area', imageSrc: p2 },
              { title: '20+ Welding stations', imageSrc: p3 },
              { title: 'In-house Painting Booth', imageSrc: p4 },
              { title: '30T Crane Capacity', imageSrc: p5 },
              { title: 'In-house Shot-Blasting Booth', imageSrc: p1 },
              { title: 'Multi-level rack storage', imageSrc: 'https://www.enproindustries.in/wp-content/uploads/2023/07/6-5.jpg' },
              { title: 'API 614 Testing Facility', imageSrc: p7 }
            ].map((item, index) => (
              <Box key={index} data-aos="zoom-in-left">
                <a href={item.imageSrc} data-lightbox="slide-show-" data-title={item.title}>
                  <Box>
                    <Text fontSize="xl" fontWeight="bold" color="red.500">{item.title}</Text>
                  </Box>
                  <Image src={item.imageSrc} alt={item.title} boxSize="100%" objectFit="cover" />
                </a>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default InfrastructureSection;
