import React from 'react'
import Layout from './layout/layout'
import SocialList from './social-list'

type Props = {}

const FollowUsSection = (props: Props) => {
    return (
        <div className="c-section c-follow-us">
            <h2 className="c-follow-us__title">
                <span>FOLLOW</span>
                <br className='d-md-none' />
                <span className='ms-md-2'>US</span>
            </h2>
            <SocialList />
        </div>
    )
}

export default FollowUsSection