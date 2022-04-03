import React from 'react'
import './experience.css'
import ExpCard from './ExpCard'
import expfr from './expfr'
import expbk from './expbk'
import { BiKey } from 'react-icons/bi'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {expfr.map(props => <ExpCard icon={props.icon} name={props.name} exp={props.exp}/>)}
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {expbk.map(props => <ExpCard icon={props.icon} name={props.name} 
            exp={props.exp}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience