import {
  Heading,
  Text,
  Link,
  UnorderedList,
  Box,
  ListItem,
} from "@chakra-ui/react";
import Page from "components/layout/Page";

export default function terms_of_service() {
  return (
    <Page
      description={
        "Dogefiles allows you to upload for free, share and download. As mentioned in our terms, We don't take ownership of any of your content."
      }
      image={"/images/Dogefiles.png"}
      title={"dmca - Dogefiles"}
    >
      <Heading>DMCA Copyright Infringement</Heading>
      <Text>
        We are stictly against copyright material and to report copyright
        infringement email us at{" "}
        <Link href="mailto:dmca.dogefiles@gmail.com" color="blue">
          dmca.dogefiles@gmail.com
        </Link>
      </Text>
      <Text>Please allow us upto 3 days or sometimes a week to process.</Text>
    </Page>
  );
}
