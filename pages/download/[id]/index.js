import { Image, Flex, Heading } from "@chakra-ui/react";
import DownloadCard from "components/DownloadCard";
import Page from "components/layout/Page";
import nameFormatter from "utils/nameFormatter";
import { SERVER_URL } from "global/envs";
import Error from "next/error";

export default function download({ errorCode, data }) {
  if (errorCode !== 200) return <Error statusCode={errorCode} />;

  const { file, user } = data;
  const fileName = file.fileName && nameFormatter(file.fileName);

  return (
    <>
      <Page
        description={"Download the uploaded files at Dogefiles"}
        image={"/images/Dogefiles.png"}
        title={`${
          file.fileName ? fileName : "File does not exists"
        } - Dogefiles`}
        index={false}
      >
        <Flex py={[1, 2, 2, 6]}>
          {/* <Image src="/images/side_ad.jpg" /> */}
          {file && file.fileName ? (
            <DownloadCard file={file} user={user} />
          ) : (
            <Heading my="auto">The download link does not exists</Heading>
          )}

          {/* <Image src="/images/side_ad.jpg" /> */}
        </Flex>
      </Page>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;
  let errorCode;
  let data;
  try {
    const response = await fetch(`${SERVER_URL}/S3/objectInfo/${id}`);
    errorCode = response.status;
    data = await response.json();
    if (errorCode !== 200) {
      data = null;
    }
  } catch (err) {
    data = null;
  }

  return {
    props: {
      errorCode,
      data,
    },
  };
}
