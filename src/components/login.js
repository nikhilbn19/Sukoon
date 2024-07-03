import React, { useContext, useState } from 'react';
import './loginPage.css';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle, faLinkedin,faFacebook } from '@fortawesome/free-brands-svg-icons';


const Login = ({setState,setIsLogIn}) => {
  //login creds starts from here
  const [loginEmail,setLoginEmail] = useState();
  const [loginPassword,setLoginPassword] = useState();
  const [loginError,setLoginError] = useState(false);
  const [registered, setRegistered] = useState(true);
  const navigate = useNavigate();

  // for useContext purpose
  const {login} = useContext(AuthContext);
  //
  
  const handleLoginSubmit =(e) =>{
    e.preventDefault()
    axios.post('http://localhost:3001/login',{loginEmail,loginPassword})
    .then(result =>{
     
      console.log(result)
      if(result.data.status ==="Email is not registered"){
        setRegistered(false);
        navigate('/login');
      }
      else if(result.data.status==="Invalid credentials"){
        setLoginError(true);
        navigate('/login');

      }
      else if(result.data.status ==="Success"){
        setLoginError(false);
        login({name: result.data.name,email: loginEmail},()=>{
          console.log("context updated");
          navigate('/');
        });

      }
      
      
    })
    .catch(err=>console.log(err))
  }


  //login creds till here


  //registration starts from here
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [login1,setLogin] = useState(true);
  const handleSubmit = (e) =>{
    e.preventDefault();
    axios.post('http://localhost:3001/register',{name,email,password})
    .then(result => {console.log(result)
      if(result.data.status==="Email already exists"){
        
        setLogin(false);

        navigate('/register')
      }else{
        setLogin(true);
        window.location.reload();
        navigate('/login')
      
        setIsActive(false);
      }
    })
    .catch(err=> console.log(err))
  }
  //registration till here

  const [isActive, setIsActive] = useState(setState);
 
  const handleRegisterClick = () => {
    navigate('/register');
    setIsActive(true);
  };

  const onChange =()=>{
    navigate('/login');
  }

  const handleLoginClick = () => {
    navigate('/login');
    setIsActive(false);
  };

  // const onSignIn =(googleUser) => {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i><FontAwesomeIcon icon={faGoogle}/></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i><FontAwesomeIcon icon={faGithub}/></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" required onChange={(e)=>setName(e.target.value)}/>
          <input type="email" placeholder="Email" required onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" required onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={onChange}>Sign Up</button>
          {login1 ? <p></p> : <p style={{fontSize: '15px', color: 'red'}}>The email is already used</p> }
        </form>
      </div>
      <div className="form-container sign-in">
          <form onSubmit={handleLoginSubmit}>
            <h1>Sign In</h1>
            <div className="social-icons">
            <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i><FontAwesomeIcon icon={faGoogle}/></a>
            <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="#" className="icon"><i className="fa-brands fa-github"></i><FontAwesomeIcon icon={faGithub}/></a>
            <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
            <span>or use your email password</span>
            <input type="email" placeholder="Email" required onChange={(e)=>setLoginEmail(e.target.value)}/>
            <input type="password" placeholder="Password" required onChange={(e)=>setLoginPassword(e.target.value)}/>
            {/* <a href="#">Forget Your Password?</a> */}
            <button>Sign In</button>
            { loginError ? <p style={{fontSize: '15px', color: 'red'}}>The password is incorrect</p>:<p></p>}
            {registered ? <p></p>:<p style={{fontSize: '15px', color: 'red'}}>Email is not registered</p>}
          </form>
        
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p id='change-txt'> Enter your personal details to use all of site features</p>
            <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p id='change-text'> Register with your personal details to use all of site features</p>
            <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;