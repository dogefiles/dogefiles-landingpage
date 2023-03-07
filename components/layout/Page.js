import Head from "next/head";
import { withRouter } from "next/router";
import React from "react";
import { ArticleJsonLd } from "next-seo";
import titleStyle from "utils/title-style";

const Page = ({
  children,
  date,
  description = "Upload and Download files for free, You can keep your files as long as you want, Safest and fastest way to upload.",
  image,
  title = "Free Unlimited Cloud Storage For Everyone - Dogefiles",
  keywords = "best cloud storage, free cloud storage, dogefiles, unlimited cloud storage",
  router,
  index = true,
}) => {
  const domain = "https://dogefiles.io";
  const formattedTitle = titleStyle(title);
  const url = router && router.asPath ? router.asPath : undefined;
  const canonical = url && url === "/" ? domain : domain + url;
  const featuredImage = image.includes("https") ? image : domain + image;

  return (
    <>
      <Head>
        <title>{formattedTitle}</title>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
        <meta
          content={index ? "index, follow" : "noindex, nofollow"}
          name="robots"
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta
          content="/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <link rel="alternate" href={domain} hrefLang="en-us" />
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicons/site.webmanifest" rel="manifest" />
        <link
          color="#5bbad5"
          href="/favicons/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <link href="/favicons/favicon.ico" rel="shortcut icon" />

        {url && <link href={canonical} rel="canonical" />}
        <meta content="en_US" property="og:locale" />
        <meta content={formattedTitle} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonical} property="og:url" />
        <meta content="d0595ef35ba21873" name="yandex-verification" />
        <meta
          content="V9vzMWZXdVw7eTF4OzDrEOYYoriYSehzdIkpQL43_Hw"
          name="google-site-verification"
        />
        {featuredImage && (
          <>
            <meta content={featuredImage} property="og:image" />
            <meta content={description} property="og:image:alt" />
          </>
        )}
        {date && (
          <>
            <meta content="article" property="og:type" />
            <meta content={date} property="article:published_time" />
          </>
        )}

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />

        {/* LinkedIn */}
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@dogefiles" />
        <meta property="twitter:creator" content="@dogefiles" />
        <meta property="twitter:url" content={canonical} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />

        {/* Pinterest */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:site_name" content={domain} />
        <meta property="article:published_time" content={date} />
        <meta property="article:author" content="Dogefiles" />
          
       {/* Ezoic Code Starts */}
	      <script>var ezoicId = 442586;</script>
	      <script type="text/javascript" src="//go.ezoic.net/ezoic/ezoic.js"></script>
       {/* Ezoic Code Ends */}
      </Head>
      {children}
      {date && (
        <ArticleJsonLd
          authorName="Dogefiles"
          dateModified={date}
          datePublished={date}
          description={description}
          images={[featuredImage]}
          publisherLogo="https://dogefiles.io/favicons/android-chrome-192x192.png"
          publisherName="Dogefiles"
          title={formattedTitle}
          url={canonical}
        />
      )}
    </>
  );
};

export default withRouter(Page);
