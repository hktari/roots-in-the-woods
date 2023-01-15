import React from 'react'
import Layout from '../components/layout/layout'

import { graphql, HeadFC, PageProps } from "gatsby"
import EventItem from '../components/event-item'

type Props = {}

const EventsPage = ({ data }: PageProps<Queries.EventsPageQuery>) => {
    return (
        <Layout>
            {data?.allFacebook?.nodes.map(node => node.data?.map(event => (
                <EventItem event={event} />
            )))}
        </Layout>
    )
}

export default EventsPage

export const query = graphql`
query EventsPage {
    allFacebook {
        nodes {
            data {
                id
                name
                description
                attending_count
                start_time
                cover {
                    id
                    source
                    offset_y
                    offset_x
                } 
            }
        }
  }
}`