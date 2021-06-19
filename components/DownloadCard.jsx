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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsDownload, BsCalendar, BsInfoSquare } from "react-icons/bs";
import nameFormatter from "utils/nameFormatter";
import fileDesp from "utils/fileTypeDesp";

export default function SocialProfileSimple({ file }) {
  const [timer, setTimer] = useState(false);
  const [downloadPermission, setDownloadPermission] = useState(false);
  const [timerValue, setTimerValue] = useState(5);
  const [downloadLink, setDownloadLink] = useState(null);
  const fileName = file.fileName && nameFormatter(file.fileName);

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
      <Stack mx={[2, 2, 4, 6]} flex="2" width={["20%", "25%", "40%"]}>
        <Flex
          justifyContent="space-between"
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"lg"}
          p={[2, 3, 4, 6]}
          textAlign={"center"}
          flexDirection={["column", "column", "column", "row"]}
        >
          <Box textAlign="left">
            <Image
              src="https://anonym.ninja/images/icons/jpg.png"
              boxSize="20"
            />
            <Heading fontSize={"xl"} fontFamily={"body"} isTruncated my={2}>
              {fileName}
            </Heading>
            <Text>
                {fileDesp(file).short}
            </Text>
          </Box>

          <Stack
            mt={[4, 4, 6, 8]}
            direction={["column", "column", "row", "row"]}
            spacing={[2, 2, 4, 4]}
          >
            <Button
              // flex={1}
              fontSize={["xs", "sm"]}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
            >
              Share
            </Button>

            {/* Download Button */}
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
                onClick={() => timerDuration === 5 && setTimer(true)}
              >
                <Text fontSize={[10, 12, "auto"]}>
                  {timerValue === 5
                    ? `Download ${Math.floor(file.fileSize / 1000)} Kb`
                    : timerValue}
                </Text>
              </Button>
            )}
          </Stack>
        </Flex>

        {/* Ad 1 */}
        <Image
          src="https://i.postimg.cc/0KSjSvds/bannar-ad.png"
          width="100%"
          my={6}
        />
        <HStack flexDirection={["column", "column", "row"]}>
          {/* General Description */}
          <Box textAlign="left" flex="1">
            <Text>
            {fileDesp(file).long}
            </Text>
          </Box>

          {/* File Info */}
          <Box flex="1">
            <Text fontWeight="bold">Info:</Text>
            <Stack direction={"column"} border="1px" borderColor="gray.300">
              <HStack
                justifyContent="space-between"
                width="100%"
                px={["2px", "2px", "4px", "6px"]}
                alignItems="center"
              >
                <Icon as={BsCalendar} boxSize={5} color="green" />
                <Text>{new Date(file.createdAt).toDateString()}</Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                width="100%"
                px={["2px", "2px", "4px", "6px"]}
                alignItems="center"
              >
                <Icon as={BsInfoSquare} boxSize={5} color="green" />
                <Text>{file.fileType}</Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                width="100%"
                px={["2px", "2px", "4px", "6px"]}
                alignItems="center"
              >
                <Icon as={BsDownload} boxSize={5} color="green" />
                <Text>
                  {file.downloads && file.downloads.length > 0
                    ? file.downloads.length
                    : 0}
                </Text>
              </HStack>
            </Stack>
          </Box>
        </HStack>
        {/* Ad 2 */}
        <Image
          src="https://i.postimg.cc/0KSjSvds/bannar-ad.png"
          width="100%"
          my={6}
        />
      </Stack>
    </>
  );
}
