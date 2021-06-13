import { Box,Heading,Text,Avatar, 
  Center } from "@chakra-ui/react"

const AboutUs = () => {
  return (
    <Box paddingTop="8px">
    <Center  h="100px" >
    <Heading as="h3" size="lg">
    About us
  </Heading>
</Center>
        <Box align={["center","left"]} p={5}>
        <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        flex="1"
        borderRadius="md"
        width={["100%","45%"]}
      >
      <Avatar src="https://bit.ly/broken-link" float="right"/>
        <Heading fontSize="xl" align="left">title</Heading>
        
        <Text mt={4} align="left">desc</Text>
        
      </Box>
      </Box>


        <Box align="right" p={5}>
        <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        flex="1"
        borderRadius="md"
        width={["100%","45%"]}
      >
      <Avatar src="https://bit.ly/broken-link" float="right"/>
        <Heading fontSize="xl" align="left">title</Heading>
        <Text mt={4} align="left">desc</Text>
    
      </Box>
        </Box>


          <Box align={["center","left"]} p={5}>
          <Box
          p={5}
          shadow="md"
          borderWidth="1px"
          flex="1"
          borderRadius="md"
          width={["100%","45%"]}
        >
        <Avatar src="https://bit.ly/broken-link" float="right"/>
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
        width={["100%","45%"]}
      >
      <Avatar src="https://bit.ly/broken-link" float="right"/>
        <Heading fontSize="xl" align="left">title</Heading>
        <Text mt={4} align="left">desc</Text>
    
      </Box>
        </Box>
    </Box>
  );
};

export default AboutUs;
