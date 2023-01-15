import React from 'react'

import locationImg from '../../images/festival-location-topdown.jpg'

type Props = {}

const LocationSection = (props: Props) => {
    return (
        <section className='c-section'>
            <div className="row">
                <div className="col-12 col-md-6 px-md-4">
                    <h2 className="c-section__title">
                        <i className="bi bi-geo-alt-fill fs-3 me-2"></i>
                        Where ?
                    </h2>
                    <p className='c-section__text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, fuga facere cupiditate rem blanditiis distinctio?</p>
                    <button className='btn btn-primary w-100 btn-lg c-button-link mt-4'>
                        <a href="https://goo.gl/maps/TjAbVy584FnfvFth8">
                            SHOW ON MAP
                        </a>
                    </button>
                </div>

                <div className="col-12 col-md-6 px-0 mt-3 mt-md-0">
                    <img className="img-fluid" src={locationImg} alt="" />
                </div>
            </div >
        </section >
    )
}

export default LocationSection