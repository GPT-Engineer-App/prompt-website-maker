// Complete the Index page component for an AI website that creates websites from prompts
import { Box, Button, Container, Heading, Text, VStack, Image, Input, useColorModeValue } from "@chakra-ui/react";
import { FaRobot, FaArrowRight } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "gray.50");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={10} align="center">
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Instant Website Creator
          </Heading>
          <Text fontSize="xl" color={textColor}>
            Create your website with just a single prompt using the power of AI!
          </Text>
        </Box>
        <Image src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzEzNzYwODk5fDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" alt="AI Technology" boxSize="300px" objectFit="cover" />
        <Box w="full">
          <Text fontSize="lg" mb={2} textAlign="center">
            Enter your idea:
          </Text>
          <Input placeholder="Describe your website's purpose" size="lg" />
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" mt={4} w="full">
            Create Website
          </Button>
        </Box>
        <Box textAlign="center">
          <FaRobot size="3em" />
          <Heading as="h3" size="lg" mt={2}>
            Powered by AI
          </Heading>
          <Text color={textColor}>Our AI analyzes your input to generate a fully functional, responsive website tailored to your needs.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
