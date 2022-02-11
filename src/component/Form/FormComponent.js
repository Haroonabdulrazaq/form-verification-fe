import React, {useState} from 'react';
import * as Yup from 'yup';
import {
  Formik,
  Form,
 } from 'formik';
 import axios from 'axios';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import Cover from '../Cover/Cover';
import Flash from '../Flash';
import DisplayUser from '../DisplayUser';

import './form.scss';


const FormComponent = () => {
  const [pages, setPages] = useState(0);
  const [messenger, setMessenger] = useState(false);
  const [message, setMessage] = useState('');
  const [userInfo, setUserInfo] = useState(null);
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

  const getRegisteredUser = (id) =>{
    console.log('ID in getRegUser in FE', id);
    setUserInfo(null);
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BACKEND_URL}/user`,
      params: {
        id,
      }
    }).then ((res)=> {
      console.log(res)
      // setUserInfo(res.data.result[0])
      setUserInfo({
        email: "aq@mail.com",
        firstname: "wqa",
        id: 22,
        lastname: "ccx",
        password: "$2a$10$BzsNafgF.0GZRbL6trGKAexaeVoerKw3XTaz3E3xufOFUoPGbsP4q"
      })
    }).catch((error)=>{
      console.log(error)
    })
  }

  const handleClose =() =>{
    setUserInfo(null)
  }

  const onSubmit = (values, {resetForm}) => {
    console.log('I am here',values);
    setPages(0)
    setMessenger(false)
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_BACKEND_URL}/user`,
      data: values
    }).then((res)=>{  // if resolved
      console.log(res);
      if(res.data.status === 200) {
        console.log('Status is 200');
        getRegisteredUser(res.data.result[0].id); // This function will fetch the user object
      }
      setMessenger(true);
      setMessage(res.data.msg);
    }).catch((error)=> { // if rejected
      console.log(error)
      setMessage(error.response.data.msg);
    })
    resetForm({});
  }

  const validationSchema = Yup.object({ // Form validation rules
    email: Yup.string().email('Invalid Email format').required('Email is required'),
    firstname: Yup.string()
                .min(2, 'Firstname is too short!')
                .max(50, 'Firstname is too long!')
                .matches(/[a-z]/, "Must be only Alphabet")
                .required('Firstname is required'),
    lastname: Yup.string()
                .min(2, 'Lastname is too short!')
                .max(50, 'Lastname is too long!')
                .matches(/[a-z]/, "Must be only Alphabet")
                .required('Lastname is required'),
    password: Yup.string()
                .min(4, 'Password must be minimum of 4 characters')
                .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
  })

  return (
    <div className='form-page'>
      {messenger && (
        <Flash>
          {message}
        </Flash>
      )}
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
                  <FirstForm /> :
                  <SecondForm />
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
        {userInfo && <DisplayUser handleClose={handleClose} userInfo={userInfo} />}
    </div>
  )
}

export default FormComponent;
