import React, { useState } from 'react';
import Layout from './Layout';
import '@jotforminc/jotform.css';
import './Search.scss';
// eslint-disable-next-line import/order
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();
  const [enteredTicket, setEnteredTicket] = useState('');

  const nameInputChangeHandler = event => {
    setEnteredTicket(event.target.value);
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    console.log(enteredTicket);
    navigate(`/support-dashboard/ticket/${enteredTicket}`);
  };

  return (
    <Layout>
      <form
        id="textbox"
        className=' grow-1  text-center'
        onSubmit={formSubmissionHandler}
      >
        <div id="textbox" className='form-control grow-1 gap-2 text-center '>
          <p className="pb-4 font-medium text-3xl font-circular">Search Ticket ID</p>
          <input
            className="border-2 w-25 h-10 radius-lg bg-orange-100"
            type="search"
            id="ticket"
            name="ticket"
            onChange={nameInputChangeHandler}
          />
          <Link to={`/ticket/${enteredTicket}`}>
            <button type='submit' className="duration-300 bg-blue-400 hover:bg-blue-500 ml-2 color-white py-2 px-4 radius">Search</button>
          </Link>

        </div>
      </form>
    </Layout>
  );
};

export default Search;
