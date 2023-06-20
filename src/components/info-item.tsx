import React from 'react'

type InfoItemProps = {
    info: any
}

const InfoItem = ({ info }: InfoItemProps) => {
    return (
        <div className='card rounded-0'>
            <img className="card-img-top img-fluid" height='250px' src={info.image} alt={info.title} />
            <div className="card-body">
                <h5 className="card-title fw-bold">{info.title}</h5>
                <p className="card-text fs-5">{info.description}</p>
            </div>
        </div>
    )
}

export default InfoItem