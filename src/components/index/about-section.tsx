import React from 'react'

import aboutImg from '../../images/festival-night1.jpeg';
import aboutImgTwo from '../../images/stereo-black-white.jpg';

type Props = {}

const AboutSection = (props: Props) => {
    return (
        <section className='c-section'>
            <div className="row">
                <div className="col-12 col-md-6 mt-3 mt-md-0">
                    <h2 className="c-section__title">Reggae and Dub Festival</h2>
                    <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni possimus nobis odio, voluptate vel enim dolorem dolores non vitae rem quos provident quas itaque nesciunt quibusdam mollitia, quisquam eveniet.</p>
                </div>
                <div className="col-12 col-md-6 mt-3 mt-md-0 px-0">
                    <img src={aboutImg} alt="" className="img-fluid" />
                </div>
            </div>
            <div className="row mt-md-5">
                <div className="col-12 col-md-6 mt-3 mt-md-0 px-4 order-md-2">
                    <p className="fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni possimus nobis odio, voluptate vel enim dolorem dolores non vitae rem quos provident quas itaque nesciunt quibusdam mollitia, quisquam eveniet.</p>
                </div>
                <div className="col-12 col-md-6 mt-3 mt-md-0 px-0 order-md-1">
                    <img src={aboutImgTwo} alt="" className="img-fluid" />
                </div>
            </div>

        </section>)
}

export default AboutSection