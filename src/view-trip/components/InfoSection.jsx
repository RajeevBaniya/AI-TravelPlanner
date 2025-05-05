import { Button } from "@/components/ui/button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  const [photoUrl, setPhotoUrl] = useState("/hotels.jpeg"); // Set default image initially
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (trip?.userSelection?.location?.label) {
      GetPlacePhoto();
    } else {
      setIsLoading(false); // No location to fetch, so stop loading
    }
  }, [trip]);

  const GetPlacePhoto = async () => {
    try {
      setIsLoading(true);
      setImageError(false);

      const data = {
        textQuery: trip?.userSelection?.location?.label,
      };

      const result = await GetPlaceDetails(data);
      if (result.data?.places?.[0]?.photos?.[3]?.name) {
        const PhotoUrl = PHOTO_REF_URL.replace(
          "{NAME}",
          result.data.places[0].photos[3].name
        );
        setPhotoUrl(PhotoUrl);
      } else {
        // No photo found in API response, use default
        setPhotoUrl("/hotels.jpeg");
        setImageError(true);
      }
    } catch (error) {
      console.error("Error fetching location photo:", error);
      setPhotoUrl("/hotels.jpeg");
      setImageError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageError = () => {
    console.log("Image failed to load, using fallback");
    setPhotoUrl("/hotels.jpeg");
    setImageError(true);
  };

  return (
    <div className="w-full">
      <div className="mt-4 grid grid-cols-1 gap-4">
        <div className="border p-4 rounded-lg shadow-sm">
          {isLoading ? (
            <div className="w-full h-[350px] bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Loading image...</p>
            </div>
          ) : (
            <img
              src={imageError ? "/hotels.jpeg" : photoUrl}
              alt={trip?.userSelection?.location?.label || "Location"}
              className="w-full h-[350px] object-cover rounded-lg"
              onError={handleImageError}
            />
          )}
        </div>

        <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between my-6 px-4 sm:px-10 md:px-16 max-w-8xl">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-2xl">
              {trip?.userSelection?.location?.label || "Your Destination"}
            </h2>
            <div className="flex flex-wrap gap-3">
              <h2 className="p-2 px-4 bg-gray-200 rounded-full text-gray-700 font-medium text-sm sm:text-base">
                🗓️ {trip?.userSelection?.noOfDays || "0"} Day
              </h2>
              <h2 className="p-2 px-4 bg-gray-200 rounded-full text-gray-700 font-medium text-sm sm:text-base">
                💰 {trip?.userSelection?.budget || "Budget"} Budget
              </h2>
              <h2 className="p-2 px-4 bg-gray-200 rounded-full text-gray-700 font-medium text-sm sm:text-base">
                🥂 No. Of Traveler: {trip?.userSelection?.traveler || "1"}
              </h2>
            </div>
          </div>

          <div className="mt-4 sm:mt-0 flex justify-end">
            <Button className="px-4 py-2 w-full sm:w-auto">
              <IoIosSend className="mr-1" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
