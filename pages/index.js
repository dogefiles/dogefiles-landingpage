import { Box } from "@chakra-ui/react";
import Hero from "components/layout/Hero";
import Features from "components/layout/Features";
import Pricing from "components/layout/Pricing";
import Testimonials from "components/layout/Testimonials";
import Page from "components/layout/Page";
import Faq from "components/layout/FAQ";

export default function Home() {
  return (
    <>
      <Page
        image={"/images/Dogefiles.png"}
        title={"Secure cloud storage for everyone - Dogefiles"}
      >
        <Box mb={8} w="full">
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <Faq />
        </Box>
      </Page>
    </>
  );
}
