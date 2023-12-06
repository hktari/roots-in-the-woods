export interface NavigationItem {
  title: string;
  url: string;
}

const navigationItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Lineup",
    url: "/lineup/2024",
  },
  {
    title: "Mission",
    url: "/mission",
  },
  {
    title: "Tickets",
    url: "https://fienta.com/roots-in-the-woods-2024",
  },
  {
    title: "Map",
    url: "/map",
  },
] as NavigationItem[];

export default navigationItems;
