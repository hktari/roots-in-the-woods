import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

type Props = {
  title: string;
  description: string;
  pathname: string;
  children: React.ReactNode;
};

const SEO = ({ title, description, pathname, children }: Props) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    referrer,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    referrer,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="referrer" content={seo.referrer} />
      {children}
    </>
  );
};

export default SEO;
