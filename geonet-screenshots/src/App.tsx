import './App.css';
import { Box, Image, VStack, Heading, Container } from '@chakra-ui/react';

function App() {
  const images = ['01.png', '02.png', '03.png', '04.png', '05.png', '07.png'];

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">GeoNet</Heading>
        {images.map((img, index) => (
          <Box key={index} boxShadow="md" borderRadius="lg" overflow="hidden">
            <Image 
              src={`/public/${img}`} 
              alt={`Image ${index + 1}`} 
              w={["80%"]} 
              h="auto" 
              objectFit="contain" 
            />
          </Box>
        ))}
      </VStack>
    </Container>
  );
}

export default App;
