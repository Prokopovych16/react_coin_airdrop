import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';
import styles from './Statistics.module.scss';
import { data } from '../../info/tokenPrice';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const Statistics = () => {
  const chartData = {
    labels: data.map(item => item.time), // Time (x-axis)
    datasets: [
      {
        label: 'Price Over Time', // Line label
        data: data.map(item => item.price), // Price (y-axis)
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className={styles.statistics__container}>
      <div className={styles.statistics__general}>
        <h1 data-aos="zoom-in" className={styles.statistics__general_title}>
          Projected <b>Value Growth</b>: A Vision for the Future
        </h1>
        <div className={styles.statistics__general_graphic}>
          <Line data={chartData} />
        </div>
        <p data-aos="fade-up" className={styles.statistics__general_text}>
          This chart illustrates the projected 
          growth in value over the next several months. 
          The data highlights the expected increase in 
          value, showing a promising trend.
        </p>
      </div>
    </div>
  );
};
