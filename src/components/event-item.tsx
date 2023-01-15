import React from 'react'

type EventItemProps = {
    event: Queries.EventsPageQuery.allFacebook.nodes.data
}

const EventItem = ({ event }: EventItemProps) => {

    const formatEventDatetime = (datetimeStr: string) => {
        const datetime = new Date(datetimeStr)
        return `${datetime.toLocaleDateString('sl')} @ ${datetime.toLocaleTimeString('sl')}`
    }

    return (
        <div className="card">
            <img className="card-image-top" src={event?.cover?.source ?? ''} />
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <h2 className='mb-1'>{event?.name}</h2>
                    <span className='fs-4 fw-bold'>
                        {event?.attending_count}
                        <i className="bi bi-people-fill ms-1"></i>
                    </span>
                </div>
                <p className='text-muted'>{event?.start_time ? formatEventDatetime(event.start_time) : ''}</p>
                <p>{event?.description}</p>
            </div>
        </div>
    )
}

export default EventItem