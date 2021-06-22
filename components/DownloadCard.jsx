import {
  Heading,
  Box,
  Text,
  Stack,
  Button,
  Icon,
  useColorModeValue,
  Image,
  HStack,
  Flex,
  Grid,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import nameFormatter from "utils/nameFormatter";
import fileDescriptionIdentifier from "utils/fileDescriptionIdentifier";
import fileSizeFormatter from "utils/fileSizeFormatter";
import copyToClipboard from "utils/copyToClipboard";
import fileIconIdentifier from "utils/fileIconIdentifier";

export default function SocialProfileSimple({ file }) {
  const [timer, setTimer] = useState(false);
  const [downloadPermission, setDownloadPermission] = useState(false);
  const [timerValue, setTimerValue] = useState(5);
  const [downloadLink, setDownloadLink] = useState(null);
  const fileName = file.fileName && nameFormatter(file.fileName);
  const fileDescription = fileDescriptionIdentifier(file.fileType);
  const toast = useToast();

  let timerDuration = 5;
  useEffect(() => {
    if (!timer) return;
    const downloadTimer = setInterval(() => {
      if (timerDuration === 0) {
        setDownloadPermission(true);
        clearInterval(downloadTimer);
        getDownloadLink();
      }
      setTimerValue(timerDuration);
      timerDuration -= 1;
    }, 1000);
  }, [timer]);

  const getDownloadLink = async () => {
    const res = await fetch(
      `https://api.dogefiles.io/S3/downloadObject/?id=${file._id}`
    );
    console.log(res);
    const data = await res.json();
    setDownloadLink(data.downloadLink);
  };

  return (
    <>
      <Stack mx={[2, 2, 4, 6]} flex="2" width={["100%", "100%"]}>
        <Flex
          justifyContent="space-between"
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"xl"}
          rounded={"lg"}
          p={[2, 3, 4, 6]}
          textAlign={"center"}
          flexDirection={["column", "column", "cloumn", "row"]}
        >
          <Box textAlign="left">
           
            
            <HStack spacing={["25px","200px","350px","650px"]}>
              <Image src={fileIconIdentifier(file.fileType)} boxSize="20" />
              <Box>
              <Text><strong>Date: </strong>{new Date(file.createdAt).toDateString()}</Text>
              <Text><strong>Type: </strong>{file.fileType}</Text>
              </Box>  
            </HStack>
            
            <Heading fontSize={"xl"} fontFamily={"body"} isTruncated my={2}>
            {fileName}  
            </Heading>
            <Text>{fileDescription.short}</Text>

            
            <HStack spacing="20px" paddingTop={["2%","2%","2%","2%"]} >
            <Box rounded={"full"} w={["180px","180px","180px","180px"]} h="10" bg="blue" textAlign={["center","center","center","center"]} color="white" p={2} fontSize={["xs","large"]}>
             <Text>Downloads: {file.downloads && file.downloads.length > 0
              ? file.downloads.length
              : 0}</Text>
            </Box>
              <Box paddingLeft={["0","40px","220px","510px"]}
              
              >
              <Button
                // flex={1}
                fontSize={["xs", "sm"]}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  copyToClipboard(window.location);
                  toast({
                    title: "Copied",
                    description: "Download link copied to clipboard",
                    position: "bottom",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  });
                }}
              >
                Share
              </Button>
              </Box>
                {/* Download Button */}
              <Box>
              {downloadPermission ? (
                <Button
                  as={"a"}
                  href={downloadLink}
                  fontSize={["xs", "sm"]}
                  mx="auto"
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  boxShadow={
                    "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                  }
                  _hover={{
                    bg: "blue.500",
                  }}
                  _focus={{
                    bg: "blue.500",
                  }}
                >
                  <Text fontSize={[10, 12, "auto"]}>Start Download</Text>
                </Button>
              ) : (
                <Button
                  // flex={1}
                  fontSize={["xs", "sm"]}
                  mx="auto"
                  rounded={"full"}
                  bg={"primary.400"}
                  color={"white"}
                  _hover={{
                    bg: "primary.500",
                  }}
                  _focus={{
                    bg: "primary.500",
                  }}
                  onClick={() => timerDuration === 5 && setTimer(true)}
                >
                  <Text fontSize={[10, 12, "auto"]}>
                    {timerValue === 5
                      ? `Download ${fileSizeFormatter(file.fileSize)}`
                      : timerValue}
                  </Text>
                </Button>
              )}
              </Box>
          </HStack>
           
          </Box>

          <Stack
            mt={[4, 4]}
            direction={["column", "column"]}
            spacing={[2, 2]}
          >
          
            

            
          </Stack>
        </Flex>

        {/* Ad 1 */}
        {/* <Image src="/images/upper_ad.png" width="100%" my={6} /> */}
        <VStack paddingTop="5%">
          {/* General Description */}
          <Box textAlign="left" padding="3%"  bg={useColorModeValue("white", "gray.900")}
          boxShadow={"xl"}
          rounded={"lg"}>
            <Text>{fileDescription.long}</Text>
          </Box>
            <Box paddingTop="5%" width="100%">
            <Box textAlign="left" padding="3%"  bg={useColorModeValue("white", "gray.900")}
          boxShadow={"xl"}
          rounded={"lg"}>
              <Text fontSize="20px"><strong>Unlimited Uploads</strong></Text>
              <Text>Signup today and enjoy free cloud storage upto 20 GB ✌</Text><br/>
              <Text fontSize="20px"><strong>Unlimited Downloads</strong></Text>
              <Text>Easily download and share your images and videos among your friends and family 🙋</Text><br/>
              <Text fontSize="20px"><strong>Lightning Speed</strong></Text>
              <Text>Enjoy lightning fast speed on uploads and downloads from our servers across the 🌎</Text>
            </Box>
            </Box>
          </VStack>
          {/* File Info */}
         {/* <Box flex="1">
            <Text fontWeight="bold">Info:</Text>
            <Stack direction={"column"} border="1px" borderColor="gray.300">
              <HStack
                justifyContent="space-between"
                width="100%"
                px={["2px", "2px", "4px", "6px"]}
                alignItems="center"
              >}
                {/* <Icon as={BsCalendar} boxSize={5} color="green" /> */}
                
              {/*</HStack>}
              <HStack
                justifyContent="space-between"
                width="100%"
                px={["2px", "2px", "4px", "6px"]}
                alignItems="center"
              >
                {/* <Icon as={BsInfoSquare} boxSize={5} color="green" /> */}
                
             {/* </HStack>
              <HStack
                justifyContent="space-between"
                width="100%"
                px={["2px", "2px", "4px", "6px"]}
                alignItems="center"
              >}
                {/* <Icon as={BsDownload} boxSize={5} color="green" /> */}
              
             
          {/*    </HStack>
            </Stack>
          </Box>}
        
        {/* Ad 2 */}
        {/* <Image src="/images/bottom_ad.jpg" width="100%" my={6} /> */}
      </Stack>
    </>
  );
}
