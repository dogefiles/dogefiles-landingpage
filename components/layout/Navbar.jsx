import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import { FiMenu, FiX, FiChevronDown, FiChevronRight } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { APP_URL } from "global/envs";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  return (
    <Flex justifyContent="center">
      <Box
        position={"fixed"}
        top={"0"}
        width="100%"
        // maxWidth="1536px" its old max width dont remove this line
        maxWidth="1400px"
        zIndex={"2"}
      >
        <Flex
          bg={useColorModeValue("white", "gray.800")}
          color={useColorModeValue("gray.600", "white")}
          minH={"60px"}
          py={{ base: 2 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <FiX w={3} h={3} /> : <FiMenu w={5} h={5} />}
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
              mx={4}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            alignItems="center"
          >
            <Box display={["block", "block", "none", "none"]}>
              {/* <NextImage
                src="/images/logo.png"
                width="50px"
                height="50px"
                onClick={() => router.push("/")}
              /> */}
              <Image
                src="/images/dogefiles_logo.png"
                onClick={() => router.push("/")}
              />
            </Box>
            <Flex display={{ base: "none", md: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
            alignItems="center"
          >
            {/* If you want the to be in side of Sign In Button */}
            {/* <NextImage
              src="/images/logo.png"
              width="50px"
              height="50px"
              onClick={() => router.push("/")}
            /> */}
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={`${APP_URL}/signin`}
            >
              Sign In
            </Button>
            <Button
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={"primary.400"}
              href={`${APP_URL}/signup`}
              _hover={{
                bg: "primary.300",
              }}
            >
              Sign Up
            </Button>
            <Box pr={[2, 2, 2, 6]}>
              <ThemeToggle />
            </Box>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </Flex>
  );
}

const DesktopNav = () => {
  const router = useRouter();
  return (
    <Stack
      direction={"row"}
      spacing={4}
      paddingRight={"48px"}
      alignItems="center"
    >
      {/* <NextImage
        src="/images/logo.png"
        width="50px"
        height="50px"
        onClick={() => router.push("/")}
      /> */}
      <Image
        src="/images/dogefiles_logo.png"
        width="11rem"
        onClick={() => router.push("/")}
      />
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href}
                fontSize={"sm"}
                fontWeight={500}
                color={useColorModeValue("gray.600", "gray.200")}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("gray.800", "white"),
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={useColorModeValue("white", "gray.800")}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={FiChevronRight} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {/* <NextImage src="/images/logo.png" width="50px" height="50px" /> */}
      {/* If you want it to be inside hamburger menu */}
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={FiChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map(child => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  // {
  //   label: "Home",
  //   // children: [
  //   //   {
  //   //     label: "Explore Design Work",
  //   //     subLabel: "Trending Design to inspire you",
  //   //     href: "#",
  //   //   },
  //   //   {
  //   //     label: "New & Noteworthy",
  //   //     subLabel: "Up-and-coming Designers",
  //   //     href: "#",
  //   //   },
  //   // ],
  //   href: "/",
  // },
  {
    label: "Features",
    // children: [
    //   {
    //     label: "Job Board",
    //     subLabel: "Find your dream design job",
    //     href: "#",
    //   },
    //   {
    //     label: "Freelance Projects",
    //     subLabel: "An exclusive list for contract work",
    //     href: "#",
    //   },
    // ],
    href: "/#features",
  },
  {
    label: "Testimonials",
    href: "/#testimonials",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
  // {
  //   label: "Blog",
  //   href: "https://www.dogefiles.co",
  // },
  {
    label: "FAQ",
    href: "/#faq",
  },
];
