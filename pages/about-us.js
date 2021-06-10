import { Text } from "@chakra-ui/react";

export default function about_us() {
  return (
    <Page
      description={
        "Dogefiles is a free file uploading site where you can upload and download file at super high speed, backup your photos, files, and earn money."
      }
      image={"/images/Dogefiles.png"}
      title={"About Us - Dogefiles"}
    >
      <Text>About Us Page</Text>
    </Page>
  );
}
