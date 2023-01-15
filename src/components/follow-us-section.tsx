import React from 'react'
import Layout from './layout/layout'

type Props = {}

const FollowUsSection = (props: Props) => {
    return (
        <div className="c-section c-follow-us">
            <h2 className="c-follow-us__title">
                <span>FOLLOW</span> 
                <br className='d-md-none'/> 
                <span className='ms-md-2'>US</span> 
            </h2>

            <ul className="c-follow-us__social-list">
                <li className="c-follow-us__social-list-item">
                    <a href="https://www.facebook.com/rootsinthewoodsfestival/">
                        <i className="bi bi-facebook"></i>
                    </a>
                </li>
                <li className="c-follow-us__social-list-item">
                    <a href="https://www.instagram.com/rootsinthewoodsfestival">
                        <i className="bi bi-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default FollowUsSection