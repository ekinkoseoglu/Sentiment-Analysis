/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
import React, {useCallback} from 'react';
import Table from './Table';
import Charts from './Charts';
import Header from "./Header";
// import SentAnalysisLayout from '../../../sent-analysis/src/components/sent-AnalysisLayout';
import '@jotforminc/jotform.css';
import { Route, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPageName } from '../features/pages/pageSlice';

const Layout = (props) => {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pageName = useSelector(state => state.pageName);
  console.log(pageName);

  return (
    <div>
      <Header />
      <div className="flex">
      <div className={`${open ? 'w-64' : 'w-24'} duration-300 flex flex-col bg-navy-700 color-white h-screen px-4 py-8 overflow-y-auto border-r`}>
        <div className="flex flex-col justify-between">
          <div>
          <div className={`${pageName.pageName == 'Tickets' ? 'bg-navy-400' : ''} flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-navy-600 radius-md cursor-pointer`} onClick={() => {navigate('/'); dispatch(setPageName('Tickets')); }}>
                <img src="https://www.seekpng.com/png/full/50-505253_buy-tickets-icon-ticket-icon-white-png.png" alt="ticket" className="w-7" />
                  <span className={`mx-4 font-medium transform duration-300 ${!open && 'scale-0'}`}>Tickets</span>
              </div>

              <div className={`${pageName.pageName == 'Charts' ? 'bg-navy-400' : ''} flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-navy-600 radius-md cursor-pointer`} onClick={() => {navigate('/charts'); dispatch(setPageName('Charts'));}}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Line_chart_icon_Noun_70892_cc_White.svg" alt="ticket" className="h-7" />
                  <span className={`mx-4 font-medium transform duration-300 ${!open && 'scale-0'}`}>Charts</span>
              </div>

              <div className={`${pageName.pageName == 'Sentiment Analyzer' ? 'bg-navy-400' : ''} flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-navy-600 radius-md cursor-pointer`} onClick={() => {navigate('/sent-analysis'); dispatch(setPageName('Sentiment Analyzer'));}}>
              <img src="https://i.ibb.co/R22B7cf/output-onlinepngtools.png" alt="ticket" className="h-7" />
                  <span className={`mx-4 font-medium transform duration-300 ${!open && 'scale-0'}`}>Sent Analysis</span>
              </div>

              <div className={`${pageName.pageName == 'Search Ticket' ? 'bg-navy-400' : ''} flex items-center px-4 py-2 mt-2 text-gray-700 hover:bg-navy-600 radius-md cursor-pointer`} onClick={() => {navigate('/search-ticket'); dispatch(setPageName('Search Ticket'));}}>
              <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik03Mi4yNCwxMC4zMmMtMzIuMzMwNjIsMCAtNTguNDgsMjYuMTQ5MzggLTU4LjQ4LDU4LjQ4YzAsMzIuMzMwNjMgMjYuMTQ5MzgsNTguNDggNTguNDgsNTguNDhjMTEuNTQyODEsMCAyMi4yMjU2MywtMy4zODYyNSAzMS4yODI1LC05LjEzNzVsNDIuMjQ3NSw0Mi4yNDc1bDE0LjYyLC0xNC42MmwtNDEuNzEsLTQxLjYwMjVjNy40OTgxMywtOS44MzYyNSAxMi4wNCwtMjIuMDI0MDYgMTIuMDQsLTM1LjM2NzVjMCwtMzIuMzMwNjIgLTI2LjE0OTM3LC01OC40OCAtNTguNDgsLTU4LjQ4ek03Mi4yNCwyNC4wOGMyNC43NjUzMSwwIDQ0LjcyLDE5Ljk1NDY5IDQ0LjcyLDQ0LjcyYzAsMjQuNzY1MzEgLTE5Ljk1NDY5LDQ0LjcyIC00NC43Miw0NC43MmMtMjQuNzY1MzEsMCAtNDQuNzIsLTE5Ljk1NDY5IC00NC43MiwtNDQuNzJjMCwtMjQuNzY1MzEgMTkuOTU0NjksLTQ0LjcyIDQ0LjcyLC00NC43MnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==" alt="ticket" className="h-7" />
                  <span className={`mx-4 font-medium transform duration-300 ${!open && 'scale-0'}`}>Search Ticket</span>
              </div>
          </div>             
          {open ? 
          <div className="absolute bottom-0 pb-2 text-xs radius" onClick={() => setOpen(!open)}>
          <svg xmls="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24"><path d="M20 12H4m0 0l6 6m-6-6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div> :
          <div className="absolute bottom-0 pb-2 text-xs radius" onClick={() => setOpen(!open)}>
          <svg xmls="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </div>}
          
        </div>
      </div>
      <div className="w-full h-full overflow-y-auto">
        <div className="flex h-screen justify-center">
          {props.children}
        </div>
      </div>
      </div>
   </div>
  );
};

export default Layout;
