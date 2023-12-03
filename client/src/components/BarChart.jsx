import { Chart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarController,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ScatterController,
  BubbleController,
} from "chart.js";
import { formatDate } from "../utils/helpers";
import { useState } from "react";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  BarController,
  Tooltip,
  ScatterController,
  BubbleController
);

const BarChart = ({ days, temperatures, humidities }) => {
  const [chatType, setChartType] = useState("line");
  const data = {
    labels: days.map((day) => formatDate(day)),
    datasets: [
      {
        label: "Temperature °C",
        data: temperatures,
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        borderColor: "rgb(255, 159, 64)",
        borderWidth: 1,
      },
      {
        label: "Humidity %",
        data: humidities,
        backgroundColor: "#9BD0F5",
        borderColor: "#36A2EB",
        borderWidth: 1,
        tension: 0.23,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="mt-10 w-full">
      <div className="self-center bg-slate-300 rounded-md max-w-min flex">
        <button
          onClick={() => setChartType("bar")}
          className={`bg-slate-${
            chatType === "bar" ? "4" : "5"
          }00 px-5 py-2 font-semibold rounded-md text-slate-900 tracking-wide`}
        >
          Bar
        </button>
        <button
          onClick={() => setChartType("line")}
          className={`bg-slate-${
            chatType === "line" ? "4" : "5"
          }00 px-5 py-2 font-semibold rounded-md text-slate-900 tracking-wide`}
        >
          Line
        </button>
      </div>
      <Chart type={chatType} data={data} options={options} />
    </div>
  );
};

export default BarChart;
