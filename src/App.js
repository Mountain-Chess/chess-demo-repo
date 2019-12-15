import React, {Component} from 'react';
import './App.css';
import Chessboard from 'chessboardjsx';
import Demo from "./Demo";



export default class ChessExample extends Component {
  
  render() {
    return (
      <div>
        <h1>test</h1>
        <Chessboard position="start"/>
        <Demo />
      </div>
    )
  }
}