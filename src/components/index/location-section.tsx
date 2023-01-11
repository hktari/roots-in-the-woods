import React from 'react'

import locationImg from '../../images/festival-location-topdown.jpg'

type Props = {}

const LocationSection = (props: Props) => {
    return (
        <div className="o-section">
            <h2 className="o-section__title">
                <i className="bi bi-geo-alt-fill fs-3 me-2"></i>
                Where ?
            </h2>

            <div className="row">
                <div className="o-section__col">
                    <p className='o-section__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, fuga facere cupiditate rem blanditiis distinctio?</p>
                    <button className='btn btn-primary w-100 btn-lg'><a className='text-white text-decoration-none' href="https://goo.gl/maps/TjAbVy584FnfvFth8">Show on map</a></button>

                </div>

                <div className="o-section__col o-section_col--full-width-mobile">
                    <img className="o-section__img" src={locationImg} alt="" />
                </div>
            </div >
        </div >
    )
}

export default LocationSection