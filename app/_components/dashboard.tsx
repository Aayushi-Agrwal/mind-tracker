"use client";

import { Pie, Line } from "react-chartjs-2";
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
import {
  faChartSimple,
  faGear,
  faHouse,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withAuth from "../_components/withAuth";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

function Dashboard({ children }: { children: React.ReactNode }) {
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
    <div className="flex flex-col h-screen bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-500">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <main className="animate-fade-in w-full mr-8 mb-8  rounded-3xl bg-white">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
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
          </div>*/}
          Main
        </main>
      </div>
    </div>
  );
}

export default withAuth(Dashboard);
