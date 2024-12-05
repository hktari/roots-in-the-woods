import { useStaticQuery, graphql } from "gatsby";

export interface NavigationItem {
  title: string;
  url?: string;
  navigationItems?: NavigationItem[];
}

export const useNavigation = () => {
  const { contentfulNavigation: navigationItems } =
    useStaticQuery<Queries.NavigationItemsQuery>(graphql`
      query NavigationItems {
        contentfulNavigation {
          items {
            title
            url
            navigationItems {
              title
              url
            }
          }
        }
      }
    `);

  if (!navigationItems?.items) {
    throw new Error(
      "No navigation items found. Please configure navigation in Contentful"
    );
  }

  return navigationItems.items as NavigationItem[];
};
