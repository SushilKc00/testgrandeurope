import { useContext } from "react";
import { useWebContext } from "../../Context/ContextProvider";

const Nav_Links = () => {
  const { webSiteData, slugs } = useWebContext();
  const slug = Object.values(slugs).map((page) => page.Slug);

  const Links = [
    {
      linkName: " Home",
      isNavBar: true,
      src: "/",
    },
    {
      linkName: "About",
      src: slug[0],
      isNavBar: webSiteData?.Navbar?.About,
    },
    {
      linkName: "Room",
      src: slug[11],
      isNavBar: webSiteData?.Navbar?.Room,
    },
    // {
    //   linkName: "facilities",
    //   src: `/${slug[4]}`,
    //   isNavBar: true,
    // },
    {
      linkName: " Meeting & Event",
      src: "/meeting-events",
      isNavBar: true,
    },
    {
      linkName: " Restaurant",
      src: slug[10],
      isNavBar: webSiteData?.Navbar?.Restaurant,
    },
    {
      linkName: "Gallery",
      src: slug[6],
      // isNavBar: webSiteData?.Navbar?.Gallery,
      isNavBar: true,
    },
    {
      linkName: "Contact",
      src: slug[3],
      isNavBar: webSiteData?.Navbar?.Contact,
    },
  ];

  return Links;
};

export default Nav_Links;

// const Links = [
//   {
//     linkName: " Home",
//     isNavBar: true,
//     src: "/",
//   },
//   {
//     linkName: "About",
//     src: slug[0],
//     isNavBar: webSiteData?.Navbar?.About,
//   },
//   {
//     linkName: "Room",
//     src: slug[11],
//     isNavBar: webSiteData?.Navbar?.Room,
//   },
//   {
//     linkName: "facilities",
//     src: `/${slug[4]}`,
//     isNavBar: true,
//   },
//   {
//     linkName: " Meeting & Event",
//     src: "/meeting-events",
//     isNavBar: true,
//   },
//   {
//     linkName: " Restaurant",
//     src: slug[10],
//     isNavBar: webSiteData?.Navbar?.Restaurant,
//   },
//   {
//     linkName: "Gallery",
//     src: slug[6],
//     isNavBar: webSiteData?.Navbar?.Gallery,
//   },
//   {
//     linkName: "Contact",
//     src: slug[3],
//     isNavBar: webSiteData?.Navbar?.Contact,
//   },
// ];
