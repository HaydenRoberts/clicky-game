import React from "react";

const Header = props => (
  <div className="header row">
    <div className="logo"><a href="/"> Camping Clicky Game</a></div>
    <div className="score">
    Score: <span className="scoreboard">{props.score}</span> 
    | High Score: <span className="scoreboard">{props.highScore}</span></div>
  </div>
);

export default Header;
