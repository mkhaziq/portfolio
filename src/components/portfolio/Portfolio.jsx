import React from 'react'
import './portfolio.css'
import data from './data'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({id, image, title, github, live}) => {
          return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={live} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio