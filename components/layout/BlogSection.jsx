import { Heading, Grid } from "@chakra-ui/react";
// import posts from "./dummyPosts.json";
import PostCard from "components/PostCard";

// const getBasicInfo = blogs =>
//   blogs
//     .slice(0, 6)
//     .map(({ id, slug, title, feature_image, reading_time, updated_at }) => ({
//       id,
//       slug,
//       title,
//       feature_image,
//       reading_time,
//       updated_at,
//     }));

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
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </>
  );
}
