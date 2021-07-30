import { Box, Badge, Image } from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";

export default function PostCard({ post }) {
  return (
    <NextLink href={`/${post.slug}`}>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        _hover={{ boxShadow: "lg", cursor: "pointer" }}
        // onClick={() => router.push(`/${post.slug}`)}
      >
        {post?.feature_image && (
          <Image src={post.feature_image} alt={post.title} />
          // <NextImage
          //   src={post.feature_image}
          //   alt={post.title}
          //   width="1024px"
          //   height="768px"
          // />
        )}

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
    </NextLink>
  );
}