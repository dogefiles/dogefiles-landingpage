import { Heading, Box, Badge, Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Page from "components/layout/Page";
import NextImage from "next/image";

function PostCard({ post }) {
  const router = useRouter();
  // console.log(post);
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      _hover={{ boxShadow: "lg", cursor: "pointer" }}
      onClick={() => router.push(`/${post.slug}`)}
    >
      <NextImage
        src={post.feature_image}
        alt={post.title}
        width="382px"
        height="auto"
      />
      {/* <Image src={post.feature_image} alt={post.title} /> */}

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {post.slug}
          </Badge>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {post.title}
        </Box>

        <Box as="span" color="gray.600" fontSize="sm">
          {new Date(post.updated_at).toDateString()}{" "}
          <Box as="span" color="gray.600" fontSize="xs">
            • {post.reading_time} min read
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default function blog({ posts }) {
  return (
    <Page
      description={
        "Read the latest news about dogefiles, free file uploading online, smart online storage to backup your photos, files, documents and more."
      }
      image={"/images/Dogefiles.png"}
      title={"Dogefiles Blog: Secure Cloud Storage Solutions Blog"}
    >
      <Heading
        as="h1"
        fontSize={["5xl", "6xl", "7xl"]}
        my={5}
        textAlign="center"
      >
        Blog
      </Heading>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {posts.posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </Grid>
    </Page>
  );
}

export const getStaticProps = async context => {
  const contentApiKey = process.env.CONTENT_API_KEY;
  const blogUrl = process.env.BLOG_URL;

  const res = await fetch(
    `${blogUrl}/ghost/api/v3/content/posts/?key=${contentApiKey}`
  );

  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
