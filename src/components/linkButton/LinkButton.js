import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
        <button className='link shadow-hover'>{props.title}</button>
    </Link>
  )
}

export default LinkButton