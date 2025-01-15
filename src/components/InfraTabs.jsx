import { Tab, TabList, TabPanel, TabPanels, Tabs, Box, SimpleGrid, Image } from '@chakra-ui/react';
import p1 from '../assets/eng/p1.jpg';
import p2 from '../assets/eng/p2.jpg';
import p3 from '../assets/eng/p3.jpg';
import p4 from '../assets/eng/p4.jpg';
import p5 from '../assets/eng/p5.jpg';
import p6 from '../assets/eng/p6.jpg';
import p7 from '../assets/eng/p7.jpg';
import p8 from '../assets/eng/p8.jpg';
import p9 from '../assets/eng/p9.jpg';
import p10 from '../assets/eng/p10.jpg';

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ImageTabs = () => {
  return (
    <Box maxWidth="1200px" mx="auto">
      <Tabs variant="enclosed" colorScheme="teal">
        <TabList display="flex" justifyContent="center">
          <Tab>Engineered Skids Division</Tab>
          <Tab>Process Equipment Division</Tab>
          <Tab>Headquaters</Tab>
          <Tab>Enpro Saudi Arabia</Tab>
          <Tab>R & D Facility</Tab>
          <Tab>A Sustainable Workplace</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={2} spacing={4}>
              {shuffleArray(images).slice(0, 6).map((image, index) => (
                <Image key={index} src={image} alt={`Engineered Skids ${index + 1}`} boxSize="100%" objectFit="cover" />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={2} spacing={4}>
              {shuffleArray(images).slice(0, 6).map((image, index) => (
                <Image key={index} src={image} alt={`Process Equipment ${index + 1}`} boxSize="100%" objectFit="cover" />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={2} spacing={4}>
              {shuffleArray(images).slice(0, 6).map((image, index) => (
                <Image key={index} src={image} alt={`Headquarters ${index + 1}`} boxSize="100%" objectFit="cover" />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={2} spacing={4}>
              {shuffleArray(images).slice(0, 6).map((image, index) => (
                <Image key={index} src={image} alt={`Enpro Saudi Arabia ${index + 1}`} boxSize="100%" objectFit="cover" />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={2} spacing={4}>
              {shuffleArray(images).slice(0, 6).map((image, index) => (
                <Image key={index} src={image} alt={`R & D Facility ${index + 1}`} boxSize="100%" objectFit="cover" />
              ))}
            </SimpleGrid>
          </TabPanel>
          <TabPanel>
            <SimpleGrid columns={2} spacing={4}>
              {shuffleArray(images).slice(0, 6).map((image, index) => (
                <Image key={index} src={image} alt={`Sustainable Workplace ${index + 1}`} boxSize="100%" objectFit="cover" />
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ImageTabs;
