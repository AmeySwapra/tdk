import React from 'react';
import { Box, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import contactbg from '../assets/bg/counter-bg.jpg';
import divider from '../assets/bg/divider.jpg';

const EnproNumber = () => {
  const numbers = [
    { value: '45%+', label: 'IKTVA Content' },
    { value: '5000m²', label: 'Manufacturing Area' },
    { value: '30 Ton', label: 'Crane capacity' },
    { value: '60+', label: 'Skids annual manufacturing capacity' },
    { value: '', label: 'In-house Blasting and Painting booth', extra: true },
  ];

  return (
    <Box
      bgImage={`url(${contactbg})`}
      bgSize="cover"
      bgPosition="center"
      py={16}
    >
      <Container maxW="container.lg">
        {/* Section Heading */}
        <Heading
          as="h2"
          fontSize={{ base: '2xl', md: '4xl' }}
          color="white"
          textAlign="center"
          mb={6}
          data-aos="fade-down"
        >
          Company in Numbers
        </Heading>

        {/* Decorative Line */}
        <Box textAlign="center" mb={12}>
          <Image
            src={divider}
            alt="Heading HR"
            mx="auto"
            data-aos="fade-down"
          />
        </Box>

        {/* Numbers Grid */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} textAlign="center">
          {numbers.map((item, index) => (
            <Box key={index} data-aos="fade-left">
              {item.value && (
                <Text fontSize="4xl" fontWeight="bold" color="white" mb={2}>
                  {item.value}
                </Text>
              )}
              <Text fontSize="lg" color="white" fontWeight={item.extra ? 'semibold' : 'normal'}>
                {item.label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default EnproNumber;
