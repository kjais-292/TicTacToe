import React,{useState} from 'react'
import './winner.css'
import Button from '../button/Button'
import Board from '../board/Board'
const Winner = ({text}) => {
  const [reset,setReset]=useState(false);
  let des;
  if(text===3){ des=<h1>Oops! The match was a draw.</h1>;}
  else if(text===1){ des=<h1>Congratulations! Player X wins the game.</h1>}
  else des=<h1>Congratulations! Player O wins the game.</h1>
  const handleReset=()=>{
    console.log("don")
    setReset(true);
  }
  return (
    <>{reset?<Board/>:
    <div className="home">
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
      <div className="stars"></div>
      {des}
      <Button text="Play Again" onClick={()=>handleReset()}/>
    </div>}
    </>
  )
}

export default Winner
