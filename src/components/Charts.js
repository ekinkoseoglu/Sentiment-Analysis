import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

const Charts = () => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );

  async function getData() {
    try {
      const response = await axios.get('https://de-daglaroglu.jotform.dev/intern-api/getDashboard');
      setData(response.data.content);
      console.log(response.data.content);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Sentiment Analysis'
      },
    },
  };

  const data = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  datas.forEach((item) => data[item.question_avg]++);

  const labels = ['1', '2', '3', '4', '5'];

  const sentiments = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Object.values(data),
        backgroundColor: [
          'rgba(255, 0, 0, 0.8)',
          'rgba(255, 159, 64, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(147, 250, 165, 0.8)',
          'rgba(178, 222, 39, 0.8)',
        ],
      },
    ],
  };

  return (
    <Layout>
      
      {loading ? (
      <div className="flex gap-4 h-full w-full align-center justify-center p-4 radius shadow-sm">
        <div className="anim anim-300 spin-loader w-10 h-10 border-4 border-navy-75 border-t-red-400 radius-full"></div>
      </div>
      ) : (
        <div className='w-full p-5'>
            <div className='flex-row flex p-5 gap-2 text-sm font-medium '>
              <div className='p-4 border-gray-75 border radius'>
                <Bar options={options} data={sentiments} width="800px" height="600px" />
              </div>
            <div className='p-4 border-gray-75 border radius'>
                <Doughnut options={options} data={sentiments} width="800px" height="600px"/>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default Charts;