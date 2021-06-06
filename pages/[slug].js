import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
import Page from "components/layout/Page";

export default function blog_post({ post }) {
  return (
    <Page
      description={post.custom_excerpt}
      image={post.feature_image}
      title={post.title}
    >
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
    </Page>
  );
}

export const getStaticProps = async context => {
  const contentApiKey = process.env.CONTENT_API_KEY;
  const blogUrl = process.env.BLOG_URL;
  const res = await fetch(
    `${blogUrl}/ghost/api/v3/content/posts/slug/${context.params.slug}/?key=${contentApiKey}`
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
  const contentApiKey = process.env.CONTENT_API_KEY;
  const blogUrl = process.env.BLOG_URL;
  try {
    const res = await fetch(
      `${blogUrl}/ghost/api/v3/content/posts/?key=${contentApiKey}`
    );

    const posts = await res.json();

    const slugs = posts.posts.map(post => post.slug);
    const paths = slugs.map(slug => ({ params: { slug: slug } }));

    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    return { paths: [], fallback: false };
  }
};
