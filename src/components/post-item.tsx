import React from 'react'

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const PostItem = ({ post }: ContentfulPost) => {

    const textAsHtml = documentToHtmlString(JSON.parse(post?.text?.raw))

    return (
        <>
            <h1>{post?.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: textAsHtml }}></div>
            <div className="c-post__thumbnail">
                <img src={post?.thumbnail?.url} alt={post?.thumbnail?.title} />
            </div>
        </>
    )
}


export default PostItem