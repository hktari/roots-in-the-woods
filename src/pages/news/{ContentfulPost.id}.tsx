import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { graphql, HeadFC, PageProps } from "gatsby"


type Props = {}

const NewsDetailPage = ({ data }: PageProps<Queries.NewsDetailPageQuery>) => {

    const textAsHtml = documentToHtmlString(JSON.parse(data.contentfulPost?.text?.raw))

    const formatDatetimeStr = (datetimeStr: string) => {
        const datetime = new Date(datetimeStr)
        return datetime.toLocaleString('sl')
    }

    return (
        <div>
            <h2 className="c-news-detail-page__title c-page__title">
                {data.contentfulPost?.title}
            </h2>
            <span className='c-news-detail-page__datetime'>{formatDatetimeStr(data.contentfulPost?.updatedAt)}</span>

            <div className="c-news-detail-page__content" dangerouslySetInnerHTML={{ __html: textAsHtml }}>
            </div>

            <div className="c-news-detail-page__gallery c-floating-layout clearfix">
                {data.contentfulPost?.gallery?.map(image => (
                    <div key={image.id} className="c-floating-layout__item">
                        <img className='c-news-detail-page__image'  src={image.url} alt={image.title} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default NewsDetailPage

export const query = graphql`
    query NewsDetailPage($id: String) {
        contentfulPost(id: {eq: $id}) {
            title
            updatedAt
            text {
                raw
            }
            gallery {
                id
                title
                url
            }
        }
    }`