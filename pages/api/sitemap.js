import posts_slug from "public/posts-slug.json";
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  try {
    // An array with your links
    const links = [];
    posts_slug.map(slug => {
      links.push({
        url: `/${slug}`,
        changefreq: "weekly",
        priority: 0.9,
      });
    });

    // Add other pages
    const pages = [
      "/careers",
      "/contact-us",
      "/about-us",
      "/blog",
      "/privacy-policy",
      "/terms-of-service",
      "/help-center",
    ];
    pages.map(url => {
      links.push({
        url,
        changefreq: "weekly",
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${req.headers.host}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then(data => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
