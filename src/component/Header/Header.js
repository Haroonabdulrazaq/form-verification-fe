import React from 'react';
import './header.scss'

function Header() {

  return (
    <div className='header-wrapper' data-test='header-wrapper'>
      <p data-test='navbar-brand-text'>Form Verification</p>
    </div>
  )
}

export default Header;
