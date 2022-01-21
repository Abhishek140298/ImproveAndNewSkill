import React from 'react';
import './index.css';

const SignUp = () => {
  return (
    <div className='signup_main_div'>
      <div className='signup_details_page'>
        <span className='signup_head'>Sign Up</span>
        <div className='signup_detail_box'>
          <input className='signup_details' placeholder='Name' />
          <input className='signup_details' placeholder='Mobile Number' />
          <input className='signup_details' placeholder='email' />
          <input className='signup_details' placeholder='password' />
          <input className='signup_details' placeholder='confirm password' />
       
        </div>
				   <span className='singup_checkbox_box'>
            <input type='checkbox' />I accept the terms and condition
          </span>
					<div className='signup_button_details'><button className='signup_button'>Sign Up</button></div>
      </div>
    </div>
  );
};

export default SignUp;
