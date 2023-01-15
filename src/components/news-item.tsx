import React from 'react'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { formatDatetimeStr } from '../util/format';

const NewsItem = ({ post }: ContentfulPost) => {

    const textAsHtml = documentToHtmlString(JSON.parse(post?.text?.raw))

    const formatDatetimeStr = (datetimeStr: string) => {
        const datetime = new Date(datetimeStr)
        return datetime.toLocaleString('sl')
    }
    return (

        <a className="c-news-item" href={`/news/${post?.id}`}>
            <div className="c-news-item__text-container">
                <h1 className='c-news-item__title'>{post?.title}</h1>
                <div className="c-news-item__datetime">
                    {formatDatetimeStr(post?.updatedAt)}
                </div>
                <div className='c-news-item__text' dangerouslySetInnerHTML={{ __html: textAsHtml }}></div>
            </div>
            <div className="c-news-item__thumbnail">
                <img src={post?.thumbnail?.url} alt={post?.thumbnail?.title} />
            </div>
        </a>
    )
}


export default NewsItem