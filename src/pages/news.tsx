import React from 'react'
import Layout from '../components/layout/layout'
import { graphql, HeadFC, PageProps } from "gatsby"
import NewsItem from '../components/news-item'


type Props = {}

const NewsPage = ({ data }: PageProps<Queries.NewsPageQuery>) => {
  return (
    <Layout>
      <h1 className='c-page__title'>News</h1>
      {data?.allContentfulPost?.nodes?.map(post => (
        <div className="mt-5">
          <NewsItem key={post.id} post={post} />
        </div>
      ))}
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
        updatedAt
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