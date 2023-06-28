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

      <hr className="d-md-none border-5 mt-5" />

      <InfoSection />

      <GetTicketCta />

      <FollowUsSection />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Roots in the Woods</title>;

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
  }
`;
