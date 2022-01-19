import React from 'react';
import './index.css';

const Login = () => {
  return (
    <div className='login_view_main_div'>
      <div className='login_view_suv_div'>
        <div className='login_detail_image_view'></div>
        <div className='login_detail_view'>
          <span className='heading_div'>Login</span>
          <div className='login_input_cred_box'>
            <input className='input_cred' placeholder='UserName'/>
            <input className='input_cred' placeholder='Password' />
          </div>
          <div className='login_check_div'>
            <span className='login_check_span'>
              <input type='checkbox' />
              Keep Me logged In
            </span>
            <span className='login_check_span'>Forget Password?</span>
          </div>
					<div className='login_button_div'><button className='login_button'>Login</button></div>
							<div className='signup_option'>Create Account</div>
					<span className='login_option_span'>Or<br/> Login With </span>
					<div className='login_different_options'>Options will be here</div>
			
        </div>
      </div>
    </div>
  );
};

export default Login;
