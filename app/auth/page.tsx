"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "../_components/modetoggle";
import Login from "./Login";
import Signup from "./Signup";

export default function Auth() {
  const [authType, setAuthType] = useState("login");

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-800 dark:to-indigo-800">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <div className="flex space-x-4 mb-8">
        <Button
          onClick={() => setAuthType("login")}
          className={`${
            authType === "login"
              ? "bg-white text-indigo-600 hover:bg-white scale-110"
              : " bg-indigo-600 text-white hover:bg-indigo-800"
          } px-4 py-2 rounded-md`}
        >
          Login
        </Button>
        <Button
          onClick={() => setAuthType("signup")}
          className={`${
            authType === "signup"
              ? "bg-white text-indigo-600 hover:bg-white scale-110"
              : " bg-indigo-600 text-white hover:bg-indigo-800"
          } px-4 py-2 rounded-md`}
        >
          Signup
        </Button>
      </div>
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {authType === "login" ? <Login /> : <Signup />}
      </div>
    </div>
  );
}
