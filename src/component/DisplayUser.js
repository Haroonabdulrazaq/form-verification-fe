import React from 'react';
import { AiFillInfoCircle , AiOutlineCloseCircle} from 'react-icons/ai';
import './displayUser.scss';

function DisplayUser({userInfo, handleClose}) {
  console.log('I am User info in Display', userInfo);
  const {email, firstname, lastname} = userInfo;
  return (
    <div className='userInfo-wrapper'>
      <AiOutlineCloseCircle className='close-icon' onClick={handleClose} />
      <h2 className='welcome-info'> <AiFillInfoCircle className='info-icon' />Hello {firstname}, your information has been recorded successfully</h2>
      <div className='info'>
        <p>Firstname: {firstname}</p>
        <p>Lastname: {lastname}</p>
        <p>Email: {email}</p>
      </div>
      <button className='close-btn' onClick={handleClose}> Close </button>
    </div>
  )
}

export default DisplayUser;
