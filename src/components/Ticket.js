/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import './Ticket.scss';
import '@jotforminc/jotform.css';
// eslint-disable-next-line no-restricted-imports
// eslint-disable-next-line max-len, no-restricted-imports
import '@jotforminc/jotform.css/animation.css';
import axios from 'axios';
import Layout from './Layout';
import Emoji from './Emoji';


const Ticket = (props) => {
  const [data, setData] = useState([]);
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  
  const location = useLocation();
  const ticketId = location.pathname.split('/')[2];
  
 
  useEffect(() => {
    axios.get(`https://de-daglaroglu.jotform.dev/intern-api/ticketDetail/${ticketId}`)
    .then(res => {
      const data = res.data.content;
      setData(data);
      setQuestion(data.question);
      setAnswers(data.answer);
    }
    )
    .catch(err => {
      console.log(err);
    }
    )
  }, []);

  console.log(question);

      


  return (
    <Layout>
      <div className="m-10 p-10 container">
        <div className="topheader-main pb-5 mb-5 shadow-md ">
          <h1 className='font-circular p-2 font-medium font-extrabold text-xl'>
            {question.question_header}
          </h1>
          <div className='font-circular p-2 font-medium'>
            {question.question_text}
          </div>
        </div>
        <ul className='answers '>
          {
          answers.map(answer => (
            <li className='answer border  border-gray-75 radius-lg shadow-xl'>
              <div className='displayquestion  gap-5'>
                <div className="answerheader card flex-grow  flex border-b border-gray-75 b-4 p-2">
                  <img className='anim zoom-in radius-full w-16 h-16 mt-3 ' src={answer.user_photo} />
                  <div className='pt-5 pl-6'>
                    <h4 className='pb-2 '>
                    </h4>
                    <div className='flex flex-row gap-3'>
                        <b className='pt-2'>
                          {answer.user_name}
                        </b>
                        <b className='items-center'>
                          {answer.isAdmin == '1' ? <p className='radius-lg align-center  color-blue-500 p-2 bg-blue-100'>Jotform Support</p> : ''}
                       </b>
                    </div>
                    <p className='font-medium color-orange-400'></p>
                    <p className="color-gray-300 font-normal">
                    {new Date(answer.answer_date * 1000).toString().split('GMT+0300 (GMT+03:00)')}
                    </p>
                  </div>
                  <div className="emoji">
                    {answer.isAdmin == '0' ? <Emoji score={answer.score} /> : ''}
                  </div>
                </div>
                <div className="answerbody">
                  <p className=" p-3 grow-1 font-normal">
                    {answer.answer_text}
                  </p>
                </div>
              </div>
            </li>
          ))
          }
        </ul>
      </div>

    </Layout>
  );
};

export default Ticket;