import { Image, Flex, Heading } from "@chakra-ui/react";
import DownloadCard from "components/DownloadCard";
import Page from "components/layout/Page";

export default function download({ file }) {
  console.log(file);
  return (
    <>
      <Page
        description={"Download the uploaded files at Dogefiles"}
        image={"/images/Dogefiles.png"}
        title={`${
          file.fileName ? file.fileName : "File does not exists"
        } - Dogefiles`}
      >
        <Flex py={[1, 2, 2, 6]}>
          <Image src="https://i.postimg.cc/3W0dVjMc/side-ad.png" flex="1" />
          {file && file.fileName ? (
            <DownloadCard file={file} />
          ) : (
            <Heading my="auto">The download link does not exists</Heading>
          )}

          <Image src="https://i.postimg.cc/3W0dVjMc/side-ad.png" flex="1" />
        </Flex>
      </Page>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  // const res = await fetch(`${process.env.SERVER_URL}/S3/objectInfo/${id}`);
  const res = await fetch(
    `https://dogefiles-server.herokuapp.com/S3/objectInfo/${id}`
  );
  console.log("THE RES ====>", res);

  const data = await res.json();
  console.log("THE DATA ====>", data);
  return {
    props: {
      file: data,
    },
  };
}
