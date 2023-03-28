import React from 'react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { calculatesTheTotalCost } from '../model/totalСostCalculation.js';
import { useSelector } from 'react-redux';

const ChartComponent = ({ providers }) => {
  console.log(providers);

  const storageValue = useSelector((state) => state.range.storageValue);
  const transferValue = useSelector((state) => state.range.transferValue);
  const selectedOptions = useSelector((state) => state.options.selectedOptions);

  const chartData = calculatesTheTotalCost(
    providers,
    storageValue,
    transferValue,
    selectedOptions
  );
  console.log(chartData);
  const data = {
    // labels: ['1', '2', '3', '4'],
    labels: providers
      ? providers.map((provider) => provider.name.toUpperCase())
      : '',
    datasets: [
      {
        label: '',
        data: chartData,
        // yAxisID: 'xAxis',
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(43, 195, 124, 0.5)',
          'rgba(255, 159, 64, 0.5)',
          'rgba(75, 192, 192, 0.5)',
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(43, 195, 124)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
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
    indexAxis: 'y',
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <>
      <Bar type="Bar" data={data} options={options}></Bar>
    </>
  );
};

export default ChartComponent;
