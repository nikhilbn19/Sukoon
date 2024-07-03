import React from 'react';
import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = ({ footerRef }) => {
  return (
    <footer className="footer" ref={footerRef}>
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <Link to='/'><i className="fas fa-chevron-right"></i>home</Link>
          <Link to='/doctors'><i className="fas fa-chevron-right"></i>doctors</Link>
          <Link to='/book'><i className="fas fa-chevron-right"></i>book</Link>
          <Link to='/blogs'><i className="fas fa-chevron-right"></i>blogs</Link>
          <Link to='/chatbot'><i className="fas fa-chevron-right"></i>Chatbot</Link>
        </div>
        <div className="box">
          <h3>contact info</h3>
          <a href="#"><i className="fas fa-phone"></i>+91 8123418902 </a>
          <a href="#"><i className="fas fa-phone"></i>+91 7975314326</a>
          <a href="#"><i className="fas fa-phone"></i>+91 7483138643</a>
          <a href="#"><i className="fas fa-envelope"></i>  email </a>
          <a href="#"><i className="fas fa-map-marker-alt"></i> mysuru, india - 400104 </a>
        </div>
        <div className="box">
          <h3>follow us</h3>
          <a href="#"><i className="fab fa-facebook-f"></i> <FontAwesomeIcon icon={faFacebook} /> facebook </a>
          <a href="#"><i className="fab fa-twitter"></i> <FontAwesomeIcon icon={faTwitter} /> twitter </a>
          <a href="#"><i className="fab fa-instagram"></i> <FontAwesomeIcon icon={faInstagram} /> instagram </a>
          <a href="#"><i className="fab fa-linkedin"></i> <FontAwesomeIcon icon={faLinkedinIn} /> linkedin </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

