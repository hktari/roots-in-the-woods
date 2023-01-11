import React from 'react'

import aboutImg from '../../images/festival-night1.jpeg';
import aboutImgTwo from '../../images/stereo-black-white.jpg';

type Props = {}

const AboutSection = (props: Props) => {
    return (

        <section className="o-section c-about">
            <h2 className="o-section__title">Reggae and Dub Festival</h2>

            <div className="row">
                <div className="o-section__col">
                    <p className="o-section__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni possimus nobis odio, voluptate vel enim dolorem dolores non vitae rem quos provident quas itaque nesciunt quibusdam mollitia, quisquam eveniet.</p>
                </div>
                <div className="o-section__col o-section_col--full-width-mobile">
                    <img src={aboutImg} alt="" className="o-section__img" />
                </div>
                <div className="o-section__col">
                    <p className="o-section__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni possimus nobis odio, voluptate vel enim dolorem dolores non vitae rem quos provident quas itaque nesciunt quibusdam mollitia, quisquam eveniet.</p>
                </div>
                <div className="o-section__col o-section_col--full-width-mobile">
                    <img src={aboutImgTwo} alt="" className="o-section__img" />
                </div>
            </div>

        </section>)
}

export default AboutSection