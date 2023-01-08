import * as React from "react"
import { graphql, HeadFC, PageProps } from "gatsby"

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

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
    <main>
      {data?.allContentfulPost?.nodes?.map(post => (<PostItem key={post.id} post={post} />))}
    </main>
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