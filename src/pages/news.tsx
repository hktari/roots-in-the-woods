import React from 'react'
import Layout from '../components/layout/layout'
import { graphql, HeadFC, PageProps } from "gatsby"
import NewsItem from '../components/news-item'


type Props = {}

const NewsPage = ({ data }: PageProps<Queries.NewsPageQuery>) => {
  return (
    <Layout>
      <h1 className='c-page__title'>News</h1>
      {data?.allContentfulPost?.edges?.map(edge => (
        <div className="mt-5">
          <NewsItem key={edge?.node?.id} post={edge?.node} />
        </div>
      ))}
    </Layout>)
}

export default NewsPage


export const query = graphql`
  query NewsPage {
    allContentfulPost{
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
          updatedAt
        }
      }
    }
}`