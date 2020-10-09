import React from "react";
import "./Tetris.css";
import NextBlock from "./NextBlock";
import RotateBlock from "./RotateBlock";
import Board from "./Board";
import Control from "./Control";


class Tetris extends React.Component {
  render() {
    return (
      <>
        <div className="game-title">Welcome to Tetris.</div>
        <Board />
        <NextBlock />
        <RotateBlock />
        <Control />
      </>
    );
  }
}

export default Tetris;
