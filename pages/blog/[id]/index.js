import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";

const contentApiKey = process.env.CONTENT_API_KEY;
const blogUrl = process.env.BLOG_URL;

export default function blog_post({ post }) {
  return (
    <>
      <Box my={8}>
        <Heading as="h1" size="2xl" width="90%" textAlign="center" mx="auto">
          {post.title}
        </Heading>
        <Text width="90%" textAlign="center" mx="auto" my={2}>
          {post.custom_excerpt}
        </Text>
        <Image src={post.feature_image} alt={post.title} px="4rem" />
      </Box>
      <Box
        dangerouslySetInnerHTML={{ __html: post.html }}
        css={{
          h2: {
            fontSize: "28px",
            fontWeight: 700,
            marginTop: "56px",
            // width: "50%",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          a: {
            textDecoration: "underline",
            color: "#FF1A75",
          },
          p: {
            fontSize: "18px",
            marginTop: "15px",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          figure: {
            marginTop: "22px",
          },
          figcaption: {
            fontSize: "12px",
            textAlign: "center",
            // width: "50%",
            paddingTop: "15px",
            marginLeft: "auto",
            marginRight: "auto",
          },
          img: {
            // width: "80%",
            // marginLeft: "auto",
            // marginRight: "auto",
            paddingLeft: "4rem",
            paddingRight: "4rem",
          },
          ul: {
            marginTop: "14px",
            // width: "50%",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "30px",
            paddingRight: "30px",
          },
          pre: {
            backgroundColor: "black",
            color: "white",
            borderRadius: "6px",
            padding: "1rem",
            // width: "50%",
            width: "90%",
            overflow: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          },
        }}
      ></Box>
    </>
  );
}

export const getStaticProps = async context => {
  const res = await fetch(
    `${blogUrl}/ghost/api/v3/content/posts/${context.params.id}/?key=${contentApiKey}`
  );

  const data = await res.json();
  const post = data.posts[0];
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `${blogUrl}/ghost/api/v3/content/posts/?key=${contentApiKey}`
  );

  const posts = await res.json();

  if (!posts.posts) return;

  const ids = posts.posts.map(post => post.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
