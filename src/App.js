import { useState } from "react";
import "./App.css";
import roll from './img/roll.png'



function App() {
  const [player1, setplayer1] = useState({
    name: "player 1",
    score: 0,
    active: true,
  });
  const [player2, setplayer2] = useState({
    name: "player 2",
    score: 0,
    active: false,
  });
  const [dice, setdice] = useState(0);

  const rollDice = () => {
    const num = Math.floor(Math.random() * 7);
    setdice(num);
    if (player1.active) {
      setplayer1({
        ...player1,
        score: player1.score + num,
        active: num !== 0,
      });
      setplayer2({
        ...player2,
        active: num === 0,
      });
    }
    else if(player2.active){
      setplayer2({
        ...player2,
        score: player2.score + num,
        active: num !== 0,
      })
    }else{
      if(player1.score>player2.score){
        alert(
          `${player1.name} is won by getting ${player1.score - 
          player2.score} extra point.`
        )
      }else{
        alert(
          `${player2.name} is won by getting ${player2.score - 
          player1.score} extra point.`
        )
      }
    }
  };

  return (
    <>
      <div className="contaniner">
        <h1>Roll Dice</h1>
        <div className="wappers">
          <div className="user-first">
            <h2>{player1.name}</h2>
            <h3>{player1.score}</h3>
          </div>
          <div>
            <img alt="" src={require(`./img/dice ${dice}.png`)} height="35"/>
          </div>
          <div className="user-second">
            <h2>{player2.name}</h2>
            <h3>{player2.score}</h3>
          </div>
        </div>
        <div className="text_count">
        
          {dice}
        </div>
        <div className="main">
          
          <button onClick={rollDice} className="btn-roll"><img src={roll} alt="roll" width="15px" height="15px"/> Roll Dice</button>
        </div>
      </div>
    </>
  );
}

export default App;
