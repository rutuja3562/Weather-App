import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Temperature = ({ hours }) => {

  if (hours) {
   var temparr = hours.filter((e, i) => {
      return i>12
    });
  }
 
    var data = {
      labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      datasets: [
        {
          label: "Temparature",
          data: temparr && temparr.map((e, index) => e.temp),
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
        },
      ],
    };
    // console.log("...temparr....", data.datasets[0].data);
    var options = {
      title: {
        display: true,
        text: "Chart Title",
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 10,
              suggestedMax: 30,
            },
          },
        ],
      },
    };
  
  return (
    <div>
      {" "}
      <Line data={data} options={options} />
    </div>
  );
};

export default Temperature;
