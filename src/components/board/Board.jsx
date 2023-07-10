import React from 'react'
import './board.css'
import Cell from '../cell/Cell'
import { useState } from 'react'
import Winner from '../winner/Winner'
import Button from '../button/Button'
const Board = () => {
  const [state,setState]=useState(Array(9).fill(null));
  const [isXTurn,setIsXTurn]=useState(true);
  const checkWinner=()=>{
    const winnerLogic=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for(let e of winnerLogic){
      const [a,b,c]=e;
      if(state[a]!==null&&state[a]===state[b]&&state[b]===state[c]){
        if(state[a]==="X")return 1;return 2;
      }
    }
    let d=0;
    for(let e of winnerLogic){
      const [a,b,c]=e;
      if(state[a]!==null&&state[b]!==null&&state[c]!==null){
        d++;
      }
      if(d===8)return 3;
    }

    return 0;
  };
  const isWinner=checkWinner();
  const handleClick=(i)=>{
    if(state[i]!=null)return;
    const copystate=[...state];copystate[i]=isXTurn?"X":"O";setState(copystate);setIsXTurn(!isXTurn);
  };
  const handleReset=()=>{
    setState(Array(9).fill(null));setIsXTurn(true);
  }

  return (<>
    {isWinner===0?<>
    <div className="board">
      <div className="board-container">
        <h2 className="heading">Tic Tac Toe</h2>
        <div className="board-row">
        <Cell value={state[0]} onClick={()=>handleClick(0)}/>
        <Cell value={state[1]} onClick={()=>handleClick(1)}/>
        <Cell value={state[2]} onClick={()=>handleClick(2)}/>
        </div>
        <div className="board-row">
        <Cell value={state[3]} onClick={()=>handleClick(3)}/>
        <Cell value={state[4]} onClick={()=>handleClick(4)}/>
        <Cell value={state[5]} onClick={()=>handleClick(5)}/>
        </div>
        <div className="board-row">
        <Cell value={state[6]} onClick={()=>handleClick(6)}/>
        <Cell value={state[7]} onClick={()=>handleClick(7)}/>
        <Cell value={state[8]} onClick={()=>handleClick(8)}/>
        </div>
      </div>
      <div className="status">
      <h3>Player&nbsp;<span> {isXTurn?"X":"O"} </span>&nbsp;! Please Make your move.</h3>
      <Button text="Reset Game" onClick={()=>handleReset()}/>
      </div>
      </div></>:<Winner text={isWinner}/>
      }
      
      </>
  )
}

export default Board
