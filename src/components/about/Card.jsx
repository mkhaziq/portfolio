import React from 'react'

const Card = (props) => {
  return (
    <article className='about__card'>
        <div className='about__icon'>{props.icon}</div>
        <h5>{props.top}</h5>
        <small>{props.exp}</small>
    </article>
  )
}

export default Card