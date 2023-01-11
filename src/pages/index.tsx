import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout/layout";
import PostItem from "../components/post-item";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {

  return (
    <Layout>
      <button className="btn btn-primary btn-lg">hello</button>

      <i className="bi-alarm"></i>
      {data?.allContentfulPost?.nodes?.map(post => (<PostItem key={post.id} post={post} />))}
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