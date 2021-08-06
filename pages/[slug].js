import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
import Page from "components/layout/Page";
import { BLOG_URL, CONTENT_API_KEY } from "global/envs";

export default function blog_post({ post }) {
  return (
    <Page
      description={post.excerpt}
      image={post?.feature_image ? post.feature_image : ""}
      title={post.title}
      date={post.updated_at}
    >
      <Box my={8}>
        <Heading as="h1" size="2xl" width="90%" textAlign="center" mx="auto">
          {post.title}
        </Heading>
        {post.custom_excerpt && (
          <Text width="90%" textAlign="center" mx="auto" my={2}>
            {post.custom_excerpt}
          </Text>
        )}
        {post?.feature_image && (
          <Image src={post.feature_image} alt={post.title} px="4rem" />
        )}
      </Box>
      <Box
        dangerouslySetInnerHTML={{ __html: post.html }}
        css={{
          "h2, h3, h4": {
            fontWeight: 700,
            marginTop: "56px",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          a: {
            textDecoration: "underline",
            color: "#FF1A75",
          },
          p: {
            marginTop: "15px",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
          },
          figure: {
            marginTop: "22px",
          },
          figcaption: {
            textAlign: "center",
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
          "ul, ol": {
            marginTop: "14px",
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
  const contentApiKey = CONTENT_API_KEY;
  const blogUrl = BLOG_URL;
  const res = await fetch(
    `${blogUrl}/ghost/api/v3/content/posts/slug/${context.params.slug}/?key=${contentApiKey}&limit=all`
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
  const contentApiKey = CONTENT_API_KEY;
  const blogUrl = BLOG_URL;
  try {
    const res = await fetch(
      `${blogUrl}/ghost/api/v3/content/posts/?key=${contentApiKey}&limit=all`
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
