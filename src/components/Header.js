import React, { useContext, useState } from 'react';
import '../assets/css/style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link,useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from './authContext';
import ProfilePic1 from '../assets/images/profilepic1.jpg';
const Header = () => {
  const [showOptions,setShowOptions] = useState(false);
  const {isLoggedIn,user,logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const onPicClick = () =>{
    setShowOptions(!showOptions);
  }
  return (
    <header className="header">
      <Link to="/" className="logo">  <FontAwesomeIcon icon={faHeartbeat} /> Sukoon. </Link>
      <nav className="navbar">
        
        {isLoggedIn ? (
          <div style={{position: 'relative'}}>
            <Link to="/"><Button>Home</Button></Link>
            <Link to="/assessment"><Button>Assessment</Button></Link>
            <Link to="/blogs"><Button>Blog</Button></Link>
            <Link to="/doctors"><Button>Doctors</Button></Link>
            <Link to="/book"><Button>Book</Button></Link>
            <Link to="/chatbot"><Button>Chatbot</Button></Link>
            <Propic src={ProfilePic1} onClick={onPicClick} alt='profile picture'/>
            {showOptions && (
              <ProCont style={{position: 'absolute',display:'grid',right: 0,background: 'white', color: 'black', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', zIndex: 1}}>
                <Link to='/profile'><Button>Profile</Button></Link>
                <Button onClick={()=>{logout(); navigate('/')}}>Logout</Button>
                
              </ProCont>
            )}
          </div>
        ):(
          <Link to='/login' ><Button>Login</Button></Link>
        )}
        
        {/* <MenuButton><FontAwesomeIcon icon={faBars} /></MenuButton> */}
      </nav>
      
    </header>
  );
}

export default Header;

const Button = styled.button`
  font-size: 1.7rem;
  margin-left: 2rem;
  color: #777;
  :hover{
  color: #16a085;
  }
  background-color: #fff;
`;


const MenuButton = styled.div`
  font-size: 2.5rem;
    border-bottom: .5rem;
    background: #eee;
    color:var(--green);
    padding: 1rem 1.5rem;
    cursor: pointer;
    display: none;
`;

const Propic = styled.img`
  border: 1px solid black;
  border-radius: 50%;
  margin-left: 3rem;
  height: 25px;
  width: 25px;
`

const ProCont = styled.div`
  padding-left: 0px;

`

