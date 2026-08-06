import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { calculateTotalCost } from '../model/calculateTotalCost';
import '../styles/ChartComponent.css';

const fallbackColors = [
  ['#70d6c4', '#229c93', '#157a74'],
  ['#a5d873', '#5da457', '#3f7d44'],
  ['#f4ad8d', '#d96f69', '#b54e53'],
  ['#f3db72', '#d1a943', '#aa7e24'],
];

const ChartComponent = ({ providers }) => {
  const storageValue = useSelector((state) => state.range.storageValue);
  const transferValue = useSelector((state) => state.range.transferValue);
  const selectedOptions = useSelector((state) => state.options.selectedOptions);
  const chartData = calculateTotalCost(
    providers,
    storageValue,
    transferValue,
    selectedOptions
  );
  const lowestPrice = providers.length ? Math.min(...chartData) : null;
  const bestProvider = providers.find(
    (provider, index) => chartData[index] === lowestPrice
  );
  const chartColors = providers.map((provider) => provider.palette ?? fallbackColors[0]);
  const getGradient = (context) => {
    const { ctx, chartArea } = context.chart;
    const colorIndex = context.dataIndex ?? 0;
    const colors = chartColors[colorIndex % chartColors.length] ?? fallbackColors[0];

    if (!chartArea) return colors[1];

    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, colors[0]);
    gradient.addColorStop(1, colors[1]);
    return gradient;
  };

  const data = {
    labels: providers.map((provider) => provider.name),
    datasets: [
      {
        label: 'Monthly cost',
        data: chartData,
        backgroundColor: getGradient,
        borderColor: (context) => {
          const colorIndex = context.dataIndex ?? 0;
          return (
            chartColors[colorIndex % chartColors.length] ?? fallbackColors[0]
          )[2];
        },
        borderRadius: 14,
        borderSkipped: false,
        borderWidth: 1,
        hoverBorderWidth: 3,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    layout: { padding: { top: 8, left: 4, right: 4 } },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#17233c',
        bodyFont: { size: 13, weight: '600' },
        caretPadding: 10,
        cornerRadius: 10,
        displayColors: false,
        padding: 12,
        titleFont: { size: 12, weight: '500' },
        callbacks: {
          label: (context) => `$${context.parsed.y.toFixed(2)} / month`,
        },
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#506078', font: { size: 12, weight: '600' } },
      },
      y: {
        beginAtZero: true,
        border: { display: false },
        grid: { color: '#e8edf4' },
        ticks: {
          color: '#748197',
          font: { size: 11 },
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div className="chart_bar">
      {bestProvider && (
        <section className="best_offer" aria-live="polite">
          <div>
            <p className="best_offer_label">Best value</p>
            <h2>{bestProvider.name}</h2>
          </div>
          <output className="best_offer_price">
            ${lowestPrice.toFixed(2)} <span>/ month</span>
          </output>
        </section>
      )}
      <div className="chart_canvas">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
