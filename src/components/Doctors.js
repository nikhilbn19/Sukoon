import React from 'react';
import doctor1 from '../assets/images/doctor1.jpg';
import doctor2 from '../assets/images/doctor2.jpg';
import doctor3 from '../assets/images/doctor3.jpg';
import doctor4 from '../assets/images/doctor4.jpg';
import doctor5 from '../assets/images/doctor5.1.jpg';
import doctor6 from '../assets/images/doctor6.jpg';
import doctor7 from '../assets/images/doctor7.jpg';
import doctor8 from '../assets/images/doctor8.jpg';
import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Header from './Header';




const Doctors = () => {
  return (
    <>
    <Header/>
    <section className="doctors" id="doctors">
    <h1 className="heading"> our <span>doctors</span> </h1> 
      <div className="box-container">
        <div className="box">
          <img src={doctor1} alt="" />
          <h3> Dr. Gourav Gupta </h3>
          <span>expert psychiatric</span>
          <div className="share">
            <a href="https://www.facebook.com/p/Doctor-Gorav-Gupta-100072600483765/?_rdr" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://x.com/goravgupta" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/tulasihealthcare_insta/p/C7Oe1TxyXky/" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/dr-gorav-gupta/" className="fab fa-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>

        <div className="box">
          <img src={doctor2} alt="" />
          <h3>  Dr. Samira Parikh </h3>
          <span>expert psychiatric</span>
          <div className="share">
            <a href="https://www.facebook.com/samirparikhpsy/" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://x.com/dr_samirparikh?lang=en" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/fortismentalhealth/" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/drsamirparikh/?originalSubdomain=in" className="fab fa-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
          
        <div className="box">
          <img src={doctor3} alt="" />
          <h3>  Dr.Sameera Malhotra </h3>
          <span>expert psychiatric</span>
          <div className="share">
            <a href="https://www.facebook.com/medtalksindia/" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://twitter.com/medtalksin" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/medtalksindia/" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/company/medtalks-healthcare/" className="fab fa-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
          
        <div className="box">
          <img src={doctor4} alt="" />
          <h3>  Dr. Ajit Dandekar</h3>
          <span>expert psychiatric</span>
          <div className="share">
            <a href="https://www.facebook.com/p/Doctor-Gorav-Gupta-100072600483765/?_rdr" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://x.com/goravgupta" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/tulasihealthcare_insta/p/C7Oe1TxyXky/" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/company/hexahealth/" className="fab fa-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
          
        <div className="box">
          <img src={doctor5} alt="" />
          <h3>  Dr. Murali Raj </h3>
          <span>expert psychiatric</span>
          <div className="share">
            <a href="https://www.facebook.com/p/Doctor-Gorav-Gupta-100072600483765/?_rdr" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://x.com/goravgupta" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/tulasihealthcare_insta/p/C7Oe1TxyXky/" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/dr-gorav-gupta/" className="fab fa-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
          
        <div className="box">
          <img src={doctor6} alt="" />
          <h3>  Dr. Jyoti Kapoor </h3>
          <span>expert psychiatric</span>
          <div className="share">
            <a href="https://www.facebook.com/p/Doctor-Gorav-Gupta-100072600483765/?_rdr" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://x.com/goravgupta" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/tulasihealthcare_insta/p/C7Oe1TxyXky/" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/dr-gorav-gupta/" className="fab fa-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>

        <div className="box">
          <img src={doctor7} alt="" />
          <h3>   Dr. Vikram Patel </h3>
          <span>expert psychiatric</span>
          <div className="share">
            <a href="https://www.facebook.com/p/Doctor-Gorav-Gupta-100072600483765/?_rdr" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://x.com/goravgupta" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/tulasihealthcare_insta/p/C7Oe1TxyXky/" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/dr-gorav-gupta/" className="fab fa-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>

        <div className="box">
          <img src={doctor8} alt="" />
          <h3>  Dr. Parmanand Kulhara </h3>
          <span>expert psychiatric</span>
          <div className="share">
            <a href="https://www.facebook.com/p/Doctor-Gorav-Gupta-100072600483765/?_rdr" className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://x.com/goravgupta" className="fab fa-twitter"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.instagram.com/tulasihealthcare_insta/p/C7Oe1TxyXky/" className="fab fa-instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.linkedin.com/in/dr-gorav-gupta/" className="fab fa-linkedin"> <FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>


        </div>
      
    </section>
    </>
  );
};


export default Doctors;
