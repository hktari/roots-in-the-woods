import React from 'react'

type Props = {}

import soundSystemImage from '../images/soundsystem.jpg';

const GetTicketCta = (props: Props) => {
    return (
        <div className="row">
            <div className="col px-0">
                <div className='c-get-ticket-cta'>
                    <img className='c-get-ticket-cta__image' src={soundSystemImage} alt="sound system" />
                    <button className="c-get-ticket-cta__btn c-button-link">GET TICKET</button>
                </div>
            </div>
        </div>
    )
}

export default GetTicketCta