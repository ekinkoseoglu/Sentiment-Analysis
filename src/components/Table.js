/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable react/button-has-type */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from "./Layout";

import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const Table = () => {
  const [data, setData] = useState([]);
  const [time, setTime] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await axios.get('https://de-daglaroglu.jotform.dev/intern-api/getDashboard');
      const data = response.data.content;
      setData(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);


  const sentimentEmoji = (sentiment) => {
    if (sentiment === '1') {
      return (<div className='flex flex-row items-center'>
        <img src={logo1} alt="emoji" className='w-20' />
        <h2 className="font-medium color-navy-600">⭐</h2>
      </div>);
    } else if (sentiment === '2') {
      return (<div className='flex flex-row items-center'>
        <img src={logo2} alt="emoji" className='w-20' />
        <h2 className="font-medium color-navy-600">⭐⭐</h2>
      </div>);
    }
    else if (sentiment === '3') {
      return (<div className='flex flex-row items-center'>
        <img src={logo3} alt="emoji" className='w-20' />
        <h2 className="font-medium color-navy-600">⭐⭐⭐</h2>
      </div>);
    }
    else if (sentiment === '4') {
      return (<div className='flex flex-row items-center'>
        <img src={logo4} alt="emoji" className='w-20' />
        <h2 className="font-medium color-navy-600">⭐⭐⭐⭐</h2>
      </div>);
    }
    else if (sentiment === '5') {
      return (<div className='flex flex-row items-center'>
        <img src={logo5} alt="emoji" className='w-20' />
        <h2 className="font-medium color-navy-600">⭐⭐⭐⭐⭐</h2>
      </div>);
    }
  }
  
  const columns = [
    { field: 'ticket_id', headerName: 'ID' , renderCell: params => {
      return (<div className='flex flex-col items-center'>
        <Link to={`/ticket/${params.value}`}>
          <button className='bg-navy-700 hover:bg-blue-600 color-white font-bold py-2 px-4 radius'>
          {params.value}
          </button>
        </Link>
      </div>);
    }},
    { field: 'user_photo', headerName: 'Avatar' , renderCell: params => <img src={params.value} alt="avatar" className='radius-full w-12' />},
    { field: 'user_name', headerName: 'Asked By'},
    { field: 'question_header', headerName: 'Question', flex: 1 },
    { field: 'question_date', headerName: 'Asked Date', width: 250, type: 'dateTime', valueGetter: ({value}) => value && new Date(value * 1000) },
    { field: 'reply_unit', headerName: 'Reply' },
    { field: 'question_avg', headerName: 'Sentiment' , renderCell: params => sentimentEmoji(params.value), type: 'numericColumn', flex: 1 }
  ];
  
  return (
    <Layout>
      {loading ? (
      <div className="flex gap-4 h-full w-full align-center justify-center p-4 radius shadow-sm">
        <div className="anim anim-300 spin-loader w-10 h-10 border-4 border-navy-75 border-t-red-400 radius-full"></div>
      </div>
      ) : (
        <div className='w-full p-5'>
          <Box sx={{ height: 800, width: '100%' }}>
            <DataGrid
              rows={data}
              columns={columns}
              getRowId={(data) => data.ticket_id}
              rowHeight={80}
              rowsPerPageOptions={[10, 20, 50, 100]}
              
            />
          </Box>
        </div>
      )}
  </Layout>
  );
};

export default Table;
