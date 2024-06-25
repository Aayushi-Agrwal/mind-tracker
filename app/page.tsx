"use client";

import React from "react";
import {
  faChartSimple,
  faGear,
  faHouse,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Doughnut, Pie, Line } from "react-chartjs-2";

const Dashboard = () => {
  const pieData = {
    labels: ["Completed", "Pending", "In Progress"],
    datasets: [
      {
        data: [18, 6, 5],
        backgroundColor: ["#34D399", "#FBBF24", "#3B82F6"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Corrected position value
      },
      title: {
        display: true,
        text: "Hours worked:",
      },
    },
  };

  const labels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [8, 7, 9, 6, 8, 7, 10], // Example static data for hours worked
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ArcElement,
    Tooltip,
    Legend
  );

  return (
    <div className="flex h-screen bg-gray-100">
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

      <main className="flex-1 p-6 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-slide-in-bottom">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Task Overview
            </h2>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Total Tasks
                </div>
                <div className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  24
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Completed
                </div>
                <div className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  18
                </div>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Pending
                </div>
                <div className="text-lg font-medium text-gray-700 dark:text-gray-200">
                  6
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 col-span-2 animate-slide-in-right">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Last Tasks
            </h2>
            <table className="min-w-full mt-4">
              <thead>
                <tr>
                  <th className="py-2 text-left text-sm text-gray-500 dark:text-gray-400">
                    Task
                  </th>
                  <th className="py-2 text-left text-sm text-gray-500 dark:text-gray-400">
                    Assignee
                  </th>
                  <th className="py-2 text-left text-sm text-gray-500 dark:text-gray-400">
                    Due Date
                  </th>
                  <th className="py-2 text-left text-sm text-gray-500 dark:text-gray-400">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2">Design new dashboard</td>
                  <td className="py-2">Alex Johnson</td>
                  <td className="py-2">June 25, 2024</td>
                  <td className="py-2">Completed</td>
                </tr>
                <tr>
                  <td className="py-2">Develop API integration</td>
                  <td className="py-2">John Doe</td>
                  <td className="py-2">June 26, 2024</td>
                  <td className="py-2">Pending</td>
                </tr>
                <tr>
                  <td className="py-2">Write documentation</td>
                  <td className="py-2">Jane Smith</td>
                  <td className="py-2">June 27, 2024</td>
                  <td className="py-2">In Progress</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 animate-slide-in-bottom">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Tasks Share
            </h2>
            <div className="mt-4">
              <Pie data={pieData} />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 col-span-2 animate-slide-in-right">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Tasks Schedule
            </h2>
            <div className="mt-4">
              <Line options={options} data={data} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
