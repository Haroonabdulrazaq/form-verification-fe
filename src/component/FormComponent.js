import React, {useState} from 'react';
import * as Yup from 'yup';
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
 } from 'formik';
import TextError from './TextError';
import Cover from './Cover';

import './form.scss';


const FormComponent = () => {
  const [pages, setPages] = useState(0);
  const pageArray=['1', '2']

  const handleNext = ()=>{
    setPages(pages + 1)
  }
  const handlePrev = ()=>{
    setPages(pages - 1)
  }

  const initialValues = {
    email: '',
    firstname: '',
    lastname: '',
    password: '',
    confirmPassword: '',
  };

  const onSubmit = (values, {resetForm}) => {
    console.log('I am here',values);
    resetForm({});
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email format').required('Email is required'),
    firstname: Yup.string().required('Firstname is required'),
    lastname: Yup.string().required('Lastname is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  return (
    <div className='form-page'>
      <Cover />
      <div className='form-wrapper'>
        <Formik 
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
          <Form>
          <div className='form'>
            <div className='header form-div'>
              {pageArray[pages]}
            </div>
            <div className='content form-div'>
              {
                pages=== 0?
                <div>
                  <div className='div-input'>
                    <Field type='email' id='email' name='email' placeholder='John@mail.com' className='input' />
                    <ErrorMessage name="email" component={TextError} />
                  </div>
                  <div className='div-input'>
                    <Field type='text' id='firstname' name='firstname' placeholder='Firstname' className='input' />
                    <ErrorMessage name='firstname' component={TextError} />
                  </div>
                  <div className='div-input'>
                    <Field type='text' id='lastname' name='lastname' placeholder='lastname' className='input' />
                    <ErrorMessage name='lastname' component={TextError} />
                  </div>
                </div> : <div>
                  <div className='div-input'>
                    <Field type='password' id='password' name='password' placeholder='Password' className='input' />
                    <ErrorMessage name='password' component={TextError} />
                  </div>
                  <div className='div-input'>
                    <Field type='password' id='confirmPassword' name='confirmPassword' placeholder='Confirm Password' className='input' />
                    <ErrorMessage name='confirmPassword' component={TextError} />
                  </div>
                </div>
              }
            </div>
            <div className='form-div buttons'>
              <div className='ctrl-btn'>
                <button className='btn prev' disabled={pages===0} onClick={handlePrev}>Prev</button>
                <button className='btn next' disabled={pages===1} onClick={handleNext}>Next</button>
              </div>
              {pages===1 && <button type='submit' className='btn submit-btn'>Submit</button> }
            </div>
          </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default FormComponent;
