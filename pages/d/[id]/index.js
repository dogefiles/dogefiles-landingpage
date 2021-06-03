import { Image, Flex, Heading } from "@chakra-ui/react";
import DownloadCard from "components/DownloadCard";

export default function download({ file }) {
  return (
    <>
      <Flex py={[1, 2, 2, 6]}>
        <Image src="https://i.postimg.cc/3W0dVjMc/side-ad.png" flex="1" />
        {file && file.fileName ? (
          <DownloadCard file={file} />
        ) : (
          <Heading my="auto">The download link does not exists</Heading>
        )}

        <Image src="https://i.postimg.cc/3W0dVjMc/side-ad.png" flex="1" />
      </Flex>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`${process.env.SERVER_URL}/S3/objectInfo/${id}`);

  const data = await res.json();
  return {
    props: {
      file: data,
    },
  };
}
