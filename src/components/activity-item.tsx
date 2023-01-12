import React from 'react'

type ActivityItemProps = {
    activity: any
}

const ActivityItem = ({ activity }: ActivityItemProps) => {
    return (
        <div className='card'>
            <img className="card-img-top img-fluid" height='250px' src={activity.image} alt={activity.title} />
            <div className="card-body">
                <p className="card-text fs-5">{activity.description}</p>
            </div>
        </div>
    )
}

export default ActivityItem