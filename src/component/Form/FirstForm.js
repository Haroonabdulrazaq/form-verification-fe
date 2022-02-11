import React from 'react';
import {
  Field,
  ErrorMessage,
 } from 'formik';
 import TextError from './TextError';

const FirstForm = () => {
  return (
    <div>
      <div className='div-input'>
        <Field type='email' id='email' name='email' placeholder='John@mail.com' className='input' autoFocus/>
        <ErrorMessage name="email" component={TextError} />
      </div>
      <div className='div-input'>
        <Field type='text' id='firstname' name='firstname' placeholder='Firstname' className='input' />
        <ErrorMessage name='firstname' component={TextError} />
      </div>
      <div className='div-input'>
        <Field type='text' id='lastname' name='lastname' placeholder='Lastname' className='input' />
        <ErrorMessage name='lastname' component={TextError} />
      </div>
    </div>
  )
}

export default FirstForm;
