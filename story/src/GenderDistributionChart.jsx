import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'; // Import ChartJS

const GenderDistributionChart = () => {
  const data = {
    labels: ['M', 'F'],
    datasets: [
      {
        label: 'Gender Distribution',
        data: [45, 38], // Replace with your actual data
        backgroundColor: ['#36454F', '#2E8B57'],
      },
    ],
  };

  const options = { // Add options for better chart appearance
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Gender'
        }
      }
    },
    plugins: {
      legend: {
        display: false // Hide the legend
      },
      title: {
        display: true,
        text: 'Gender Distribution',
        font: {
          size: 16
        }
      }
    }
  };


  return <Bar data={data} options={options} />;
};

export default GenderDistributionChart;
