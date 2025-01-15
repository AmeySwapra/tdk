import React, { useState } from 'react';
import { Box, Container, Text, Flex, Image, Button, Heading } from '@chakra-ui/react';

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState(1988);

  const timelineData = [
    { year: 1988, image: 'https://via.placeholder.com/150x100?text=1988' },
    { year: 1990, image: 'https://via.placeholder.com/150x100?text=1990' },
    { year: 1992, image: 'https://via.placeholder.com/150x100?text=1992' },
    { year: 1994, image: 'https://via.placeholder.com/150x100?text=1994' },
    { year: 1996, image: 'https://via.placeholder.com/150x100?text=1996' },
    { year: 1998, image: 'https://via.placeholder.com/150x100?text=1998' },
    { year: 2000, image: 'https://via.placeholder.com/150x100?text=2000' },
    { year: 2002, image: 'https://via.placeholder.com/150x100?text=2002' },
    { year: 2004, image: 'https://via.placeholder.com/150x100?text=2004' },
    { year: 2006, image: 'https://via.placeholder.com/150x100?text=2006' },
    { year: 2008, image: 'https://via.placeholder.com/150x100?text=2008' },
    { year: 2010, image: 'https://via.placeholder.com/150x100?text=2010' },
    { year: 2012, image: 'https://via.placeholder.com/150x100?text=2012' },
    { year: 2014, image: 'https://via.placeholder.com/150x100?text=2014' },
    { year: 2016, image: 'https://via.placeholder.com/150x100?text=2016' },
    { year: 2018, image: 'https://via.placeholder.com/150x100?text=2018' },
    { year: 2020, image: 'https://via.placeholder.com/150x100?text=2020' },
    { year: 2022, image: 'https://via.placeholder.com/150x100?text=2022' },
    { year: 2024, image: 'https://via.placeholder.com/150x100?text=2024' }
  ];

  return (
    <Box py={10} bg="#f4f4f4">
      <Container maxW="container.xl">
        {/* Section Heading */}
        <Heading as="h2" size="xl" textAlign="center" mb={8} color="teal.500">
          Our Journey Through the Years
        </Heading>

        {/* Years Row */}
        <Flex justify="center" wrap="wrap" mb={8}>
          {timelineData.map((item) => (
            <Button
              key={item.year}
              onClick={() => setSelectedYear(item.year)}
              variant={selectedYear === item.year ? 'solid' : 'outline'}
              colorScheme="teal"
              m={2}
              _hover={{ bg: 'teal.100' }}
            >
              {item.year}
            </Button>
          ))}
        </Flex>

        {/* Image for the selected year */}
        <Box textAlign="center">
          <Image
            src={timelineData.find(item => item.year === selectedYear)?.image}
            alt={`Timeline image of ${selectedYear}`}
            boxSize="300px"
            objectFit="cover"
            borderRadius="md"
            mx="auto"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Timeline;
