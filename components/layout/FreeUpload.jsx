import {
  AspectRatio,
  Box,
  Flex,
  Button,
  forwardRef,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import copyToClipboard from "utils/copyToClipboard";

const first = {
  rest: {
    rotate: "-15deg",
    scale: 0.95,
    x: "-50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "-70%",
    scale: 1.1,
    rotate: "-20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const second = {
  rest: {
    rotate: "15deg",
    scale: 0.95,
    x: "50%",
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: "70%",
    scale: 1.1,
    rotate: "20deg",
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const third = {
  rest: {
    scale: 1.1,
    filter: "grayscale(80%)",
    transition: {
      duration: 0.5,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    scale: 1.3,
    filter: "grayscale(0%)",
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const PreviewImage = forwardRef((props, ref) => {
  return (
    <Box
      bg="white"
      top="0"
      height="100%"
      width="100%"
      position="absolute"
      borderWidth="1px"
      borderStyle="solid"
      rounded="sm"
      borderColor="gray.400"
      as={motion.div}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
      {...props}
      ref={ref}
    />
  );
});

const CopyToClipBoard = ({ value }) => {
  const toast = useToast();

  return (
    <Flex mb={2}>
      <Input value={value} readOnly={true} mr={2} />
      <Button
        onClick={() => {
          copyToClipboard(value);
          toast({ title: "Copied", duration: 1000, status: "success" });
        }}
      >
        Copy
      </Button>
    </Flex>
  );
};

export default function App() {
  const controls = useAnimation();
  const startAnimation = () => controls.start("hover");
  const stopAnimation = () => controls.stop();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const toast = useToast();

  useEffect(() => {
    if (image) handleImageUpload();
  }, [image]);

  const handleImageUpload = async () => {
    if (!image) {
      toast({ title: "Invalid Type", duration: 1000, status: "warning" });
      return;
    }
    if (image.size > 2.2e6) {
      toast({
        title: "Max Size is 2 MB Only",
        duration: 1000,
        status: "warning",
      });
      return;
    }

    const formData = new FormData(); // create a new FormData object from the form

    // append the image file to the form data with the original filename
    formData.append("image", image, image.name);

    const xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://api.imgbb.com/1/upload?expiration=600&key=744e23555063033f752b1be7c30beac0"
    );

    // track upload progress
    xhr.upload.onprogress = e => {
      if (e.lengthComputable) {
        const percentComplete = (e.loaded / e.total) * 100;
        // console.log(percentComplete);
      }
    };
    xhr.onload = () => {
      if (xhr.status === 200) {
        setImageUrl(JSON.parse(xhr.response).data.display_url);
      } else {
        console.error("Upload failed:", xhr.statusText);
      }
    };

    xhr.onerror = () => {
      console.error("Network error!");
    };

    xhr.send(formData);
  };

  return (
    <VStack mt="32" spacing={4}>
      <Heading as={"h2"} size={"3xl"} mb={[14, 14, 16, 20]} textAlign="center">
        Free Image Upload Tool for Everyone
      </Heading>
      <AspectRatio width="72" ratio={1}>
        <Box
          borderColor="gray.300"
          borderStyle="dashed"
          borderWidth="2px"
          rounded="md"
          shadow="sm"
          role="group"
          transition="all 150ms ease-in-out"
          _hover={{
            shadow: "md",
          }}
          as={motion.div}
          initial="rest"
          animate="rest"
          whileHover="hover"
        >
          <Box position="relative" height="100%" width="100%">
            <Box
              position="absolute"
              top="0"
              left="0"
              height="100%"
              width="100%"
              display="flex"
              flexDirection="column"
            >
              <Stack
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justify="center"
                spacing="4"
              >
                <Box height="16" width="12" position="relative">
                  <PreviewImage
                    variants={first}
                    backgroundImage="url('https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg')"
                  />
                  <PreviewImage
                    variants={second}
                    backgroundImage="url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2628&q=80')"
                  />
                  <PreviewImage
                    variants={third}
                    backgroundImage={`url("https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2480&q=80")`}
                  />
                </Box>
                <Stack p="8" textAlign="center" spacing="1">
                  <Heading fontSize="lg" color="gray.700" fontWeight="bold">
                    Drop image here
                  </Heading>
                  <Text fontWeight="light">or click to upload</Text>
                </Stack>
              </Stack>
            </Box>
            <Input
              type="file"
              height="100%"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              opacity="0"
              aria-hidden="true"
              accept="image/*"
              multiple={false}
              onDragEnter={startAnimation}
              onDragLeave={stopAnimation}
              onChange={e => setImage(e.target.files[0])}
            />
          </Box>
        </Box>
      </AspectRatio>
      {imageUrl && <CopyToClipBoard value={imageUrl} />}
    </VStack>
  );
}
