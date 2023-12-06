export interface NavigationItem {
  title: string;
  relativeUrl: string;
}

const navigationItems = [
  {
    title: "Home",
    relativeUrl: "/",
  },
] as NavigationItem[];

export default navigationItems;
