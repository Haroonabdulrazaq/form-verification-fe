import React from 'react';
import {
  Field,
  ErrorMessage,
 } from 'formik';
 import TextError from './TextError';

const SecondForm = () => {
  return (
    <div>
      <div className='div-input'>
        <Field type='password' id='password' name='password' placeholder='Password' className='input' />
        <ErrorMessage name='password' component={TextError} />
      </div>
      <div className='div-input'>
        <Field type='password' id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' className='input' />
        <ErrorMessage name='confirmPassword' component={TextError} />
      </div>
    </div>
  )
}

export default SecondForm
