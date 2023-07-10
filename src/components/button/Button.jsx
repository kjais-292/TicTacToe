import React from 'react'
import './button.css'
const Button = ({text,onClick}) => {
  return (
    <div className="container">
      <a href="#home" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {text}
    </a>
    </div>
  )
}

export default Button
