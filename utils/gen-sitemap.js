const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

const content = async () => {
  const res = await fetch(
    "https://ghost-dogefiles.herokuapp.com/ghost/api/v3/content/posts/?key=284a7bfa595c1137a327109d5d"
  );
  const { posts } = await res.json();
  const slugs = posts.map(post => post.slug);
  return JSON.stringify(slugs);
};

content().then(result => {
  fs.writeFile(
    path.join(__dirname, "../public", "posts-slug.json"),
    result,
    err => {
      if (err) {
        console.error(err);
        return;
      }
      //file written successfully
    }
  );
});
