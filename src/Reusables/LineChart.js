import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale,
} from "chart.js";
import { ChartStyles } from "./Styles";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  CategoryScale
);

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.history[i].price);
  }
  for (let i = 0; i < coinHistory?.history?.length; i += 1) {
    coinTimestamp.push(
      new Date(coinHistory?.history[i].timestamp * 1000).toLocaleDateString()
    );
  }
  coinPrice.reverse();
  coinTimestamp.reverse();
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#3e2b97",
        pointBackgroundColor: "#3e2b97",
        pointBorderColor: "#3e2b97",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <ChartStyles>
      <div className="chartHeader">
        <h1>{coinName} Price Chart</h1>
        <div className="price-container">
          <h2>Change: {coinHistory?.change}%</h2>
          <h2>
            Current {coinName} Price: $ {currentPrice}
          </h2>
        </div>
      </div>
      <Chart type="line" data={data} options={options} />
    </ChartStyles>
  );
};

export default LineChart;
