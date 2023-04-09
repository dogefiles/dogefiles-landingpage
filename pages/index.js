import { Box } from "@chakra-ui/react";
import Hero from "components/layout/Hero";
import FreeUpload from "components/layout/FreeUpload";
import Features from "components/layout/Features";
import Pricing from "components/layout/Pricing";
import Testimonials from "components/layout/Testimonials";
import Page from "components/layout/Page";
import Faq from "components/layout/FAQ";
import BlogSection from "components/layout/BlogSection";

export default function Home() {
  return (
    <>
      <Page
        image={"/images/Dogefiles.png"}
        title={"Secure cloud storage for everyone - Dogefiles"}
      >
        <Box mb={8} w="full">
          <FreeUpload />
          <Hero />
          <Features />
          <Testimonials />
          {/* <Pricing />  We don't need it yet */}
          {/* <Pricing /> */}

          {/* Ezoic - faq - mid_content */}
          <div id="ezoic-pub-ad-placeholder-103"> </div>
          {/* End Ezoic - faq - mid_content */}
          <Faq />
        </Box>
      </Page>
    </>
  );
}
