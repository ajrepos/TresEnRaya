import React from 'react';
import Square from './Square';
import { calculateWinner } from './calculateWinner';

interface BoardProps {
  xIsNext: boolean;
  squares: (string | null)[];
  onPlay: (nextSquares: (string | null)[]) => void;
}

const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner
    ? 'Ganador: ' + winner
    : 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {squares.slice(0, 3).map((value, index) => (
          <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((value, index) => (
          <Square key={index + 3} value={value} onSquareClick={() => handleClick(index + 3)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6).map((value, index) => (
          <Square key={index + 6} value={value} onSquareClick={() => handleClick(index + 6)} />
        ))}
      </div>
    </>
  );
};

export default Board;
