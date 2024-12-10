/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    query TicketsNavItem {\n      ticketsNavItem :contentfulNavigationItem(title: {regex: \"/.*ticket.*/i\"}) {\n        url\n      }\n  }": types.TicketsNavItemDocument,
    "\n    query BannerImages {\n      contentfulBanner {\n        imageMobile {\n          gatsbyImageData(height: 765, width: 765)\n        }\n        imageDesktop {\n          gatsbyImageData(height: 915, layout: FULL_WIDTH)\n        }\n      }\n    }\n  ": types.BannerImagesDocument,
    "\n      query ContentfulFrontPageIntroductionSection {\n        contentfulFrontPageIntroductionSection {\n          images {\n            gatsbyImageData(width: 776)\n            description\n          }\n          title\n          text {\n            raw\n          }\n        }\n      }\n    ": types.ContentfulFrontPageIntroductionSectionDocument,
    "\n    query FrontPageDateSection {\n      dateSection: contentfulFrontPageSectionDate {\n        backgroundImage {\n          url\n        }\n        startDate\n        endDate\n      }\n    }": types.FrontPageDateSectionDocument,
    "\n      query NavigationItems {\n        contentfulNavigation {\n          items {\n            title\n            url\n            navigationItems {\n              title\n              url\n            }\n          }\n        }\n      }\n    ": types.NavigationItemsDocument,
    "\n    query SiteMetadata {\n      site {\n        siteMetadata {\n          title\n          description\n          siteUrl\n          referrer\n        }\n      }\n    }\n  ": types.SiteMetadataDocument,
    "\n  query FAQPage {\n    contentfulFaq {\n      faqText {\n        raw\n      }\n      title\n    }\n  }\n": types.FaqPageDocument,
    "\n  query GalleryPage {\n    allContentfulGallery {\n      edges {\n        node {\n          bannerMobile {\n            gatsbyImageData(width: 432)\n            title\n          }\n          id\n          title\n        }\n      }\n    }\n  }\n": types.GalleryPageDocument,
    "\n  query GalleryDetailPage($id: String) {\n    albums: allFacebook {\n      nodes {\n        data {\n          id\n          name\n          photos {\n            data {\n              id\n              webp_images {\n                source\n                height\n                width\n              }\n            }\n            paging {\n              next\n              cursors {\n                before\n                after\n              }\n            }\n          }\n        }\n      }\n    }\n\n    contentfulGallery(id: { eq: $id }) {\n      bannerDesktop: banner {\n        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.6)\n        title\n      }\n      bannerMobile {\n        gatsbyImageData(height: 421)\n        title\n      }\n      description\n      eventDate\n      eventDateEnd\n      facebookAlbumId\n      id\n      title\n      lineup {\n        url\n      }\n    }\n  }\n": types.GalleryDetailPageDocument,
    "\n  query IndexPage {\n    allPosts: allContentfulPost {\n      nodes {\n        id\n        title\n        node_locale\n        text {\n          raw\n        }\n        thumbnail {\n          id\n          url\n          title\n        }\n        gallery {\n          id\n          url\n        }\n      }\n    }\n    promoVideo: allContentfulPromoVideo(limit: 1) {\n      nodes {\n        video {\n          title\n          url\n        }\n      }\n    }\n    infoItems: allInfoItemsJson {\n      edges {\n        node {\n          id\n          imageName: image\n          description\n          title\n        }\n      }\n    }\n    infoItemImages: allFile(\n      filter: { absolutePath: { glob: \"**/images/info-items/**\" } }\n    ) {\n      nodes {\n        childImageSharp {\n          original {\n            width\n            height\n            src\n          }\n          gatsbyImageData(width: 768)\n          fixed {\n            originalName\n          }\n        }\n      }\n    }\n    activities: allContentfulActivity {\n      totalCount\n      edges {\n        node {\n          title\n          image {\n            filename\n            gatsbyImageData(width: 636)\n          }\n          id\n          description\n        }\n      }\n    }\n  }\n": types.IndexPageDocument,
    "\n  query AllArtistsPage {\n    allArtistsJson(sort: {order: ASC, fields: order}) {\n      nodes {\n        country\n        stage\n        images\n        links\n        title\n        order\n        id\n      }\n    }\n\n    allImageSharp {\n      nodes {\n        gatsbyImageData(width: 512)\n        fixed {\n          originalName\n        }\n      }\n    }\n\n    noImagePlaceholder: allImageSharp(\n      filter: { fixed: { originalName: { regex: \"/logo/\" } } }\n    ) {\n      nodes {\n        gatsbyImageData(width: 512)\n        fixed {\n          originalName\n        }\n      }\n    }\n  }\n": types.AllArtistsPageDocument,
    "\n  query MapPage {\n    contentfulMap {\n      mapImage {\n        gatsbyImageData(layout: CONSTRAINED)\n        title\n      }\n    }\n  }\n": types.MapPageDocument,
    "\n  query MerchPage {\n    merch: allContentfulMerch {\n      edges {\n        node {\n          image {\n            gatsbyImageData(aspectRatio: 1, width: 460, cropFocus: CENTER)\n            filename\n          }\n          price\n          title\n          id\n          description {\n            description\n          }\n        }\n      }\n    }\n  }\n": types.MerchPageDocument,
    "\n  query MerchDetailPage($id: String) {\n    contentfulMerch(id: { eq: $id }) {\n      id\n      image {\n        gatsbyImageData\n        filename\n      }\n      price\n      title\n      description: description {\n        description\n      }\n    }\n  }\n": types.MerchDetailPageDocument,
    "\n  query NewsPage {\n    allContentfulPost{\n      edges {\n        node {\n          id\n          title\n          node_locale\n          gallery {\n            id\n            url\n            title\n          }\n          thumbnail {\n            id\n            url\n            title\n          }\n          text {\n            raw\n          }\n          updatedAt\n        }\n      }\n    }\n}": types.NewsPageDocument,
    "\n    query NewsDetailPage($id: String) {\n        contentfulPost(id: {eq: $id}) {\n            title\n            updatedAt\n            text {\n                raw\n            }\n            gallery {\n                id\n                title\n                url\n            }\n        }\n    }": types.NewsDetailPageDocument,
    "\n  query LineupDetailPage($id: String!) {\n    contentfulLineup(id: { eq: $id }) {\n      artists {\n        countryOfOrigin\n        name\n        photo {\n          gatsbyImageData(width: 512)\n        }\n        socialMediaLink\n        stage {\n          id\n          title\n          order\n        }\n      }\n      id\n      name\n    }\n\n    noImagePlaceholder: allImageSharp(\n      filter: { fixed: { originalName: { regex: \"/logo/\" } } }\n    ) {\n      nodes {\n        gatsbyImageData(width: 512)\n        fixed {\n          originalName\n        }\n      }\n    }\n  }\n": types.LineupDetailPageDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query TicketsNavItem {\n      ticketsNavItem :contentfulNavigationItem(title: {regex: \"/.*ticket.*/i\"}) {\n        url\n      }\n  }"): (typeof documents)["\n    query TicketsNavItem {\n      ticketsNavItem :contentfulNavigationItem(title: {regex: \"/.*ticket.*/i\"}) {\n        url\n      }\n  }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query BannerImages {\n      contentfulBanner {\n        imageMobile {\n          gatsbyImageData(height: 765, width: 765)\n        }\n        imageDesktop {\n          gatsbyImageData(height: 915, layout: FULL_WIDTH)\n        }\n      }\n    }\n  "): (typeof documents)["\n    query BannerImages {\n      contentfulBanner {\n        imageMobile {\n          gatsbyImageData(height: 765, width: 765)\n        }\n        imageDesktop {\n          gatsbyImageData(height: 915, layout: FULL_WIDTH)\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query ContentfulFrontPageIntroductionSection {\n        contentfulFrontPageIntroductionSection {\n          images {\n            gatsbyImageData(width: 776)\n            description\n          }\n          title\n          text {\n            raw\n          }\n        }\n      }\n    "): (typeof documents)["\n      query ContentfulFrontPageIntroductionSection {\n        contentfulFrontPageIntroductionSection {\n          images {\n            gatsbyImageData(width: 776)\n            description\n          }\n          title\n          text {\n            raw\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query FrontPageDateSection {\n      dateSection: contentfulFrontPageSectionDate {\n        backgroundImage {\n          url\n        }\n        startDate\n        endDate\n      }\n    }"): (typeof documents)["\n    query FrontPageDateSection {\n      dateSection: contentfulFrontPageSectionDate {\n        backgroundImage {\n          url\n        }\n        startDate\n        endDate\n      }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n      query NavigationItems {\n        contentfulNavigation {\n          items {\n            title\n            url\n            navigationItems {\n              title\n              url\n            }\n          }\n        }\n      }\n    "): (typeof documents)["\n      query NavigationItems {\n        contentfulNavigation {\n          items {\n            title\n            url\n            navigationItems {\n              title\n              url\n            }\n          }\n        }\n      }\n    "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query SiteMetadata {\n      site {\n        siteMetadata {\n          title\n          description\n          siteUrl\n          referrer\n        }\n      }\n    }\n  "): (typeof documents)["\n    query SiteMetadata {\n      site {\n        siteMetadata {\n          title\n          description\n          siteUrl\n          referrer\n        }\n      }\n    }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FAQPage {\n    contentfulFaq {\n      faqText {\n        raw\n      }\n      title\n    }\n  }\n"): (typeof documents)["\n  query FAQPage {\n    contentfulFaq {\n      faqText {\n        raw\n      }\n      title\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GalleryPage {\n    allContentfulGallery {\n      edges {\n        node {\n          bannerMobile {\n            gatsbyImageData(width: 432)\n            title\n          }\n          id\n          title\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query GalleryPage {\n    allContentfulGallery {\n      edges {\n        node {\n          bannerMobile {\n            gatsbyImageData(width: 432)\n            title\n          }\n          id\n          title\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GalleryDetailPage($id: String) {\n    albums: allFacebook {\n      nodes {\n        data {\n          id\n          name\n          photos {\n            data {\n              id\n              webp_images {\n                source\n                height\n                width\n              }\n            }\n            paging {\n              next\n              cursors {\n                before\n                after\n              }\n            }\n          }\n        }\n      }\n    }\n\n    contentfulGallery(id: { eq: $id }) {\n      bannerDesktop: banner {\n        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.6)\n        title\n      }\n      bannerMobile {\n        gatsbyImageData(height: 421)\n        title\n      }\n      description\n      eventDate\n      eventDateEnd\n      facebookAlbumId\n      id\n      title\n      lineup {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GalleryDetailPage($id: String) {\n    albums: allFacebook {\n      nodes {\n        data {\n          id\n          name\n          photos {\n            data {\n              id\n              webp_images {\n                source\n                height\n                width\n              }\n            }\n            paging {\n              next\n              cursors {\n                before\n                after\n              }\n            }\n          }\n        }\n      }\n    }\n\n    contentfulGallery(id: { eq: $id }) {\n      bannerDesktop: banner {\n        gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2.6)\n        title\n      }\n      bannerMobile {\n        gatsbyImageData(height: 421)\n        title\n      }\n      description\n      eventDate\n      eventDateEnd\n      facebookAlbumId\n      id\n      title\n      lineup {\n        url\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query IndexPage {\n    allPosts: allContentfulPost {\n      nodes {\n        id\n        title\n        node_locale\n        text {\n          raw\n        }\n        thumbnail {\n          id\n          url\n          title\n        }\n        gallery {\n          id\n          url\n        }\n      }\n    }\n    promoVideo: allContentfulPromoVideo(limit: 1) {\n      nodes {\n        video {\n          title\n          url\n        }\n      }\n    }\n    infoItems: allInfoItemsJson {\n      edges {\n        node {\n          id\n          imageName: image\n          description\n          title\n        }\n      }\n    }\n    infoItemImages: allFile(\n      filter: { absolutePath: { glob: \"**/images/info-items/**\" } }\n    ) {\n      nodes {\n        childImageSharp {\n          original {\n            width\n            height\n            src\n          }\n          gatsbyImageData(width: 768)\n          fixed {\n            originalName\n          }\n        }\n      }\n    }\n    activities: allContentfulActivity {\n      totalCount\n      edges {\n        node {\n          title\n          image {\n            filename\n            gatsbyImageData(width: 636)\n          }\n          id\n          description\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query IndexPage {\n    allPosts: allContentfulPost {\n      nodes {\n        id\n        title\n        node_locale\n        text {\n          raw\n        }\n        thumbnail {\n          id\n          url\n          title\n        }\n        gallery {\n          id\n          url\n        }\n      }\n    }\n    promoVideo: allContentfulPromoVideo(limit: 1) {\n      nodes {\n        video {\n          title\n          url\n        }\n      }\n    }\n    infoItems: allInfoItemsJson {\n      edges {\n        node {\n          id\n          imageName: image\n          description\n          title\n        }\n      }\n    }\n    infoItemImages: allFile(\n      filter: { absolutePath: { glob: \"**/images/info-items/**\" } }\n    ) {\n      nodes {\n        childImageSharp {\n          original {\n            width\n            height\n            src\n          }\n          gatsbyImageData(width: 768)\n          fixed {\n            originalName\n          }\n        }\n      }\n    }\n    activities: allContentfulActivity {\n      totalCount\n      edges {\n        node {\n          title\n          image {\n            filename\n            gatsbyImageData(width: 636)\n          }\n          id\n          description\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AllArtistsPage {\n    allArtistsJson(sort: {order: ASC, fields: order}) {\n      nodes {\n        country\n        stage\n        images\n        links\n        title\n        order\n        id\n      }\n    }\n\n    allImageSharp {\n      nodes {\n        gatsbyImageData(width: 512)\n        fixed {\n          originalName\n        }\n      }\n    }\n\n    noImagePlaceholder: allImageSharp(\n      filter: { fixed: { originalName: { regex: \"/logo/\" } } }\n    ) {\n      nodes {\n        gatsbyImageData(width: 512)\n        fixed {\n          originalName\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllArtistsPage {\n    allArtistsJson(sort: {order: ASC, fields: order}) {\n      nodes {\n        country\n        stage\n        images\n        links\n        title\n        order\n        id\n      }\n    }\n\n    allImageSharp {\n      nodes {\n        gatsbyImageData(width: 512)\n        fixed {\n          originalName\n        }\n      }\n    }\n\n    noImagePlaceholder: allImageSharp(\n      filter: { fixed: { originalName: { regex: \"/logo/\" } } }\n    ) {\n      nodes {\n        gatsbyImageData(width: 512)\n        fixed {\n          originalName\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MapPage {\n    contentfulMap {\n      mapImage {\n        gatsbyImageData(layout: CONSTRAINED)\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query MapPage {\n    contentfulMap {\n      mapImage {\n        gatsbyImageData(layout: CONSTRAINED)\n        title\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MerchPage {\n    merch: allContentfulMerch {\n      edges {\n        node {\n          image {\n            gatsbyImageData(aspectRatio: 1, width: 460, cropFocus: CENTER)\n            filename\n          }\n          price\n          title\n          id\n          description {\n            description\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MerchPage {\n    merch: allContentfulMerch {\n      edges {\n        node {\n          image {\n            gatsbyImageData(aspectRatio: 1, width: 460, cropFocus: CENTER)\n            filename\n          }\n          price\n          title\n          id\n          description {\n            description\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MerchDetailPage($id: String) {\n    contentfulMerch(id: { eq: $id }) {\n      id\n      image {\n        gatsbyImageData\n        filename\n      }\n      price\n      title\n      description: description {\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  query MerchDetailPage($id: String) {\n    contentfulMerch(id: { eq: $id }) {\n      id\n      image {\n        gatsbyImageData\n        filename\n      }\n      price\n      title\n      description: description {\n        description\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query NewsPage {\n    allContentfulPost{\n      edges {\n        node {\n          id\n          title\n          node_locale\n          gallery {\n            id\n            url\n            title\n          }\n          thumbnail {\n            id\n            url\n            title\n          }\n          text {\n            raw\n          }\n          updatedAt\n        }\n      }\n    }\n}"): (typeof documents)["\n  query NewsPage {\n    allContentfulPost{\n      edges {\n        node {\n          id\n          title\n          node_locale\n          gallery {\n            id\n            url\n            title\n          }\n          thumbnail {\n            id\n            url\n            title\n          }\n          text {\n            raw\n          }\n          updatedAt\n        }\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query NewsDetailPage($id: String) {\n        contentfulPost(id: {eq: $id}) {\n            title\n            updatedAt\n            text {\n                raw\n            }\n            gallery {\n                id\n                title\n                url\n            }\n        }\n    }"): (typeof documents)["\n    query NewsDetailPage($id: String) {\n        contentfulPost(id: {eq: $id}) {\n            title\n            updatedAt\n            text {\n                raw\n            }\n            gallery {\n                id\n                title\n                url\n            }\n        }\n    }"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query LineupDetailPage($id: String!) {\n    contentfulLineup(id: { eq: $id }) {\n      artists {\n        countryOfOrigin\n        name\n        photo {\n          gatsbyImageData(width: 512)\n        }\n        socialMediaLink\n        stage {\n          id\n          title\n          order\n        }\n      }\n      id\n      name\n    }\n\n    noImagePlaceholder: allImageSharp(\n      filter: { fixed: { originalName: { regex: \"/logo/\" } } }\n    ) {\n      nodes {\n        gatsbyImageData(width: 512)\n        fixed {\n          originalName\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query LineupDetailPage($id: String!) {\n    contentfulLineup(id: { eq: $id }) {\n      artists {\n        countryOfOrigin\n        name\n        photo {\n          gatsbyImageData(width: 512)\n        }\n        socialMediaLink\n        stage {\n          id\n          title\n          order\n        }\n      }\n      id\n      name\n    }\n\n    noImagePlaceholder: allImageSharp(\n      filter: { fixed: { originalName: { regex: \"/logo/\" } } }\n    ) {\n      nodes {\n        gatsbyImageData(width: 512)\n        fixed {\n          originalName\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;