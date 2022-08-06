/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-restricted-imports
import '@jotforminc/jotform.css';
import { getAppPath } from '@jotforminc/router-bridge';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Table from './Table';
import Charts from './Charts';
import Ticket from './Ticket';
import Search from './Search';
import SentAnalysisLayout from './SentAnalysis/SentAnalysisLayout';

const App = () => (
  <Router basename={getAppPath()}>
    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/charts" element={<Charts />} />
      <Route path="/ticket/:id" element={<Ticket />} />
      <Route path="/sent-analysis" element={<SentAnalysisLayout />} />
      <Route path="/search-ticket/" element={<Search />} />
    </Routes>
  </Router>
);

export default App;
