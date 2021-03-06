import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function Square(props) {
//   return (
//     <button className='square' onClick={props.onCheck}>
//       {props.value}
//     </button>
//   );
// }
class Square extends React.Component {
  handleCheckX = () => {
    this.props.onCheck();
  };

  render() {
    return (
      <button className='square' onClick={this.handleCheckX}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  state = { squares: Array(9).fill(null) };

  handleCheckX = (i) => {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares });
  };

  renderSquare(i) {
    return (
      <Square
        onCheck={() => this.handleCheckX(i)}
        value={this.state.squares[i]}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className='status'>{status}</div>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
