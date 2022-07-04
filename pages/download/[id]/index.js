import { Image, Flex, Heading } from "@chakra-ui/react";
import DownloadCard from "components/DownloadCard";
import Page from "components/layout/Page";
import nameFormatter from "utils/nameFormatter";
import { SERVER_URL } from "global/envs";
import Error from "next/error";
import Head from "next/head";

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
        <Head>
          {/* New pop */}
          <script
            data-cfasync="false"
            src="//dba9ytko5p72r.cloudfront.net/?tyabd=948540"
          ></script>
          <script data-cfasync="false" src="/pop.js"></script>

          {/* old pop */}
          {/* <script
            data-cfasync="false"
            src="//dw55pg05c2rl5.cloudfront.net/?cgpwd=948540"
          ></script> */}
          <script
            data-cfasync="false"
            src="//dw55pg05c2rl5.cloudfront.net/?cgpwd=948543"
          ></script>
        </Head>
        <Flex py={[1, 2, 2, 6]} flexDir="column">
          {/* <Image src="/images/side_ad.jpg" /> */}
          <Flex
            flexDir={"column"}
            justifyContent="center"
            alignItems={"center"}
            mb="6"
            width={["100%"]}
          >
            <Flex width={["100%", "100%", "80%", "50%"]}>
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `
          atOptions = {
            'key' : 'e4176cde5c7a653fe9b1c6dea79cdc6d',
            'format' : 'iframe',
            'height' : 90,
            'width' : 728,
            'params' : {}
          };
          document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.topdisplayformat.com/e4176cde5c7a653fe9b1c6dea79cdc6d/invoke.js"></scr' + 'ipt>');
          `,
                }}
              />

              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `atOptions = {
		'key' : 'e4176cde5c7a653fe9b1c6dea79cdc6d',
		'format' : 'iframe',
		'height' : 90,
		'width' : 728,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.topdisplayformat.com/e4176cde5c7a653fe9b1c6dea79cdc6d/invoke.js"></scr' + 'ipt>');`,
                }}
              ></script>
            </Flex>
          </Flex>
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
    errorCode = 500;
    data = null;
  }

  return {
    props: {
      errorCode,
      data,
    },
  };
}
