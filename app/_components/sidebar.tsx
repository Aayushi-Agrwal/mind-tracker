// "use server";

import {
  faChartSimple,
  faGear,
  faHouse,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logout from "../_components/logout";

function Sidebar() {
  return (
    <aside className="w-64 bg-gradient-to-br from-green-400 to-blue-500 p-4 shadow-lg text-white">
      <div className="flex items-center space-x-4 p-2 mb-5 animate-fade-in">
        <img
          className="h-12 w-12 rounded-full"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <div>
          <h4 className="font-semibold text-lg">Alex Johnson</h4>
          <span className="text-sm">alex.johnson@gmail.com</span>
        </div>
      </div>
      <Logout />
      <nav className="space-y-2">
        <a
          href="#"
          className="flex items-center p-2 bg-green-500 rounded-md shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faHouse} className="h-6 w-6 mr-3" />
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center p-2 hover:bg-green-600 rounded-md transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faListCheck} className="h-6 w-6 mr-3" />
          Tasks
        </a>
        <a
          href="#"
          className="flex items-center p-2 hover:bg-green-600 rounded-md transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faChartSimple} className="h-6 w-6 mr-3" />
          Statistics
        </a>
        <a
          href="#"
          className="flex items-center p-2 hover:bg-green-600 rounded-md transition duration-300 ease-in-out"
        >
          <FontAwesomeIcon icon={faGear} className="h-6 w-6 mr-3" />
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;
