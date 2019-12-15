import React, {Component} from 'react';
import './App.css';
import Chessboard from 'chessboardjsx';
import Chess from 'chess.js';
import Demo from "./Demo";



export default class ChessExample extends Component {
  
  render() {
    // random chess game
    var chess = new Chess();

      while (!chess.game_over()) {
        var moves = chess.moves();
        var move = moves[Math.floor(Math.random() * moves.length)];
        chess.move(move);
      }
      console.log(chess.pgn());
    return (
      <div>
        <h1>test</h1>
        <Chessboard position="start"/>
        <Demo />
      </div>
    )
  }
}