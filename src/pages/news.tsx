import React from 'react'
import Layout from '../components/layout/layout'
import { graphql, HeadFC, PageProps } from "gatsby"
import PostItem from '../components/post-item'


type Props = {}

const NewsPage = ({ data }: PageProps<Queries.NewsPageQuery>) => {
    return (
        <Layout>
            {data?.allContentfulPost?.nodes?.map(post => (<PostItem key={post.id} post={post} />))}

        </Layout>)
}

export default NewsPage


export const query = graphql`
  query NewsPage {
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