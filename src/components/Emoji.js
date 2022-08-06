import React from 'react';
import '@jotforminc/jotform.css';
import logo1 from '../assets/1.png';
import logo2 from '../assets/2.png';
import logo3 from '../assets/3.png';
import logo4 from '../assets/4.png';
import logo5 from '../assets/5.png';

// eslint-disable-next-line react/prop-types
const Emoji = ({ score }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      width: '15%',
    }} >
      {
        // eslint-disable-next-line no-nested-ternary
        // eslint-disable-next-line max-len
        // <img src = {logo5} alt="So Happy" /> : score == 4 ? <img src={ logo4 } alt="Happy" /> : score == 3 ? <img src={logo3} alt="Zero" /> : score == 2 ? <img src={logo2} alt="Angry" /> : score == 1 ? <img src={ logo1 } alt = "So Angry" /> : null
          score  == 1 ? (
            <div class="hover:bg-red-400 hover:border-red-500  border border-transparent radius text-center">
              <div class="text-7xl m-4">
                <img src={logo1} alt="Zero" />
              </div>
              <h2 class="font-medium color-navy-600">⭐️</h2>
            </div>
          ) : ( score  == 2 ? (
            <div class="hover:bg-orange-400 hover:border-orange-500  border border-transparent radius text-center">
              <div class="text-7xl m-4">
                <img src={logo2} alt="Zero" />
              </div>
              <h2 class="font-medium color-navy-600">⭐️⭐️</h2>
            </div>
          ) : ( score  == 3 ? (
            <div class="hover:bg-blue-75 hover:border-gray-200  border border-transparent radius text-center">
              <div class="text-7xl m-4">
                <img src={logo3} alt="Zero" />
              </div>
              <h2 class="font-medium color-navy-600">⭐️⭐️⭐️</h2>
            </div>
          ) : ( score  == 4 ? (
            <div class="hover:bg-blue-400 hover:border-blue-500  border border-transparent radius text-center">
              <div class="text-7xl m-4">
                <img src={logo4} alt="Zero" />
              </div>
              <h2 class="font-medium color-navy-600">⭐️⭐️⭐️⭐️</h2>
            </div>
          ) : ( score == 5 ? (
            <div class="hover:bg-green-400 hover:border-green-500  border border-transparent radius text-center">
              <div class="text-7xl m-4">
                <img src={logo5} alt="Zero" />
              </div>
              <h2 class="font-medium color-navy-600">⭐️⭐️⭐️⭐️⭐️</h2>
            </div>
          ) : null ))))}
          </div>
)}

export default Emoji;