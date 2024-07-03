import React from 'react';
import mentalHealthImage from '../assets/images/mentalhealthimage.jpg';
import '../assets/css/style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"> <span>about</span> us </h1>
      <div className="row">
        <div className="image">
          <img src={mentalHealthImage} alt="Mental Health" />
        </div>
        <div className="content">
          <h3>we care about your mental well-being</h3>
          <p>Our approach centers on treating people with the same kindness and respect that we value for ourselves. We understand mental health challenges firsthand and support your pursuit of well-being with compassion. Whether it’s connecting you with the right therapist or supporting you through difficult times, we embrace you as part of our community.</p>
          <a href="#" className="btn"> learn more <FontAwesomeIcon icon={faChevronRight} /></a>
        </div>
      </div>
    </section>
  );
}

export default About;
