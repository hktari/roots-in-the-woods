import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/layout";
import PostItem from "../components/post-item";

import aboutImg from '../images/festival-night1.jpeg';
import aboutImgTwo from '../images/stereo-black-white.jpg';

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {

  return (
    <Layout>

      <section className="o-section c-about">
        <h2 className="o-section__title">Reggae and Dub Festival</h2>

        <div className="row">
          <div className="o-section__col">
            <p className="o-section__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni possimus nobis odio, voluptate vel enim dolorem dolores non vitae rem quos provident quas itaque nesciunt quibusdam mollitia, quisquam eveniet.</p>
          </div>
          <div className="o-section__col o-section_col--full-width-mobile">
            <img src={aboutImg} alt="" className="o-section__img" />
          </div>
          <div className="o-section__col">
            <p className="o-section__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni possimus nobis odio, voluptate vel enim dolorem dolores non vitae rem quos provident quas itaque nesciunt quibusdam mollitia, quisquam eveniet.</p>
          </div>
          <div className="o-section__col o-section_col--full-width-mobile">
            <img src={aboutImgTwo} alt="" className="o-section__img" />
          </div>
        </div>

      </section>

      <br />
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