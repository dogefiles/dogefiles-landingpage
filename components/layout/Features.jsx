import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiCloud, FiDownloadCloud, FiCloudLightning } from "react-icons/fi";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack>
      <Flex
        // w={22}
        h={16}
        align={"center"}
        justify={"center"}
        // color={"white"}
        rounded={"full"}
        // bg={"gray.100"}
        // bg={useColorModeValue("gray.200", "gray.600")}
        mb={3}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} textAlign="center">
        {title}
      </Text>
      <Text
        textAlign="center"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {text}
      </Text>
    </Stack>
  );
};



export default function SimpleThreeColumns({headingSize}) {
  return (
    <Box p={4} py={{ base: 10, md: 20 }} id="features" my={8}>
      <Heading as={"h2"} size={headingSize} mb={[14, 14, 16, 20]} textAlign="center"  >
        Features
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FiCloud} w={10} h={10} />}
          title={"Unlimited Uploads"}
          text={"Signup today and enjoy free unlimited cloud storage ✌"}
        />
        <Feature
          icon={<Icon as={FiDownloadCloud} w={10} h={10} />}
          title={"Unlimited Downloads"}
          text={
            "Easily download and share your images and videos among your friends and family 🙋"
          }
        />
        <Feature
          icon={<Icon as={FiCloudLightning} w={10} h={10} />}
          title={"Lightning Speed"}
          text={
            "Enjoy lightning fast speed on uploads and downloads from our servers across the 🌎"
          }
        />
      </SimpleGrid>
    </Box>
  );
}

SimpleThreeColumns.defaultProps = {
  headingSize: "3xl"
}
