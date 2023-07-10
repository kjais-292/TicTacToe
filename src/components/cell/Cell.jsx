import React from 'react'
import './cell.css'
const Cell = ({value,onClick}) => {
  return (
      <div className="cell-container glow-on-hover"  onClick={onClick}>{value}</div>
  )
}

export default Cell
