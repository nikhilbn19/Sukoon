import React from 'react';
import blog1Image from '../assets/images/blog1.jpg';
import blog2Image from '../assets/images/blog2.jpg';
import blog3Image from '../assets/images/blog3.jpg';
import blog4Image from '../assets/images/blog4.jpg';
import blog5Image from '../assets/images/blog5.jpg';
import blog6Image from '../assets/images/blog6.jpg';
import blog7Image from '../assets/images/blog7.jpg';
import blog8Image from '../assets/images/blog8.jpg';
import blog9Image from '../assets/images/blog9.jpg';
import '../assets/css/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

export const BlogBox = ({ image, date, author, title, link, para }) => {
  return (
    <div className="box">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <div className="icon">
          <a href="#"><FontAwesomeIcon icon={faCalendar} /> {date}</a>
          <a href="#"><FontAwesomeIcon icon={faUser} /> by {author}</a>
        </div>
        <h3>{title}</h3>
        <p>{para}</p>
        <a href={link} target="_blank" className="btn"> read more <FontAwesomeIcon icon={faChevronRight} /></a>
      </div>
    </div>
  );
};

const Blogs = () => {
  return (
    <>
    <Header/>
    <section className="blogs" id="blogs">
      <h1 className="heading"> our <span>blogs</span></h1>
      <div className="box-container">
        <BlogBox image={blog1Image} date="11th December 2023" author="Sheldon A Jacobs" title="From Gang Member to Mental Health Advocate" link="https://www.nami.org/criminal-justice-and-legal/from-gang-member-to-mental-health-advocate/" para="I grew up in an inner-city community in San Diego, California, called “Southeast.” This area has always been known for crime, drugs and — most notably — gangs. Despite my family's well-intentioned efforts to keep me away from gangs, the gang culture still pulled me in....."/>
        <BlogBox image={blog2Image} date="25th October 2023" author="Katty Otto" title="How EMDR Healed My Trauma" link="https://www.nami.org/other-treatments/how-emdr-healed-my-trauma/" para="You've been doing it all along.”
These were the words of my startled, excited therapist years ago in her office. I had come to her desperate to unlock and heal traumas that had built up over time. I was about a year into a romantic relationship that would become my marriage; a relationship so healthy, stable and functional that I was trying to self-sabotage....." />
        <BlogBox image={blog3Image} date="October 20, 2023" author="International OCD Foundation" title="How Research Is Advancing Our Understanding of OCD" link="https://www.nami.org/health-professional/how-research-is-advancing-our-understanding-of-ocd/" para="As NAMI and the International OCD Foundation (IOCDF) come together to celebrate the accomplishments of Sabine Wilhelm, PhD, the winner of NAMI’s 2023 Scientific Research Award, we are reminded of the intricate nature of OCD and the critical importance of research in unraveling its complexities....."/>
        <BlogBox image={blog4Image} date="October 13, 2023" author="Margot Harris" title="The Reality of “High Functioning” Depression" link="https://www.nami.org/depression-disorders/the-reality-of-high-functioning-depression/" para="The day I turned in my master's thesis, I woke up early. I curled my hair and applied a generous coat of makeup — even making time for contouring and setting spray. I posed for pictures with a school friend; we beamed, holding our freshly printed and bound 100-page documents. Sometimes, I look back at the photos to inspect the scene: I appear comfortable, leaning against the ivy-covered wall at my university, which I chose for its prestige....." />
        <BlogBox image={blog5Image} date="October 06, 2023" author="David Krasky" title="Building Connections: How Relationships and Time with Peers Can Improve Mental Health" link="https://www.nami.org/complimentary-health-approaches/building-connections-how-relationships-and-time-with-peers-can-improve-mental-health/" para="At the risk of showing my age, I preface this blog post by saying, back when I was a kid all we did was hang out with each other We'd go to the mall, play sports, hang out at each other's houses and go home only when we had no other choice....." />
        <BlogBox image={blog6Image} date="September 27, 2023" author="Julie Ebin, EdM" title="Taking Community Suicide Prevention to the Next Level" limk="https://www.nami.org/complimentary-health-approaches/taking-community-suicide-prevention-to-the-next-level/" para="
Every community-led suicide prevention effort has its own origin story. Many were formed in the aftermath of a loved one's death or to address a community trauma. Some that already exist want to have a bigger impact. But before any group can make a difference for people"/> 
        <BlogBox image={blog8Image} date="September 01, 2023" author="Marielys Camacho-Reyes" title="7 Lessons I Learned as a Survivor of a Friend's Suicide" limk="https://www.nami.org/family-member-caregivers/7-lessons-i-learned-as-a-survivor-of-a-friends-suicide/" para="As today’s students face alarming challenges in the realm of mental health, September’s observance of Suicide Prevention Month is an opportune time to start impactful conversations about mental illness and the emotional well-being of young adults....." />
        <BlogBox image={blog9Image} date="August 28, 2023" author="Dr. Stephanie Larsen" title="Tips For Easing Back-to-School Anxiety" link="https://www.nami.org/anxiety-disorders/tips-for-easing-back-to-school-anxiety/" para="As summer ends, a mix of emotions can fill households. While some parents eagerly anticipate sending their kids back to school, and some kids look forward to reuniting with friends and teachers, this time of year can also be met with anxiety and frustration....." />
      </div>
    </section>
    </>
  );
};


export default Blogs;
