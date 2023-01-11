import React from 'react'

import locationImg from '../../images/festival-location-topdown.jpg'

type Props = {}

const LocationSection = (props: Props) => {
    return (
        <section className='mt-4'>

            <div className="row">
                <div className="col-12 col-md-6 px-md-4">
                    <h2 className="h1">
                        <i className="bi bi-geo-alt-fill fs-3 me-2"></i>
                        Where ?
                    </h2>
                    <p className='fs-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, fuga facere cupiditate rem blanditiis distinctio?</p>
                    <button className='btn btn-primary w-100 btn-lg'><a className='text-white text-decoration-none' href="https://goo.gl/maps/TjAbVy584FnfvFth8">Show on map</a></button>
                </div>

                <div className="col-12 col-md-6 px-0 mt-3 mt-md-0">
                    <img className="img-fluid" src={locationImg} alt="" />
                </div>
            </div >
        </section >
    )
}

export default LocationSection