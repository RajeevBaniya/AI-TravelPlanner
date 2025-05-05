import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  SelectBudgetOptions,
  SelectTravelesList,
  AI_PROMPT,
} from "@/constants/options";
import { chatSession } from "@/service/AIModal";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import axios from "axios";

import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/service/firebaseConfig";
import { useNavigate } from "react-router-dom";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);
  const [openDailog, setOpenDailog] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");

    if (!user) {
      setOpenDailog(true);
      return;
    }

    if (
      !formData?.noOfDays ||
      !formData?.location ||
      !formData?.budget ||
      !formData?.traveler
    ) {
      toast("Please fill all the details");
      return;
    }

    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace(
      "{location}",
      formData?.location?.label
    )
      .replace("{totalDays}", formData?.noOfDays)
      .replace("{traveler}", formData?.traveler)
      .replace("{budget}", formData?.budget)
      .replace("{totalDays}", formData?.noOfDays);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log(result?.response?.text());
    setLoading(false);
    SaveAiTrip(result?.response?.text());
  };

  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();

    await setDoc(doc(db, "AITrips", docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      userEmail: user?.email,
      id: docId,
    });
    setLoading(false);
    navigate('/view-trip/'+docId)
  };

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "Application/json",
          },
        }
      )
      .then((resp) => {
        console.log(resp);
        localStorage.setItem("user", JSON.stringify(resp.data));
        setOpenDailog(false);
        OnGenerateTrip();
      });
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 mt-6 sm:mt-8 md:mt-10">
      <h2 className="font-bold text-2xl sm:text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-2 sm:mt-3 text-gray-500 text-sm sm:text-base">
        Just provide some basic information, and our trip planner will generate
        a customized trip plan based on your preferences.
      </p>

      <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col gap-6 sm:gap-9">
        <div>
          <h2 className="text-lg sm:text-xl my-2 sm:my-3 font-medium">
            Where would you like to go?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
              styles: {
                control: (provided) => ({
                  ...provided,
                  minHeight: '42px',
                }),
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-lg sm:text-xl my-2 sm:my-3 font-medium">
            How long are you planning to be on your trip?
          </h2>
          <Input
            placeholder={"Ex. 3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
            className="h-[42px]"
          />
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <h2 className="text-lg sm:text-xl my-2 sm:my-3 font-medium">What is Your Budget?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-3 sm:mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={`p-3 sm:p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-shadow
                ${formData?.budget === item.title && "shadow-lg border-black"}
              `}
            >
              <h2 className="text-3xl sm:text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-base sm:text-lg mt-2">{item.title}</h2>
              <h2 className="text-xs sm:text-sm text-gray-600">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 sm:mt-8 md:mt-12">
        <h2 className="text-lg sm:text-xl my-2 sm:my-3 font-medium">
          With whom do you plan to travel on your next adventure?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 mt-3 sm:mt-5">
          {SelectTravelesList.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("traveler", item.people)}
              className={`p-3 sm:p-4 border cursor-pointer rounded-lg hover:shadow-lg transition-shadow
                ${formData?.traveler == item.people && "shadow-lg border-black"}
              `}
            >
              <h2 className="text-3xl sm:text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-base sm:text-lg mt-2">{item.title}</h2>
              <h2 className="text-xs sm:text-sm text-gray-600">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8 sm:my-10 flex justify-center sm:justify-end">
        <Button 
          disabled={loading} 
          onClick={OnGenerateTrip}
          className="px-6 py-2 h-auto text-base"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="loading-icon animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Dialog open={openDailog}>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <img
                src="/logo.png"
                alt="Travel AI Logo"
                className="h-auto w-auto max-h-[28px] sm:max-h-[30px] md:max-h-[35px] lg:max-h-[50px]"
              />
              <h2 className="font-bold text-lg mt-4">Sign in with Google</h2>
              <p className="mt-1">
                Sign in to the app securely with Google authentication.
              </p>

              <Button
                onClick={login}
                className="w-full mt-5 flex gap-2 items-center"
              >
                <FcGoogle className="google-icon" />
                Sign in with Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CreateTrip;