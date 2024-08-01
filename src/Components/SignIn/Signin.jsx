import React from 'react';
import Navbar from '../LandingPage/Navbar/Navbar';

function Signin() {
  return (
    <>
      <Navbar showSignInButton={false} showSignUpButton={false}  />
      <div className='h-screen'>
        <h1>Sign In Page</h1>
      </div>
    </>
  );
}

export default Signin;
