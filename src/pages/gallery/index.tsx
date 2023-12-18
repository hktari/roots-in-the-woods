import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { makeGroupsOf } from "../../util/format";

type Props = {};

const GalleryPage = ({ data }: PageProps<Queries.GalleryPageQuery>) => {
  const GalleryItem = ({
    id,
    title,
    bannerMobile,
  }: Queries.GalleryPageQuery["allContentfulGallery"]["edges"][0]["node"]) => {
    return (
      <Link to={`/gallery/${id}`}>
        <div className="card text-bg-dark">
          <GatsbyImage
            image={bannerMobile?.gatsbyImageData!}
            className="card-img"
            alt={bannerMobile?.title!}
          />
        </div>
      </Link>
    );
  };

  return (
    <div className="container">
      <h1 className="c-page__title mb-2">Gallery</h1>

      {makeGroupsOf(data.allContentfulGallery.edges, 3).map((groups) => (
        <div className="row">
          {groups.map((edge) => (
            <div className="col-12 col-md-4 p-2">
              <GalleryItem {...edge.node} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;

export const query = graphql`
  query GalleryPage {
    allContentfulGallery {
      edges {
        node {
          bannerMobile {
            gatsbyImageData(width: 432)
            title
          }
          id
          title
        }
      }
    }
  }
`;
