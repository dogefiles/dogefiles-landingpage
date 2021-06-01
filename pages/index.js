import { Box } from "@chakra-ui/react";
import Hero from "components/layout/Hero";
import Features from "components/layout/Features";
import Pricing from "components/layout/Pricing";
import Testimonials from "components/layout/Testimonials";

export default function Home() {
  return (
    <Box mb={8} w="full">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
    </Box>
  );
}
