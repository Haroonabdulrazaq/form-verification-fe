import React, {useState} from 'react';
import './form.scss';


const Form = () => {
  const [pages, setPages] = useState(0);
  const pageArray=['1', '2']

  const handleNext = ()=>{
    setPages(pages + 1)
  }
  const handlePrev = ()=>{
    setPages(pages - 1)
  }
  return (
    <div className='form-wrapper'>
      <div className='form'>
        <div className='header'>
          {pageArray[pages]}
        </div>
        <div className='content'>
          {
            pages=== 0?
            <div>
              <input type='email' placeholder='John@mail.com' className='input' />
              <input type='text' placeholder='Firstname' className='input' />
              <input type='text' placeholder='Lastname' className='input' />
            </div> : <div>
              <input type='password' placeholder='Password' className='input' />
              <input type='password' placeholder='Confirm Password' className='input' />
            </div>
          }
        </div>
        <div className='footer'>
          <button className='prev' disabled={pages===0} onClick={handlePrev}>Prev</button>
          <button className='next' disabled={pages===1} onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  )
}

export default Form;
