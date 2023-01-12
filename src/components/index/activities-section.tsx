import React from 'react'

type Props = {}

import activity3Image from '../../images/activity-3.jpg'
import activity4Image from '../../images/activity-4.jpg'
import activity5Image from '../../images/activity-5.jpg'
import activity6Image from '../../images/activity-6.jpg'
import ActivityItem from '../activity-item'
import InfoItem from '../info-item'


const ActivitiesSection = (props: Props) => {

    const data = {
        activities: [
            {
                id: '76caa6f7-31bd-4dfb-af62-405b426b5d01',
                title: 'Circus Corner',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti, suscipit quisquam facilis accusamus in.',
                image: activity3Image
            },
            {
                id: '1cf96e08-b0ce-4cef-b742-72bccbec7236',
                title: 'African Drumming Workshop',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In non pariatur omnis, est quis quaerat voluptates, facere itaque optio nesciunt alias similique? Labore, nesciunt et.',
                image: activity4Image
            },
            {
                id: '51a59522-3a88-4009-9ad2-2e461c49e9c1',
                title: 'Divination with Pendulums Workshop',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, iusto!',
                image: activity5Image
            },
            {
                id: '6eaa82b0-15f2-4e7b-8d4c-91adaa974103',
                title: 'Workshop with the Sacred Sound',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus deleniti, suscipit quisquam facilis accusamus in.',
                image: activity6Image
            },
        ]
    }

    return (
        <section>
            <h2 className="h1">
                Activities
            </h2>

            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {data.activities.map((activity, idx) => (
                        <div className="carousel-item active" data-bs-interval="3000">
                            <ActivityItem activity={activity} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

export default ActivitiesSection