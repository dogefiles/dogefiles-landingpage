// import { Heading, Grid } from "@chakra-ui/react";
// import Page from "components/layout/Page";
// import { BLOG_URL, CONTENT_API_KEY } from "global/envs";
// import PostCard from "components/PostCard";

// export default function blog({ posts }) {
//   return (
//     <Page
//       description={
//         "Read the latest news about dogefiles, free file uploading online, smart online storage to backup your photos, files, documents and more."
//       }
//       image={"/images/Dogefiles.png"}
//       title={"Dogefiles Blog: Secure Cloud Storage Solutions Blog"}
//     >
//       <Heading
//         as="h1"
//         fontSize={["5xl", "6xl", "7xl"]}
//         my={5}
//         textAlign="center"
//       >
//         Blog
//       </Heading>
//       <Grid
//         templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
//         gap={6}
//       >
//         {posts.posts.map(post => (
//           <PostCard key={post.id} post={post} />
//         ))}
//       </Grid>
//     </Page>
//   );
// }

// export const getStaticProps = async context => {
//   const contentApiKey = CONTENT_API_KEY;
//   const blogUrl = BLOG_URL;

//   const res = await fetch(
//     `${blogUrl}/ghost/api/v3/content/posts/?key=${contentApiKey}&limit=all`
//   );

//   let posts = await res.json();

//   if (posts.errors) {
//     console.log("There was an error");
//     posts = { posts: [], meta: {}, error: true };
//   }

//   return {
//     props: {
//       posts,
//     },
//   };
// };
