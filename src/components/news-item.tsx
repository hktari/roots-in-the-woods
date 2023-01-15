import React from 'react'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const NewsItem = ({ post }: ContentfulPost) => {

    const textAsHtml = documentToHtmlString(JSON.parse(post?.text?.raw))

    return (
        <div className="c-news-item">
            <h1 className='c-news-item__title'>{post?.title}</h1>
            <div className='c-news-item__text' dangerouslySetInnerHTML={{ __html: textAsHtml }}></div>
            <div className="c-news-item__thumbnail">
                <img src={post?.thumbnail?.url} alt={post?.thumbnail?.title} />
            </div>
        </div>
    )
}


export default NewsItem