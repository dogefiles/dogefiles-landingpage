const isEnvDev = process.env.NODE_ENV === "development";

export const HOST_URL = isEnvDev
  ? process.env.HOST_URL_DEV
  : process.env.HOST_URL;

export const APP_URL = isEnvDev
  ? "https://app.dogefiles.io"
  : "https://app.dogefiles.io";

export const SERVER_URL = isEnvDev
  ? "http://localhost:5000"
  : "https://api.dogefiles.io";

export const ADSENSE_PUB_ID = process.env.ADSENSE_PUB_ID;

export const NEXT_PUBLIC_GOOGLE_ANALYTICS =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const CONTENT_API_KEY = process.env.CONTENT_API_KEY;
export const BLOG_URL = process.env.BLOG_URL;
