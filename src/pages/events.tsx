import React from 'react'
import Layout from '../components/layout/layout'

import { graphql, HeadFC, PageProps } from "gatsby"
import EventItem from '../components/event-item'

type Props = {}

const EventsPage = ({ data }: PageProps<Queries.EventsPageQuery>) => {
    return (
        <Layout>
            <h1 className='mt-4 c-page__title'>Events</h1>
            <div className='c-events-list'>
                {data?.allFacebook?.nodes.map(node => node.data?.map(event => (
                    <div className="c-events-list__item my-3">
                        <EventItem event={event} />
                    </div>
                )))}
            </div>
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