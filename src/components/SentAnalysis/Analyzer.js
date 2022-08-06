import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import './Analyzer.scss';

const initialValues = {
  ticket: ''
};

const validationSchema = Yup.object({
  ticket: Yup.string().required('Text is required !')
});

// eslint-disable-next-line react/prop-types
const Analyzer = props => {
  const [value, setValue] = useState('');

  const fetchData = async () => {
    // eslint-disable-next-line no-undef
    const postData = new FormData();
    postData.append('text', value);
    const response = await fetch(
      'https://ga-safdil.jotform.dev/intern-api/text_analysis',
      {
        method: 'POST',
        body: postData
      }
    );
    const data = await response.json();
    // eslint-disable-next-line react/prop-types
    props.setResult(data.content.score);
  };

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    props.setLoading(true);
    setTimeout(() => {
      // eslint-disable-next-line react/prop-types
      props.setLoading(false);
    }, 1000);
    fetchData();
  }, [value]);

  const onSubmit = async values => {
    await setValue(values.ticket);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({
        values, handleChange, handleBlur, errors, touched
      }) => (
        <Form>
          <div className='form-control'>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <textarea
              className=''
              type='text'
              id='ticket'
              name='ticket'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.ticket}
            />
            {touched.ticket && errors.ticket ? (<div className='error'>{errors.ticket}</div>) : null}
          </div>
          <button type='submit' className="ease-out duration-300 bg-red-300 hover:bg-red-500 color-white py-2 px-4 radius">Analyze Sentiment!</button>

        </Form>
      )}
    </Formik>
  );
};

export default Analyzer;
