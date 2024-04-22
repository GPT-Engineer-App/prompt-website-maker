import { Box, SimpleGrid, Icon, Text, Stack, Heading } from "@chakra-ui/react";
import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Icon as={icon} w={10} h={10} />
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

const Features = () => {
  return (
    <Box p={5}>
      <Heading as="h3" size="lg" textAlign="center" mb={5}>
        Features
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature icon={FaPaintBrush} title="Custom Designs" text="Create unique and visually appealing designs tailored to your brand." />
        <Feature icon={FaCode} title="Clean Code" text="Generated websites come with clean, maintainable code." />
        <Feature icon={FaMobileAlt} title="Responsive Layouts" text="Websites are fully responsive, ensuring a great experience on any device." />
      </SimpleGrid>
    </Box>
  );
};

export default Features;
