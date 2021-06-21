import { Image,Text,Spacer,Box, Flex, Heading,Center } from "@chakra-ui/react";
import DownloadCard from "components/DownloadCard";
import Page from "components/layout/Page";
import nameFormatter from "utils/nameFormatter";

export default function download({ file }) {
  const fileName = file.fileName && nameFormatter(file.fileName);

  return (
    <>
      <Page
        description={"Download the uploaded files at Dogefiles"}
        image={"/images/Dogefiles.png"}
        title={`${
          file.fileName ? fileName : "File does not exists"
        } - Dogefiles`}
      >
      
      <Box w="100%" p={4} display={["none","none","block"]} visibility={"hidden"}>
      <Center>
      This is the Box for pc add
      </Center>
    </Box>


        <Flex py={[1, 2, 2, 6]}>
           <Image display={["none","none","block"]} visibility={"hidden"} src="/images/side_ad.jpg" /> 
          
        
          
          <Box
            paddingRight={["2%"]}
            width={["100%", "70%"]}
          >
         
              {file && file.fileName ? (
                <DownloadCard file={file} />
              ) : (
                <Heading my="auto">The download link does not exists</Heading>
              )}
          </Box>
        
      
           <Image display={["none","none","block"]} visibility="hidden" src="/images/side_ad.jpg" /> 
        </Flex>
      

      </Page>
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
