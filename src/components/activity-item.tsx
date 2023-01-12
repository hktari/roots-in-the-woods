import React from 'react'

type ActivityItemProps = {
    activity: any
}

const ActivityItem = ({ activity }: ActivityItemProps) => {
    return (
        <div className='c-card'>
            <img height='350px' src={activity.image} alt={activity.title} className="img-fluid" />
        </div>
    )
}

export default ActivityItem