import { Box } from "@chakra-ui/react";
import Hero from "components/layout/Hero";
import Features from "components/layout/Features";
import Pricing from "components/layout/Pricing";
import Testimonials from "components/layout/Testimonials";
import Page from "components/layout/Page";
import Faq from "components/layout/FAQ";

export default function Home() {
  //  <Head>
  //   <title>Secure cloud storage for everyone - Dogefiles</title>
  //   <meta
  //     name="description"
  //     content="Create a free Dogefiles account and get upto 20GB free. We are here to spread joy among every individual."
  //   ></meta>
  //   <link rel="canonical" href="https://dogefiles.io"></link>

  //   <meta name="format-detection" content="telephone=no"></meta>
  //   <meta
  //     property="og:title"
  //     content="Secure cloud storage for everyone - Dogefiles"
  //   ></meta>
  //   <meta
  //     property="og:description"
  //     content="Create a free Dogefiles account and get upto 20GB free. We are here to spread joy among every individual."
  //   ></meta>
  //   <meta property="og:image" name="og:image" content="Image Link"></meta>
  //   <meta name="og:url" content="https://dogefiles.io"></meta>

  //   <meta name="twitter:site" content="@dogefiles"></meta>

  //   <meta name="google-site-verification" content="your id"></meta>
  // </Head>
  return (
    <>
      <Page
        description={
          "Create a free Dogefiles account and get upto 20GB free. We are here to spread joy among every individual."
        }
        image={"/images/banner.png"}
        title={"Secure cloud storage for everyone - Dogefiles"}
      >
        <Box mb={8} w="full">
          <Hero />
          <Features />
          <Testimonials />
          <Pricing />
          <Faq/>
        </Box>
      </Page>
    </>
  );
}
