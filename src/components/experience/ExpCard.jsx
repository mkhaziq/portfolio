import React from 'react'

const ExpCard = (props) => {
  return (
    <article className='experience__detials'>
        <div className="experience__details-icons">{props.icon}</div>
        <div>
        <h4>{props.name}</h4>
        <small className='text-light'>{props.exp}</small>
        </div>
    </article>
  )
}

export default ExpCard