import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const ContextProvider = createContext();

const WebContextProvider = ({ children }) => {
  const [webSiteData, setwebsiteData] = useState();
  const [slugs, setSlugs] = useState({});
  const [SeoData, setSeoData] = useState([]);
  const [IsNavBar, setIsNavBar] = useState({});
  const [pageTitles, setPageTitles] = useState({});
  const [sectionTitles, setSectionTitles] = useState([]);
  const [dataToArrange, setDataToArrange] = useState([]);
  const [menu, setMenu] = useState([]);

  const [services, setServices] = useState([]);
  const [roomsDetails, setRoomsDetails] = useState([]);
  const [reviewsArr, setReviewsArr] = useState([]);
  const [banner, setBanner] = useState([]);

  const [domain, setDomain] = useState("gde22606912");
  const [ndid, setNdid] = useState("527a3ab5-3f70-437c-b6f7-9a7a26251dbf");

  const ContactAPI = async (
    userEmail,
    userName,
    userPhone,
    userMessage,
    Description
  ) => {
    try {
      const { data } = await axios.post(
        `https://eazotel.eazotel.com/api/dashboard/editcontact`,
        {
          Domain: domain, // Replace with your actual domain value
          email: userEmail,
          Name: userName,
          Contact: userPhone,
          Subject: userMessage,
          Description: Description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.Status) {
        alert("message sended");
        return true;
      } else {
        alert("somethin wrong!");
      }
    } catch (error) {
      // console.log(error);
    }
  };

  const fetchWebSiteDatas = async () => {
    const { data } = await axios.get(
      `https://nexon.eazotel.com/cms/get/website/${domain}`
    );
    if (data.Status) {
      setwebsiteData({ ...data.WebsiteData });
      setSlugs({ ...data.WebsiteData.Slugs });
      setSeoData([...data.WebsiteData.SeoOptimisation]);
      setIsNavBar({ ...data.WebsiteData.Navbar });
      setPageTitles({ ...data.WebsiteData.PagesTitles });
      setSectionTitles({ ...data.WebsiteData.SectionTitles });
      setServices([...data.WebsiteData.Services]);
      setBanner([...data.WebsiteData.Banner]);
      setDataToArrange([...data.WebsiteData.DataToarrange]);
      setMenu([...data.WebsiteData.Menu]);
    }
  };

  const fetchRooms = async () => {
    try {
      const { data } = await axios.get(
        `https://nexon.eazotel.com/room/get/room/website/${domain}`
      );

      setRoomsDetails([...data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReviews = async () => {
    try {
      const { data } = await axios.get(
        `https://nexon.eazotel.com/google/reviews/website/eb112233`
      );
      setReviewsArr([...data.Reviews]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWebSiteDatas();
    fetchRooms();
    fetchReviews();
  }, []);

  return (
    <ContextProvider.Provider
      value={{
        webSiteData,
        slugs,
        SeoData,
        IsNavBar,
        pageTitles,
        sectionTitles,
        services,
        domain,
        ndid,
        roomsDetails,
        reviewsArr,
        banner,
        dataToArrange,
        menu,
        ContactAPI,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default WebContextProvider;

export const useWebContext = () => {
  return useContext(ContextProvider);
};
