"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../_components/modetoggle";
import Login from "./Login";
import Signup from "./Signup";
// import { ReactComponent as LoginIcon } from "../assets/login.svg";
// import { ReactComponent as SignupIcon } from "../assets/signup.svg";

const CountdownRedirect = ({
  countdown,
  onClick,
}: {
  countdown: number;
  onClick: () => void;
}) => {
  return (
    <>
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
          className="text-blue-200 hover:text-blue-300 cursor-pointer"
        >
          here
        </span>{" "}
        to go to the dashboard immediately.
      </p>
    </>
  );
};

export default function Auth() {
  const [authType, setAuthType] = useState("login");
  const [countdown, setCountdown] = useState(10);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("auth-token");
    if (token) {
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
    }
  }, [router]);

  const handleRedirect = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-900 dark:to-indigo-900 font-sans">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      {isLoggedIn ? (
        <CountdownRedirect countdown={countdown} onClick={handleRedirect} />
      ) : (
        <>
          <div className="flex space-x-4 mb-8">
            <Button
              onClick={() => setAuthType("login")}
              className={`${
                authType === "login"
                  ? "bg-white text-indigo-600 hover:bg-white scale-110"
                  : " bg-indigo-600 text-white hover:bg-indigo-800"
              } flex items-center px-4 py-2 rounded-md transition-transform duration-300 ease-in-out`}
            >
              {/* <LoginIcon className="w-5 h-5 mr-2" /> */}
              Login
            </Button>
            <Button
              onClick={() => setAuthType("signup")}
              className={`${
                authType === "signup"
                  ? "bg-white text-indigo-600 hover:bg-white scale-110"
                  : " bg-indigo-600 text-white hover:bg-indigo-800"
              } flex items-center px-4 py-2 rounded-md transition-transform duration-300 ease-in-out`}
            >
              {/* <SignupIcon className="w-5 h-5 mr-2" /> */}
              Signup
            </Button>
          </div>
          <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 animate-fade-in">
            {authType === "login" ? <Login /> : <Signup />}
          </div>
        </>
      )}
    </div>
  );
}
