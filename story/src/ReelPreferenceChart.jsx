import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const ReelPreferenceChart = () => {
  const data = {
    labels: [
      'Romantic',
      'Sports',
      'Dance & Music',
      'Comedy',
      'Study',
      'Games',
      'Anime',
      'Fashion',
      'Competition',
      'Racing Cars & Bike',
      'Movie',
      'Religious',
    ],
    datasets: [
      {
        label: 'Reel Preference Distribution',
        data: [45, 34, 32, 30, 24, 22, 18, 13, 12, 7, 6, 6], // Data from the image
        backgroundColor: '#17a2b8', // Teal color from the image
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Frequency',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Reel Preference',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Reel Preference Distribution',
        font: {
          size: 16,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ReelPreferenceChart;
