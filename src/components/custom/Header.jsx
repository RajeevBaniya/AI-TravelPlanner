import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { toast } from "sonner";

function Header() {
  // Try-catch to handle potential JSON parse errors
  let user = null;
  try {
    const userData = localStorage.getItem("user");
    if (userData) {
      user = JSON.parse(userData);
    }
  } catch (error) {
    console.error("Error parsing user data:", error);
    // Clear corrupted data
    localStorage.removeItem("user");
  }

  const [openDailog, setOpenDailog] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

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
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
        toast("Failed to sign in. Please try again.");
      });
  };

  const handleLogout = () => {
    try {
      googleLogout();
    } catch (error) {
      console.error("Error during logout:", error);
    }
    localStorage.clear();
    window.location.href = '/'; // Navigate to home page instead of just reloading
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="relative flex h-16 items-center px-0 mx-0">
        {/* Logo */}
        <div className="absolute left-2 sm:left-4 md:left-6 lg:left-8">
          <Link to="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Travel AI Logo"
              className="h-auto w-auto max-h-[28px] sm:max-h-[30px] md:max-h-[35px] lg:max-h-[50px]"
            />
          </Link>
        </div>

        {/* Sign In button */}
        <div className="absolute right-2 sm:right-4 md:right-6 lg:right-8">
          <div>
            {user ? (
              <div className="flex items-center gap-3">
                <Link to="/create-trip">
                  <Button variant="outline" className="rounded-full">
                    + Create Trip
                  </Button>
                </Link>
                <Link to="/my-trips">
                  <Button variant="outline" className="rounded-full">
                    My Trips
                  </Button>
                </Link>

                {/* User menu with fallback icon */}
                <div className="relative">
                  <button
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="flex items-center justify-center h-[35px] w-[35px] rounded-full bg-orange-500 text-white"
                    aria-label="User menu"
                  >
                    <FaUser />
                  </button>

                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        {user?.name || user?.email || "User"}
                      </div>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Button
                className="bg-black text-white hover:bg-gray-800 rounded"
                size="sm"
                onClick={() => setOpenDailog(true)}
              >
                Sign In
              </Button>
            )}
          </div>

          <Dialog open={openDailog} onOpenChange={setOpenDailog}>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <img
                  src="/logo.png"
                  alt="Travel AI Logo"
                  className="h-auto w-auto max-h-[24px] sm:max-h-[26px] md:max-h-[30px] lg:max-h-[40px] mx-auto"
                />
                <DialogTitle className="font-bold text-base mt-3 text-center">Sign in with Google</DialogTitle>
                <DialogDescription className="mt-1 text-sm text-center">
                  Sign in to the app securely with Google authentication.
                </DialogDescription>
                <Button
                  onClick={login}
                  className="w-full mt-4 flex gap-2 items-center justify-center bg-black text-white hover:bg-gray-800 rounded-lg text-sm py-2"
                >
                  <FcGoogle className="w-4 h-4" />
                  Sign in with Google
                </Button>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}

export default Header;