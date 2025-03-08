import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import sample from '../assets/sample.jpg'
import TypingAnimation from '../component/TypingText';

const Login = () => {

  return (
    <>
    

   <div className='main-log'>
    <div className='left'>
    <div className='topic'>
        <h1>
            FlowFi
          </h1>
          <h1>
          FlowFi
          </h1>
          {/* <h2>Effortless money flow management</h2> */}
          <TypingAnimation/>
    </div>



   

    </div>
    <div className='right'>
    <div className={`login-container `}>
      <h2>Login</h2>
      <form>
        <input className='user' type="email" placeholder="Email" required />
        <input className='pass' type="password" placeholder="Password" required />
        <button className='sub' type="submit">Login</button>
      </form>
      <p className='l'>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      
    </div>

    </div>
   </div>
    </>
  );
};

export default Login;