import React from 'react'
import Layout from '../components/layout/layout'

import { graphql, HeadFC, PageProps } from "gatsby"

type Props = {}

const EventsPage = ({ data }: PageProps<Queries.EventsPageQuery>) => {
    return (
        <Layout>
            {data.allFacebook.nodes.map(event => (
                <>
                    <a href={`https://www.facebook.com/events/${event.id!}`}>
                        <div className="card">
                            <img className="card-image-top" src={event.cover?.source ?? ''} />
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h2>{event.name}</h2>
                                    <span className='fs-4 fw-bold'>
                                        {event.attending_count}
                                        <i className="bi bi-people-fill"></i>
                                    </span>
                                </div>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    </a>
                </>
            ))}
        </Layout>
    )
}

export default EventsPage

export const query = graphql`
query EventsPage {
    allFacebook {
      nodes {
        id
        name
        description
        attending_count
        cover {
          id
          source
          offset_y
          offset_x
        }
      }
    }
  }`