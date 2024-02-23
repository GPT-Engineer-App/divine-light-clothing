import { Box, Container, Heading, Text, VStack, Image, SimpleGrid, Button, useColorModeValue, extendTheme, ChakraProvider } from "@chakra-ui/react";
import { FaCross, FaPray, FaTshirt } from "react-icons/fa";
import { IconContext } from "react-icons";

// Extending the theme to include custom colors
const theme = extendTheme({
  colors: {
    brand: {
      50: "#f5eaff",
      100: "#e0c9ff",
      200: "#cbaffe",
      300: "#b595ff",
      400: "#a07bff",
      500: "#8b61e6",
      600: "#6e4bb4",
      700: "#523682",
      800: "#362151",
      900: "#1b0b21",
    },
  },
});

const Index = () => {
  const bg = useColorModeValue("brand.50", "brand.900");
  const color = useColorModeValue("brand.800", "brand.100");

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bg} color={color} minH="100vh">
        <Container maxW="container.xl" py={10}>
          <VStack spacing={2} textAlign="center">
            <IconContext.Provider value={{ size: "3em" }}>
              <FaCross />
            </IconContext.Provider>
            <Heading as="h1" size="2xl" mb={2}>
              Divine Light
            </Heading>
            <Text fontSize="lg" maxW="560px">
              Adorn yourself in faith with our exclusive Christian clothing collection.
            </Text>
          </VStack>
        </Container>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} px={5} py={10}>
          <ProductCard title="Prayerful T-Shirt" description="Wear your prayers on your sleeve with this soft and stylish tee." icon={<FaPray />} />
          <ProductCard title="Divine Hoodie" description="Stay warm and inspired with our cozy hoodies featuring uplifting verses." icon={<FaTshirt />} />
          <ProductCard title="Blessed Cap" description="Top off your outfit with a cap that speaks volumes about your faith." icon={<FaCross />} />
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
};

// Product card component
const ProductCard = ({ title, description, icon }) => {
  const bg = useColorModeValue("white", "brand.800");
  const color = useColorModeValue("brand.800", "brand.100");

  return (
    <VStack bg={bg} boxShadow="md" padding={5} borderRadius="md" spacing={4} align="center">
      <IconContext.Provider value={{ size: "50px", color: theme.colors.brand[500] }}>{icon}</IconContext.Provider>
      <Heading as="h3" size="lg">
        {title}
      </Heading>
      <Text color={color} px={3}>
        {description}
      </Text>
      <Button colorScheme="brand" variant="solid">
        Shop Now
      </Button>
    </VStack>
  );
};

export default Index;
