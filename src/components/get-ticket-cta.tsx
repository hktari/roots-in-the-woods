import React from 'react'

type Props = {}

import soundSystemImage from '../images/soundsystem.jpg';

const GetTicketCta = (props: Props) => {
    return (
        <div className="c-section c-section--no-spacing-mobile">
            <div className="row">
                <div className="col px-0">
                    <div className='c-get-ticket-cta'>
                        <img className='c-get-ticket-cta__image' src={soundSystemImage} alt="sound system" />
                        <button className="c-get-ticket-cta__btn c-button-link">
                            <a href="https://fienta.com/roots-in-the-woods-2023">
                                GET TICKET
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetTicketCta