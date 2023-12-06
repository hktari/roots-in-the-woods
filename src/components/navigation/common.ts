export interface NavigationItem {
  title: string;
  relativeUrl: string;
}

const navigationItems = [
  {
    title: "Home",
    relativeUrl: "/",
  },
  {
    title: "Lineup",
    relativeUrl: "/lineup/2024",
  },
  {
    title: "Mission",
    relativeUrl: "/mission",
  },
  {
    title: "Tickets",
    relativeUrl: "https://fienta.com/roots-in-the-woods-2024",
  },
  {
    title: "Map",
    relativeUrl: "/map",
  },
] as NavigationItem[];

export default navigationItems;
