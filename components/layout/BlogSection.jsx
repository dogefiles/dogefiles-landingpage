import { Heading, Grid } from "@chakra-ui/react";
import posts from "./dummyPosts.json";
import PostCard from "components/PostCard";

export default function BlogSection() {
  return (
    <>
      <Heading as={"h2"} size="3xl" mb={[4, 4, 6, 8]} textAlign="center">
        Recent Blogs
      </Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {posts.slice(0, 6).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
}
