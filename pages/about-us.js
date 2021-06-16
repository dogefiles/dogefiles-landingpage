import { Box, Heading, Text, Avatar, Center } from "@chakra-ui/react";
import Page from "components/layout/Page";

const AboutUs = () => {
  return (
    <Page
      description={
        "Dogefiles is a free file uploading site where you can upload and download file at super high speed, backup your photos, files, and earn money."
      }
      image={"/images/Dogefiles.png"}
      title={"About Us - Dogefiles"}
    >
      <Box paddingTop="8px">
        <Center h="100px">
          <Heading as="h3" size="lg">
            About us
          </Heading>
        </Center>
        <Box align={["center", "left"]} p={5}>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            width={["100%", "45%"]}
          >
            <Avatar src="https://bit.ly/broken-link" float="right" />
            <Heading fontSize="xl" align="left">
              title
            </Heading>

            <Text mt={4} align="left">
              desc
            </Text>
          </Box>
        </Box>

        <Box align="right" p={5}>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            width={["100%", "45%"]}
          >
            <Avatar src="https://bit.ly/broken-link" float="right" />
            <Heading fontSize="xl" align="left">
              title
            </Heading>
            <Text mt={4} align="left">
              desc
            </Text>
          </Box>
        </Box>

        <Box align={["center", "left"]} p={5}>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            width={["100%", "45%"]}
          >
            <Avatar src="https://bit.ly/broken-link" float="right" />
            <Heading fontSize="xl">title</Heading>
            <Text mt={4}>desc</Text>
          </Box>
        </Box>

        <Box align="right" p={5}>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            width={["100%", "45%"]}
          >
            <Avatar src="https://bit.ly/broken-link" float="right" />
            <Heading fontSize="xl" align="left">
              title
            </Heading>
            <Text mt={4} align="left">
              desc
            </Text>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default AboutUs;
