"use client";

import {
  faBell,
  faChartSimple,
  faGear,
  faHouse,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logout from "../_components/logout";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Sidebar() {
  const [active, setActive] = useState(0);
  return (
    // <aside className="w-64 bg-gradient-to-br from-green-400 to-blue-500 p-4 shadow-lg text-white">
    //   <div className="flex items-center space-x-4 p-2 mb-5 animate-fade-in">
    //     <img
    //       className="h-12 w-12 rounded-full"
    //       src="https://via.placeholder.com/150"
    //       alt="Profile"
    //     />
    //     <div>
    //       <h4 className="font-semibold text-lg">Alex Johnson</h4>
    //       <span className="text-sm">alex.johnson@gmail.com</span>
    //     </div>
    //   </div>
    //   <nav className="space-y-2">
    //     <a
    //       href="#"
    //       className="flex items-center p-2 bg-green-500 rounded-md shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
    //     >
    //       <FontAwesomeIcon icon={faHouse} className="h-6 w-6 mr-3" />
    //       Dashboard
    //     </a>
    //     <a
    //       href="#"
    //       className="flex items-center p-2 hover:bg-green-600 rounded-md transition duration-300 ease-in-out"
    //     >
    //       <FontAwesomeIcon icon={faListCheck} className="h-6 w-6 mr-3" />
    //       Tasks
    //     </a>
    //     <a
    //       href="#"
    //       className="flex items-center p-2 hover:bg-green-600 rounded-md transition duration-300 ease-in-out"
    //     >
    //       <FontAwesomeIcon icon={faChartSimple} className="h-6 w-6 mr-3" />
    //       Statistics
    //     </a>
    //     <a
    //       href="#"
    //       className="flex items-center p-2 hover:bg-green-600 rounded-md transition duration-300 ease-in-out"
    //     >
    //       <FontAwesomeIcon icon={faGear} className="h-6 w-6 mr-3" />
    //       Settings
    //     </a>
    //   </nav>
    // </aside>
    <div className="w-64 h-full ml-8">
      <div className=" mt-8 flex flex-col gap-1 ">
        <p
          className={`p-3 pl-6 rounded-tl-xl rounded-bl-xl cursor-default text-md ${
            active === 0 ? "bg-white text-yellow-700" : "hover:bg-yellow-600"
          }`}
          onClick={() => setActive(0)}
        >
          <FontAwesomeIcon icon={faHouse} className="h-6 w-6 mr-3" size="lg" />{" "}
          Home
        </p>
        <p
          className={` p-3 pl-6 rounded-tl-xl rounded-bl-xl cursor-default text-md ${
            active === 1 ? "bg-white text-yellow-700" : "hover:bg-yellow-600"
          }`}
          onClick={() => setActive(1)}
        >
          {" "}
          <FontAwesomeIcon
            icon={faListCheck}
            className="h-6 w-6 mr-3"
            size="lg"
          />{" "}
          My Tasks
        </p>
        <p
          className={` p-3 pl-6 rounded-tl-xl rounded-bl-xl cursor-default text-md ${
            active === 2 ? "bg-white text-yellow-700" : "hover:bg-yellow-600"
          }`}
          onClick={() => setActive(2)}
        >
          {" "}
          <FontAwesomeIcon
            icon={faBell}
            className="h-6 w-6 mr-3"
            size="lg"
          />{" "}
          Inbox
        </p>
      </div>
      <p className="border-b-2 border-yellow-500 mr-4 my-3"></p>
      <div>
        <p className="text-sm text-yellow-100">Teams</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default Sidebar;
