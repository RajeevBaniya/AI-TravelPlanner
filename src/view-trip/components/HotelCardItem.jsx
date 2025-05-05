import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HotelCardItem({ hotel }) {
  const [photoUrl, setPhotoUrl] = useState();

  const getCurrencySymbol = (country) => {
    if (!country) return "$";

    const currencyMap = {
      India: "₹",
      USA: "$",
      UK: "£",
      Japan: "¥",
      Europe: "€"
    };

    for (const [key, symbol] of Object.entries(currencyMap)) {
      if (country.toLowerCase().includes(key.toLowerCase())) {
        return symbol;
      }
    }

    return "$"; // Default to USD for other countries
  };

  useEffect(() => {
    hotel&&GetPlacePhoto();
  }, [hotel]);

  const GetPlacePhoto = async () => {
    const data = {
      textQuery: hotel?.hotelName,
    };
    const result = await GetPlaceDetails(data).then((resp) => {
      console.log(resp.data.places[0].photos[3].name);

      const PhotoUrl = PHOTO_REF_URL.replace(
        "{NAME}",
        resp.data.places[0].photos[3].name
      );
      setPhotoUrl(PhotoUrl);
    });
  };

  return (
    <Link
      to={
        "https://www.google.com/maps/search/?api=1&query=" +
        hotel?.hotelName +
        "," +
        hotel?.hotelAddress
      }
      target="_blank"
    >
      <div
        // key={index}
        className="hover:scale-90 transition-all cursor-pointer flex-shrink-0 w-72 sm:w-80 md:w-96"
      >
        <img
          src={photoUrl ? photoUrl : "/hotels.jpeg"}
          className="rounded-xl h-[250px] w-full object-cover" // w-full h-56 sm:h-64 object-cover
          onError={(e) => (e.target.src = "/hotels.jpeg")}
        />
        <div className="my-3 text-center flex flex-col gap-2">
          <h2 className="font-medium">{hotel?.hotelName}</h2>
          <h2 className="text-xs text-gray-500">📍 {hotel?.hotelAddress}</h2>
          <h2 className="text-sm ">
            💰{getCurrencySymbol(hotel?.country) + hotel?.price.min} -{" "}
            {getCurrencySymbol(hotel?.country) + hotel?.price.max} per night
          </h2>
          <h2 className="text-sm">⭐{hotel?.rating}</h2>
        </div>
      </div>
    </Link>
  );
}

export default HotelCardItem;
