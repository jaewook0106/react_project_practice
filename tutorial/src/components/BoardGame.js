import React, { Component } from 'react';
import './BoardGame.css';

class Square extends Component {

  constructor(props){
    super(props);
    // console.log(props)
    this.state = {
      item: null,
    }
    // this.setNum = this.setNum.bind(this)
  }

  setNum = () => {
    console.log(this)
    this.setState({item:'X'})
  }

  render() {
    return (
      <button className="square" 
      onClick={this.setNum}
      >
        {this.state.item}
      </button>
    );
  }
  
}



class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
      squares:Array(9).fill(null)
    }
  }

  renderSquare(i) {
    return <Square item={i}/>
  }

  render() {
    const status = 'Next player: X';
    
    return (
      <div className="game_cont">
        <div className="status">{status}</div>
        <div className="board_cont">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
        
      </div>
    );
  }
}

class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


export default Game;