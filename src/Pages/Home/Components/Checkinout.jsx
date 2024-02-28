import React, { useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useWebContext } from "../../../Context/ContextProvider";
import { Link } from "react-router-dom";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa";

export const Checkinout = () => {
  const { webSiteData } = useWebContext();

  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const [showAdultPopup, setShowAdultPopup] = useState(false);
  const [roomQut, setRoomQut] = useState(0);
  const [adultQut, setAdultQut] = useState(0);
  const [childQut, setChildQut] = useState(0);

  const [checkInOutDate, setCheckInOutDate] = useState("Check-In");
  const [checkOutDate, setCheckOutDate] = useState("Check-Out");
  const [guests, setGuests] = useState("Guests");

  return (
    <div className="flex items-center">
      <div className="w-[15%]">
        <h2 className="text-[2.4rem]">Lorem ipsum dolor</h2>
      </div>

      <div className="w-[85%] flex justify-between items-center">
        <div className="w-[85%] flex justify-between gap-4">
          <div className="relative w-[100%] border border-gray-500">
            <div
              className="flex justify-between  items-center"
              onClick={() => {
                checkInRef.current.showPicker();
              }}
            >
              <input
                type="text"
                readOnly
                value={checkInOutDate}
                aria-label="check-in"
                placeholder="checkin"
                className="outline-none w-[100%] border  px-2 py-1 text-[1.5rem] cursor-pointer"
              />
              <span className="sr-only">arrow-icon</span>
              <MdKeyboardArrowDown className="text-[#288173] text-[2rem]" />
            </div>
            <input
              type="date"
              aria-label="check-in-date"
              onChange={(e) => {
                setCheckInOutDate(e.target.value);
              }}
              ref={checkInRef}
              className=" absolute bottom-0 left-0 z-[-10]"
            />
          </div>

          <div className="relative w-[100%]">
            <div
              className="flex justify-between border border-gray-500 items-center"
              onClick={() => {
                checkOutRef.current.showPicker();
              }}
            >
              <input
                type="text"
                readOnly
                value={checkOutDate}
                aria-label="check-out"
                placeholder="checkin"
                className="outline-none w-[100%] border  px-2 py-1 text-[1.5rem] cursor-pointer"
              />
              <span className="sr-only">check-out-icon</span>
              <MdKeyboardArrowDown className="text-[#288173] text-[2rem]" />
            </div>
            <input
              type="date"
              aria-label="check-out-date"
              onChange={(e) => {
                setCheckOutDate(e.target.value);
              }}
              ref={checkOutRef}
              className=" absolute bottom-0 left-0 z-[-10]"
            />
          </div>

          <div className="w-[100%] relative">
            <div className="flex justify-between border border-gray-500 items-center">
              <input
                type="text"
                readOnly
                aria-label="guest"
                value={guests}
                placeholder="guests"
                className="outline-none w-[100%] border  px-2 py-1 text-[1.5rem] cursor-pointer "
                onClick={(e) => {
                  e.stopPropagation(), setShowAdultPopup(!showAdultPopup);
                }}
              />
              <span className="sr-only">icon</span>
              <MdKeyboardArrowDown
                className="text-[#288173] text-[2rem]"
                onClick={(e) => {
                  e.stopPropagation(), setShowAdultPopup(!showAdultPopup);
                }}
              />
              {showAdultPopup && (
                <div className="absolute top-[100%] left-0 flex flex-col gap-8 w-[250px] bg-[#f4f3f3] py-4 px-6">
                  {/* room */}
                  <div className="flex items-center justify-between">
                    <p className="text-[1.3rem] font-semibold">Room</p>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          if (roomQut <= 1) return;
                          setRoomQut(roomQut - 1);
                        }}
                      >
                        <FaMinus className="text-white text-[1.2rem]" />
                      </div>
                      <div>
                        <span>{roomQut}</span>
                      </div>
                      <div
                        className="w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          setRoomQut(roomQut + 1);
                        }}
                      >
                        <FaPlus className="text-white text-[1.2rem]" />
                      </div>
                    </div>
                  </div>

                  {/* adult */}
                  <div className="flex items-center justify-between">
                    <p className="text-[1.3rem] font-semibold">Adult</p>
                    <div className="flex items-center gap-4">
                      <div
                        className="w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          if (adultQut <= 1) return;
                          setAdultQut(adultQut - 1);
                        }}
                      >
                        <FaMinus className="text-white text-[1.2rem]" />
                      </div>
                      <div>
                        <span>{adultQut}</span>
                      </div>
                      <div
                        className="w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          setAdultQut(adultQut + 1);
                        }}
                      >
                        <FaPlus className="text-white text-[1.2rem]" />
                      </div>
                    </div>
                  </div>

                  {/* children */}
                  <div className="flex items-center justify-between">
                    <p className="text-[1.3rem] font-semibold">Child</p>
                    <div className="flex items-center gap-4">
                      <div
                        className="text-white text-[2rem] w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          if (childQut <= 1) return;
                          setChildQut(childQut - 1);
                        }}
                      >
                        <FaMinus className="text-white text-[1.2rem]" />
                      </div>
                      <div>
                        <span>{childQut}</span>
                      </div>
                      <div
                        className="w-[25px] h-[25px] bg-[#288173] flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          setChildQut(childQut + 1);
                        }}
                      >
                        <FaPlus className="text-white text-[1.2rem]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Link
            to={webSiteData?.Engine}
            target="_blank"
            className="common-btn rounded-full"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};
