import React from "react";
import { useWebContext } from "../../Context/ContextProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import wifi from "../../assets/vector icons/wifi.svg";
import roomservice from "../../assets/vector icons/roomservice.svg";
import housekeep from "../../assets/vector icons/housekeep.svg";
import parking from "../../assets/vector icons/parking.svg";
import air from "../../assets/vector icons/air.svg";
import bathroom from "../../assets/vector icons/bathroom.svg";
import pool from "../../assets/vector icons/swimming.svg";
import fitcenter from "../../assets/vector icons/fitness.svg";
import bar from "../../assets/vector icons/bar.svg";
import card from "../../assets/vector icons/card.svg";

import babysit from "../../assets/vector icons/babysitting.svg";
import casino from "../../assets/vector icons/casino.svg";
import childcare from "../../assets/vector icons/childcare.svg";
import concierge from "../../assets/vector icons/concierge.svg";
import confroom from "../../assets/vector icons/conroom.svg";
import currencychange from "../../assets/vector icons/currencychange.svg";
import doctor from "../../assets/vector icons/doctor.svg";
import elec from "../../assets/vector icons/electricity.svg";
import elev from "../../assets/vector icons/elevator.svg";
import evpoint from "../../assets/vector icons/evpoint.svg";
import expcheck from "../../assets/vector icons/expcheck.svg";
import frondesk from "../../assets/vector icons/frontdesk.svg";
import healbeaut from "../../assets/vector icons/healthbeauty.svg";
import helathclub from "../../assets/vector icons/healthclub.svg";
import bathtub from "../../assets/vector icons/bathtub.svg";
import rooftopcafe from "../../assets/vector icons/rooftopcafe.svg";
import security from "../../assets/vector icons/security.svg";
import suncafe from "../../assets/vector icons/suncafe.svg";

