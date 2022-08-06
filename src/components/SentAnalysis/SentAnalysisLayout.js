import React, { useState, useEffect } from 'react';
import Emoji from './Results/Emoji';
import Analyzer from './Analyzer';
import './SentAnalysisLayout.scss';
import '@jotforminc/jotform.css';
import Layout from '../Layout';

const SentAnalysisLayout = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(result);
  });
  return (
    <Layout>
      <div className="flex-row flex grow-1">
        <div className="analyzer-component-left">
          <div className='analyzer-input'>
            <Analyzer setResult={setResult} setLoading={setLoading}/>
          </div>
        </div>
        <div className="result-component-right">
          <Emoji result={result} loading={loading} />
        </div>
      </div>
    </Layout>
  );
};

export default SentAnalysisLayout;