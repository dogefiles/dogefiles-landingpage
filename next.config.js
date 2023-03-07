module.exports = {
  images: {
    domains: ["static.ghost.org", "images.unsplash.com"],
  },
  target: "serverless",
  async redirects() {
    return [
      {
        source: '/ads.txt',
        destination: 'https://srv.adstxtmanager.com/46379/dogefiles.io',
        permanent: true,
      },
    ]
  }
};
