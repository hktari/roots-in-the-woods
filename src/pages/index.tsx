import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Layout from "../components/layout";

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {

  const PostItem = ({ post }: ContentfulPost) => {

    const textAsHtml = documentToHtmlString(JSON.parse(post?.text?.raw))

    return (
      <>
        <h1>{post?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: textAsHtml }}></div>
        <div className="c-post__thumbnail">
          <img src={post?.thumbnail?.url} alt={post?.thumbnail?.title} />
        </div>
      </>
    )
  }


  return (
    <Layout>
      <>
        {data?.posts?.nodes?.map(post => (<PostItem key={post.id} post={post} />))}
      </>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Roots in the Woods</title>


export const query = graphql`
 query IndexPage {
  posts: allContentfulPost(filter: {node_locale: {eq: "sl"}}) {
    edges {
      node {
        id
        title
        node_locale
        gallery {
          id
          url
          title
        }
        thumbnail {
          id
          url
          title
        }
        text {
          raw
        }
      }
    }
  }
}`