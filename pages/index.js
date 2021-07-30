import { Heading, Box, Grid } from "@chakra-ui/react";
import Hero from "components/layout/Hero";
import Features from "components/layout/Features";
import Pricing from "components/layout/Pricing";
import Testimonials from "components/layout/Testimonials";
import Page from "components/layout/Page";
import Faq from "components/layout/FAQ";
import { BLOG_URL, CONTENT_API_KEY } from "global/envs";
import PostCard from "components/PostCard";

export default function Home({posts}) {
  return (
    <>
      <Page
        image={"/images/Dogefiles.png"}
        title={"Secure cloud storage for everyone - Dogefiles"}
      >
        <Box mb={8} w="full">
          <Hero />
          <Features />
          <Testimonials />
          {/* <Pricing />  We don't need it yet */}
          <Pricing />
          {/* Blog */}
          <Heading as={"h2"} size="3xl" mb={[4, 4, 6, 8]} textAlign="center">Recent Blogs</Heading>
          <Grid
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
            gap={6}
          >
            {posts.posts.slice(0, 6).map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </Grid>
          <Faq />
        </Box>
      </Page>
    </>
  );
}

export const getStaticProps = async context => {
  const contentApiKey = CONTENT_API_KEY;
  const blogUrl = BLOG_URL;

  const res = await fetch(
    `${blogUrl}/ghost/api/v3/content/posts/?key=${contentApiKey}`
  );

  let posts = await res.json();

  if (posts.errors) {
    console.log("There was an error");
    posts = { posts: [], meta: {}, error: true };
  }

  return {
    props: {
      posts,
    },
  };
};