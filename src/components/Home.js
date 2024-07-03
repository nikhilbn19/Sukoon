import React from 'react';
import homephoto from '../assets/images/homephoto.jpg';
import '../assets/css/style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Blogs from './Blogs';
import { UserContext } from './userContext';
import styled from 'styled-components';
import Assesment from './assessment';
import About from './About';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';



const Home = () => {
  const navigate = useNavigate();

  
  return (
    <>
    <Header/>
    <section className="home" id="home">
      <div className="image">
        <img src={homephoto} alt="" />
      </div>
      <div className="content">
        <h3>stay safe, stay healthy</h3>
        <p>Mental health is a state of mental well-being that enables people to cope with the stresses of life, realize their abilities, learn well and work well, and contribute to their community. It has intrinsic and instrumental value and is integral to our well-being.</p>
        <a href="#footer" className="btn" > contact us <FontAwesomeIcon icon={faChevronRight} /> </a>

      </div>
    </section>
    <About/>
    <Footer/>
    </>
  );

  
}

export default Home;

const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
`; 



