import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import NewsItem from "../components/news-item";
import AboutSection from "../components/index/about-section";
import LocationSection from "../components/index/location-section";
import ReggaeSeperator from "../components/reggae-seperator";
import ActivitiesSection from "../components/index/activities-section";
import InfoSection from "../components/index/info-section";
import GetTicketCta from "../components/get-ticket-cta";
import FollowUsSection from "../components/follow-us-section";
import WhenSection from "../components/index/when-section";
import PromoVideoSection from "../components/index/promo-video-section";
import { useHeaderContext } from "../context/header-context";
import SEO from "../components/seo";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
  return (
    <>
      <AboutSection />

      <PromoVideoSection url={data.promoVideo.nodes[0].video?.url!} />

      <div className=" d-md-none">
        <WhenSection />
      </div>

      <LocationSection />

      <div className="d-none d-md-block pt-5">
        <WhenSection />
      </div>

      <ActivitiesSection activities={data.activities} />

      <hr className="d-md-none border-5 my-5" />

      <InfoSection items={data.infoItems} images={data.infoItemImages} />

      <GetTicketCta />

      <FollowUsSection />
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO />;

export const query = graphql`
  query IndexPage {
    allPosts: allContentfulPost {
      nodes {
        id
        title
        node_locale
        text {
          raw
        }
        thumbnail {
          id
          url
          title
        }
        gallery {
          id
          url
        }
      }
    }
    promoVideo: allContentfulPromoVideo(limit: 1) {
      nodes {
        video {
          title
          url
        }
      }
    }
    infoItems: allInfoItemsJson {
      edges {
        node {
          id
          imageName: image
          description
          title
        }
      }
    }
    infoItemImages: allFile(
      filter: { absolutePath: { glob: "**/images/info-items/**" } }
    ) {
      nodes {
        childImageSharp {
          original {
            width
            height
            src
          }
          gatsbyImageData(width: 768)
          fixed {
            originalName
          }
        }
      }
    }
    activities: allContentfulActivity {
      totalCount
      edges {
        node {
          title
          image {
            filename
            gatsbyImageData(width: 636)
          }
          id
          description
        }
      }
    }
  }
`;
