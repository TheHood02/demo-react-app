import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext';

const LinkButton = (props) => {

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#262626' : '#E1E6EC',
    color: darkTheme ? '#7D7D7D' : '#7D8997',
  }

  return (
    <Link to={props.to}>
        <button className='link shadow-hover' style={themeStyles}>{props.title}</button>
    </Link>
  )
}

export default LinkButton