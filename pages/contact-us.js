import { Box } from "@chakra-ui/react";
import Page from "components/layout/Page";

export default function contact_us() {
  return (
    <Page
      description={
        "Dogefiles is the best free file hosting its absolutely free, You can contact us anytime you want we will be there for you."
      }
      image={"/images/Dogefiles.png"}
      title={"Contact Us - Dogefiles"}
    >
      <Box mt="8">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfbytWw4v6Dr-57Yepmjv0iVN8aoq0RzYOPdetgmELVTIJBfQ/viewform?embedded=true"
          width={["100%", "80%"]}
          height="1080px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </Box>
    </Page>
  );
}
