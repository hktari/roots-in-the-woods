import React from 'react'

type SocialListProps = {
    classModifiers?: string
}

const SocialList = ({ classModifiers }: SocialListProps) => {

    return (
        <ul className={`c-social-list ${classModifiers}`}>
            <li className="c-social-list__item">
                <a href="https://www.facebook.com/rootsinthewoodsfestival/">
                    <i className="bi bi-facebook"></i>
                </a>
            </li>
            <li className="c-social-list__item">
                <a href="https://www.instagram.com/rootsinthewoodsfestival">
                    <i className="bi bi-instagram"></i>
                </a>
            </li>
        </ul>
    )
}

export default SocialList