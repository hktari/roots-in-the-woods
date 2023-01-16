import React from 'react'

import { graphql, HeadFC, PageProps } from "gatsby"


type Props = {}

const NewsDetailPage = ({data} : PageProps<Queries.NewsDetailPageQuery>) => {
    return (
        <div>{JSON.stringify(data)}</div>
    )
}

export default NewsDetailPage

export const query = graphql`
    query NewsDetailPage($id: String) {
        contentfulPost(id: {eq: $id}) {
        title
        text {
            raw
        }
        gallery {
            id
            title
            url
        }
        }
    }`