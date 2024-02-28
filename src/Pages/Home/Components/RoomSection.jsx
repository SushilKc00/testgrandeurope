import React from "react";

import { HeroSection } from "../../../Components/CommonSections/HeroSection";
import room1 from "../../../assets/Images/room1.png";
import { useWebContext } from "../../../Context/ContextProvider";

export const RoomSection = () => {
  const { roomsDetails } = useWebContext();

  return (
    <div className="flex flex-col gap-20">
      {roomsDetails[1] && <HeroSection details={roomsDetails[1]} index={0} />}
    </div>
  );
};
