// log the pageview with their URL
import { NEXT_PUBLIC_GOOGLE_ANALYTICS } from "global/envs";

export const pageview = url => {
  window.gtag("config", NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }) => {
  window.gtag("event", action, params);
};
