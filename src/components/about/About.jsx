import React from 'react'
import './about.css'
import ME from '../../assests/Me2.jpg'
import cards from './cards'
import Card from './Card'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="me" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            {cards.map(props => <Card icon={props.icon} top={props.top} exp={props.exp}/> )}
          </div>
          
          <p>Hi there! My name is Muhammad Khaziq. I am currently a bachelors student. Studying Information Technology (IT) from International Islamic University Islamabad.I Am also working as a Mern Stack Developer. Below is the rest of information about my recent projects and etc...</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About