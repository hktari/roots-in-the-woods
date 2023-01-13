import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/layout";
import PostItem from "../components/post-item";
import AboutSection from "../components/index/about-section";
import LocationSection from "../components/index/location-section";
import ReggaeSeperator from "../components/reggae-seperator";
import ActivitiesSection from "../components/index/activities-section";
import InfoSection from "../components/index/info-section";
import GetTicketCta from "../components/get-ticket-cta";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {

  return (
    <Layout>

      <br />

      <AboutSection />

      <br />

      <LocationSection />

      <div className="d-md-none">
        <ReggaeSeperator />
      </div>

      <ActivitiesSection />

      <br />

      <InfoSection />

      <br />

      <GetTicketCta />


      <br />
      <br />

    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Roots in the Woods</title>


export const query = graphql`
  query IndexPage {
    allContentfulPost {
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
}`