export const Amenities = () => {
  const { webSiteData } = useWebContext();
  console.log(webSiteData);
  const AmenityCardDet = [
    {
      Heading: "Free Wifi",
      isTrue: webSiteData?.Facilities.Wifi,
      SubHeading:
        "Wifi is available across the Hotel as well as in the Free WiFi tile and rooms.",
      Icons: wifi,
    },
    {
      Heading: "Room Service",
      isTrue: webSiteData?.Facilities.Room_Service,
      SubHeading:
        "We offer 24/7 room service for making your stay more comfortable.",
      Icons: roomservice,
    },
    {
      Heading: "Daily Housekeeping",
      isTrue: webSiteData?.Facilities.Housekeep,
      SubHeading:
        "We are doing daily housekeeping for making your stay more comfortable.",
      Icons: housekeep,
    },
    {
      Heading: "Free Parking",
      isTrue: webSiteData?.Facilities.Parking,
      SubHeading:
        "When traveling, it’s always very convenient to have a safe base in a hotel with a parking area.",
      Icons: parking,
    },
    {
      Heading: "Air Conditioning",
      isTrue: webSiteData?.Facilities.Conditinoer,
      SubHeading:
        "We offer air conditioner in all room for making your stay more comfortable.",
      Icons: air,
    },
    {
      Heading: "Bathroom",
      isTrue: webSiteData?.Facilities.Wifi,
      SubHeading:
        "Every Room has Attached Bathroom Guest can Take bath and Feel Fresh.",
      Icons: bathroom,
    },
    {
      Heading: "Swimming Pool",
      isTrue: webSiteData?.Facilities.Swimming_Pool,
      SubHeading:
        "We are providing swimming pool facilities you can enjoy and relax in.",
      Icons: pool,
    },
    {
      Heading: "Fitness Center",
      isTrue: webSiteData?.Facilities.Fitness_Center,
      SubHeading: "We provide GYM facilities for exercise.",
      Icons: fitcenter,
    },
    {
      Heading: "Bar",
      isTrue: webSiteData?.Facilities.minibar,
      SubHeading: "Bar is available in our hotel.",
      Icons: bar,
    },
    {
      Heading: "Accept_Cards",
      isTrue: webSiteData?.Facilities.minibar,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: card,
    },
    // {
    //   Heading: "Accept_Cards",
    //   isTrue: webSiteData?.Facilities.Accept_Cards,
    //   SubHeading:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
    //   Icons: ,
    // },
    {
      Heading: "Alchemy",
      isTrue: webSiteData?.Facilities.Alchemy,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: wifi,
    },
    {
      Heading: "Babysitting",
      isTrue: webSiteData?.Facilities.Babysitting,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: babysit,
    },
    {
      Heading: "Board",
      isTrue: webSiteData?.Facilities.Board,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: roomservice,
    },
    {
      Heading: "Casino",
      isTrue: webSiteData?.Facilities.Casino,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: casino,
    },
    {
      Heading: "Child_Care",
      isTrue: webSiteData?.Facilities.Child_Care,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: childcare,
    },
    {
      Heading: "Concierge",
      isTrue: webSiteData?.Facilities.Concierge,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: concierge,
    },
    // {
    //   Heading: "Conference_Hall",
    //   isTrue: webSiteData?.Conference_Hall,
    //   SubHeading:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
    //   Icons: confroom,
    // },
    {
      Heading: "Conference Rooms",
      isTrue: webSiteData?.Facilities.Conference_Rooms,
      SubHeading: "Bar is available in our hotel.",
      Icons: confroom,
    },
    {
      Heading: "Currency Exchange",
      isTrue: webSiteData?.Facilities.Currency_Exchange,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: currencychange,
    },
    {
      Heading: "Doctor",
      isTrue: webSiteData?.Facilities.Doctor,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: doctor,
    },
    {
      Heading: "Electricity",
      isTrue: webSiteData?.Facilities.Electricity,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: elec,
    },
    {
      Heading: "Elevator",
      isTrue: webSiteData?.Facilities.Elevator,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: elev,
    },
    {
      Heading: "Evpoint",
      isTrue: webSiteData?.Facilities.Evpoint,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: evpoint,
    },
    {
      Heading: "Express checks",
      isTrue: webSiteData?.Facilities.Express_checks,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: expcheck,
    },
    {
      Heading: "FrontDesk",
      isTrue: webSiteData?.Facilities.FrontDesk,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: frondesk,
    },
    {
      Heading: "Health_&_Beauty",
      isTrue: webSiteData?.Facilities["Health_&_Beauty"],
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: healbeaut,
    },
    {
      Heading: "Health_Club",
      isTrue: webSiteData?.Facilities.Health_Club,
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: helathclub,
    },
    {
      Heading: "Jacuzzi",
      isTrue: webSiteData?.Facilities["Jacuzzi"],
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: bathtub,
    },
    // {
    //   Heading: "Laundry",
    //   isTrue: webSiteData?.Laundry,
    //   SubHeading:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
    //   Icons: rooftopcafe,
    // },
    {
      Heading: "Rooftop_Cafe",
      isTrue: webSiteData?.Facilities["Rooftop_Cafe"],
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: rooftopcafe,
    },
    // {
    //   Heading: "SaunaStream",
    //   isTrue: webSiteData?.SaunaStream,
    //   SubHeading:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
    //   Icons: ,
    // },
    {
      Heading: "Security",
      isTrue: webSiteData?.Facilities["Security"],
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: security,
    },
    // {
    //   Heading: "Spa",
    //   isTrue: webSiteData?.Spa,
    //   SubHeading:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
    //   Icons: suncafe,
    // },
    {
      Heading: "Suncafe",
      isTrue: webSiteData?.Facilities["Suncafe"],
      SubHeading:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
      Icons: suncafe,
    },
    // {
    //   Heading: "TravelTour",
    //   isTrue: webSiteData?.TravelTour,
    //   SubHeading:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam",
    //   Icons: icon8,
    // },
  ];
  return (
    <>
      <div className=" md:grid lg:grid-cols-4 grid-cols-2 gap-20">
        {AmenityCardDet.map((d, i) => {
          return (
            d.isTrue && (
              <div className="grid grid-cols-2" key={i}>
                <div className="flex justify-center items-center">
                  <img
                    decoding="async"
                    loading="lazy"
                    src={d.Icons}
                    alt=""
                    className="w-[47px] h-[38px]"
                  />
                </div>
                <h2 className="text-[1.6rem]">{d.Heading}</h2>
              </div>
            )
          );
        })}
      </div>
      {/* <div className="lg:hidden">
        <Swiper
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
        >
          {AmenityCardDet.map((d) => {
            return (
              <SwiperSlide>
                <div className="grid grid-cols-2">
                  <div className="flex justify-center items-center">
                    <img decoding="async"  loading="lazy"  src={wifi} alt="" className="w-[47px] h-[38px]" />
                  </div>
                  <h2 className="text-[1.6rem]">{d.Heading}</h2>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div> */}
    </>
  );
};
