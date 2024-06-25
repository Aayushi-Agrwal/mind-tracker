"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../_components/modetoggle";
import Login from "./Login";
import Signup from "./Signup";
import { createClient } from "../utils/supabase/client";

const CountdownRedirect = ({
  countdown,
  onClick,
}: {
  countdown: number;
  onClick: () => void;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 text-center animate-fade-in">
        <p className="text-lg text-gray-800 dark:text-gray-200">
          You are already logged in. Redirecting you to the dashboard in{" "}
          {countdown} seconds...
        </p>
      </div>
      <p className="text-lg text-white dark:text-gray-200 mt-2">
        Or click{" "}
        <span
          onClick={onClick}
          className="text-yellow-100  hover:text-yellow-300 cursor-pointer"
        >
          here
        </span>{" "}
        to go to the dashboard immediately.
      </p>
    </div>
  );
};

export default function Auth() {
  const [authType, setAuthType] = useState("login");
  const [countdown, setCountdown] = useState(10);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();

    const checkAuth = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setIsLoggedIn(true);

        const interval = setInterval(() => {
          setCountdown((prev) => prev - 1);
        }, 1000);

        const timeout = setTimeout(() => {
          router.push("/");
        }, 10000);

        return () => {
          clearInterval(interval);
          clearTimeout(timeout);
        };
      } else {
        router.push("/auth");
      }
    };

    checkAuth();
  }, [router]);

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen w-screen bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-400 dark:from-orange-600 dark:via-yellow-700 dark:to-orange-700 font-sans">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      {isLoggedIn ? (
        <CountdownRedirect countdown={countdown} onClick={handleRedirect} />
      ) : (
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="hidden md:flex items-center w-full md:w-1/2 h-screen">
            <img src="/auth/work.png" alt="login" className="rounded-lg" />
          </div>
          <div className="flex flex-col items-center space-y-4 md:space-y-8 mb-8 md:mb-0 md:mr-8">
            {/* Add line beside selected button */}
            <div className="relative">
              <Button
                onClick={() => setAuthType("login")}
                className={`${
                  authType === "login"
                    ? "bg-white text-yellow-600 hover:bg-white scale-125"
                    : "bg-yellow-600 dark:bg-yellow-600 text-white hover:bg-yellow-800 dark:hover:bg-yellow-900 transition-all"
                } flex items-center px-4 py-2 rounded-md transition-transform duration-300 ease-in-out`}
              >
                Login
              </Button>
            </div>
            <div className="relative">
              <Button
                onClick={() => setAuthType("signup")}
                className={`${
                  authType === "signup"
                    ? "bg-white text-yellow-600 hover:bg-white scale-110"
                    : "bg-yellow-600 dark:bg-yellow-600 text-white hover:bg-yellow-800 dark:hover:bg-yellow-900 transition-all"
                } flex items-center px-4 py-2 rounded-md transition-transform duration-300 ease-in-out`}
              >
                Signup
              </Button>
            </div>
          </div>
          <div className="w-full max-w-md bg-white dark:bg-gray-100 rounded-lg shadow-lg p-8 animate-fade-in md:mr-8">
            {authType === "login" ? <Login /> : <Signup />}
          </div>
        </div>
      )}
    </div>
  );
}
