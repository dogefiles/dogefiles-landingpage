import {
  Heading,
  Box,
  Text,
  Stack,
  Button,
  Circle,
  useColorModeValue,
  Image,
  HStack,
  Flex,
  Icon,
  Tooltip,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import nameFormatter from "utils/nameFormatter";
import fileDescriptionIdentifier from "utils/fileDescriptionIdentifier";
import fileSizeFormatter from "utils/fileSizeFormatter";
import copyToClipboard from "utils/copyToClipboard";
import fileIconIdentifier from "utils/fileIconIdentifier";
import {
  FaFacebookF,
  FaGoogle,
  FaSpotify,
  FaDiscord,
  FaInternetExplorer,
  FaTwitter,
  FaYoutube,
  FaGlobe,
  FaTelegram,
} from "react-icons/fa";
import { SERVER_URL } from "global/envs";
import Features from "./layout/Features";

export default function SocialProfileSimple({ file, user }) {
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
    const res = await fetch(`${SERVER_URL}/S3/downloadObject/?id=${file._id}`);
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
          boxShadow={"xl"}
          rounded={"lg"}
          p={[2, 3, 4, 6]}
          textAlign={"center"}
          flexDirection={["column", "column", "column", "row"]}
        >
          <Box textAlign="left">
            <Image
              mb={5}
              src={fileIconIdentifier(file.fileType)}
              boxSize="20"
            />
            <Heading
              fontSize="2xl"
              fontWeight="bold"
              // color="black"
              // bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
              // bgClip="text"
              fontFamily={"body"}
              isTruncated
              my={2}
            >
              {fileName}
            </Heading>
            <Text>{fileDescription.short}</Text>
          </Box>

          <Stack
            mt={[4, 4, 6, 8]}
            direction={["column", "column", "row", "row"]}
            spacing={[2, 2, 4, 4]}
          >
            <Button
              colorScheme="yellow"
              variant="outline"
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

            {/* Download Button */}
            {downloadPermission ? (
              <Button
                color="white"
                bg={useColorModeValue("primary.500", "primary.400")}
                variant="solid"
                as={"a"}
                href={downloadLink}
                _hover={{
                  background: "primary.600",
                }}
              >
                <Text>Start Download</Text>
              </Button>
            ) : (
              <Button
                // flex={1}
                color="white"
                bg={useColorModeValue("primary.500", "primary.400")}
                variant="solid"
                _hover={{
                  background: "primary.600",
                }}
                onClick={() => timerDuration === 5 && setTimer(true)}
              >
                <Text>
                  {timerValue === 5
                    ? `Download ${fileSizeFormatter(file.fileSize)}`
                    : timerValue}
                </Text>
              </Button>
            )}
          </Stack>
        </Flex>

        <Stack>
          <Circle
            position="absolute"
            bg="blue.100"
            opacity="0.1"
            w="300px"
            h="300px"
            alignSelf="flex-end"
          />
          <Flex
            justifyContent="space-between"
            mt={20}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"xl"}
            rounded={"lg"}
            p={[2, 3, 4, 6]}
            textAlign={"center"}
            flexDirection={["column", "column", "column", "row"]}
          >
            <Box textAlign="left">
              {/* <Icon as={FaFacebookF} boxSize="50" />   */}
              <Text
                fontSize="2xl"
                fontWeight="bold"
                // bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                // bgClip="text"
              >
                {fileDescription.heading}
              </Text>
              <Text>{fileDescription.long}</Text>
              {(file.fileType === "rar" ||
                file.fileType === "zip" ||
                file.fileType === "7z") && (
                <Stack direction="row" spacing={4} mt={8} align="center">
                  <Link
                    target="_blank"
                    href="https://www.win-rar.com/download.html"
                  >
                    <Button
                      color="white"
                      bg={useColorModeValue("primary.500", "primary.400")}
                      variant="solid"
                      _hover={{
                        background: "primary.600",
                      }}
                    >
                      Download Winrar
                    </Button>
                  </Link>
                </Stack>
              )}
            </Box>
          </Flex>
        </Stack>

        <Stack>
          <Flex
            justifyContent="space-between"
            mt={10}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"xl"}
            rounded={"lg"}
            p={[2, 3, 4, 6]}
            textAlign={"center"}
            flexDirection={["column", "column", "column", "row"]}
          >
            {user.contactVisibility && (
              <Box
                flex="1"
                textAlign="left"
                p={5}
                shadow="md"
                borderWidth="1px"
                borderRadius="md"
                mr={[0, 0, 0, 4]}
                my={[2, 3, 4, 0]}
              >
                <Text fontSize="2xl" fontWeight="bold">
                  {user.displayName}
                </Text>
                <Text fontSize="md" fontWeight="bold">
                  {user.contact.about}
                </Text>
                <HStack
                  justifyContent="space-between"
                  width="100%"
                  px={["2px", "2px", "4px", "6px"]}
                  alignItems="center"
                >
                  <Image
                    alignSelf="center"
                    mt={2}
                    borderRadius="full"
                    backgroundColor="transparent"
                    boxShadow="lg"
                    boxSize="100px"
                    src={user.photoURL}
                  />
                  {user.contact.facebook && (
                    <Link
                      href={`https://facebook.com/${user.contact.facebook}`}
                    >
                      <Icon
                        as={FaFacebookF}
                        boxSize={["30", "30", "30", "42"]}
                      />
                    </Link>
                  )}
                  {user.contact.twitter && (
                    <Link href={`https://twitter.com/${user.contact.twitter}`}>
                      <Icon as={FaTwitter} boxSize={["30", "30", "30", "42"]} />
                    </Link>
                  )}
                  {user.contact.discord && (
                    <Link href={`https://discord.gg/${user.contact.discord}`}>
                      <Icon as={FaDiscord} boxSize={["30", "30", "30", "42"]} />
                    </Link>
                  )}
                  {/* <Link>
                    <Icon as={FaGlobe} boxSize={["30", "30", "30", "42"]} />
                  </Link> */}
                  {user.contact.telegram && (
                    <Link href={`https://discord.gg/${user.contact.telegram}`}>
                      <Icon
                        as={FaTelegram}
                        boxSize={["30", "30", "30", "42"]}
                      />
                    </Link>
                  )}
                </HStack>
              </Box>
            )}
            <Box
              flex="1"
              textAlign="left"
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
            >
              <Text
                fontSize="2xl"
                fontWeight="bold"
                // bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
                // bgClip="text"
                px={["2px", "2px", "4px", "6px"]}
              >
                Stats
              </Text>
              <HStack
                justifyContent="space-between"
                width="100%"
                px={["2px", "2px", "4px", "6px"]}
                alignItems="center"
              >
                {/* <Icon as={BsCalendar} boxSize={5} color="green" /> */}
                <Text>Date</Text>
                <Text>{new Date(file.createdAt).toDateString()}</Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                width="100%"
                px={["2px", "2px", "4px", "6px"]}
                alignItems="center"
              >
                {/* <Icon as={BsInfoSquare} boxSize={5} color="green" /> */}
                <Text>Type</Text>
                <Text>{file.fileType}</Text>
              </HStack>
              <HStack
                justifyContent="space-between"
                width="100%"
                px={["2px", "2px", "4px", "6px"]}
                alignItems="center"
              >
                {/* <Icon as={BsDownload} boxSize={5} color="green" /> */}
                <Text>Downloads</Text>
                <Text>
                  {file.downloads && file.downloads.length > 0
                    ? file.downloads.length
                    : 0}
                </Text>
              </HStack>
            </Box>
          </Flex>
        </Stack>

        <Features headingSize="2xl" />

        {/* Ad 1 */}
        {/* <Image src="/images/upper_ad.png" width="100%" my={6} /> */}
        {/* Ad 2 */}
        {/* <Image src="/images/bottom_ad.jpg" width="100%" my={6} /> */}
      </Stack>
    </>
  );
}
