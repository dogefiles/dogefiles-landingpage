import { Text } from "@chakra-ui/react";
import Page from "components/layout/Page";

export default function terms_of_service() {
  return (
    <Page
      description={
        "Dogefiles allows you to upload for free, share and download. As mentioned in our terms, We don't take ownership of any of your content."
      }
      image={"/images/Dogefiles.png"}
      title={"Terms of Service - Dogefiles"}
    >
      <Text>Terms of Service Page</Text>
    </Page>
  );
}
