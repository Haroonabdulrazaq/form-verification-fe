import React from 'react';
import FlashMessage from 'react-flash-message';
import './flash.scss';

const Flash = ({ children }) => {
  return (
    <FlashMessage>
      <div className='flash-message'>
        {children}
      </div>
    </FlashMessage>
  )
}

export default Flash;
