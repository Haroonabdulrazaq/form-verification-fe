import React from 'react';
import './TextError.scss';

const TextError = ({ children }) => (
  <div className="error">
    Error:
    {' '}
    {children}
  </div>
);

export default TextError;
