import { Box, Heading, Text, Avatar, Center, Icon } from "@chakra-ui/react";
import Page from "components/layout/Page";
import {
  FiCloud,
  FiDownloadCloud,
  FiCloudLightning,
  FiCloudSnow,
} from "react-icons/fi";

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
            About Us
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
            <Icon as={FiCloud} w={10} h={10} float="right" />
            <Heading fontSize="xl" align="left">
              Unlimited Uploads
            </Heading>

            <Text mt={4} align="left">
              We offer 20 GB of cloud storage to every free user ✌
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
            <Icon as={FiDownloadCloud} w={10} h={10} float="right" />
            <Heading fontSize="xl" align="left">
              Unlimited Downloads
            </Heading>
            <Text mt={4} align="left">
              Easily download and share your images and videos among your
              friends and family 🙋
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
            <Icon as={FiCloudLightning} w={10} h={10} float="right" />
            <Heading fontSize="xl">Lightning Speed</Heading>
            <Text mt={4}>
              Enjoy lightning fast speed on uploads and downloads from our
              servers across the 🌎
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
            <Icon as={FiCloudSnow} w={10} h={10} float="right" />
            <Heading fontSize="xl" align="left">
              Support
            </Heading>
            <Text mt={4} align="left">
              We have 24/7 live support wheter it is summer or winter our
              support team is always ready to help 🌟
            </Text>
          </Box>
        </Box>
      </Box>
    </Page>
  );
};

export default AboutUs;
