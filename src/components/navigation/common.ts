import links from "../../data/links";
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
    url: links.tickets,
  },
  {
    title: "Merch",
    url: "/merch",
  },
  {
    title: "Map",
    url: "/map",
  },
  // {
  //   title: "Gallery",
  //   url: "/gallery",
  // },
] as NavigationItem[];

export default navigationItems;
