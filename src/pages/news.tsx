import React from 'react'
import Layout from '../components/layout/layout'
import { graphql, HeadFC, PageProps } from "gatsby"
import NewsItem from '../components/news-item'


type Props = {}

const NewsPage = ({ data }: PageProps<Queries.NewsPageQuery>) => {
  return (
    <>
      <h1 className='c-page__title'>News</h1>
      <div className="c-list">
        {data?.allContentfulPost?.edges?.map(edge => (
          <div className="c-list__item">
            <NewsItem key={edge?.node?.id} post={edge?.node} />
          </div>
        ))}
      </div>
    </>)
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