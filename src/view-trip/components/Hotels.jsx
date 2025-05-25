import React from "react";
import { Link } from "react-router-dom";
import HotelCardItem from "./HotelCardItem";

function Hotels({trip}) {
  return (
    <div className="mx-auto px-4">
      <h2 className="font-bold text-2xl mt-7 text-center">
        Hotel Recommendation
      </h2>

      <div className="flex justify-center mt-6 space-x-3 overflow-x-auto py-2">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <HotelCardItem key={index} hotel={hotel} />
        ))}
      </div>
    </div>
  );
}


export default Hotels;
