import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { calculatesTheTotalCost } from '../model/totalСostCalculation.js';
import { useSelector } from 'react-redux';
import '../styles/ChartComponent.css';

const ChartComponent = ({ providers }) => {
  console.log(providers);

  const storageValue = useSelector((state) => state.range.storageValue);
  const transferValue = useSelector((state) => state.range.transferValue);
  const selectedOptions = useSelector((state) => state.options.selectedOptions);

  const chartData = calculatesTheTotalCost(
    providers,
    storageValue,
    transferValue,
    selectedOptions,
  );

  Chart.defaults.font.size = 8;
  Chart.defaults.color = 'rgb(25, 1, 57)';
  Chart.defaults.font.weight = 400;

  const data = {
    labels: providers
      ? providers.map((provider) => provider.name.toUpperCase())
      : '',
    font: {
      size: 10,
    },

    datasets: [
      {
        label: '',
        data: chartData,
        backgroundColor: [
          'rgb(44, 137, 140, 0.5)',
          'rgb(91, 144, 64, 0.5)',
          'rgb(191, 94, 70, 0.5)',
          'rgb(196, 196, 63, 0.5)',
        ],
        borderColor: [
          'rgb(44, 137, 140)',
          'rgb(91, 144, 64)',
          'rgb(191, 94, 70)',
          'rgb(196, 196, 63)',
        ],
        borderWidth: 3,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    // indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="chart_bar">
      <Bar type="Bar" data={data} options={options}></Bar>
    </div>
  );
};

export default ChartComponent;
