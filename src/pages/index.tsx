import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Layout from "../components/layout/layout";

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
        <button className="btn btn-primary btn-lg">hello</button>
      
        <i className="bi-alarm"></i>
        {data?.allContentfulPost?.nodes?.map(post => (<PostItem key={post.id} post={post} />))}
      </>
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