// Importamos React y otros componentes necesarios
import React from 'react';
import Square from './Square'; // Importamos el componente Square que representa cada casilla del tablero
import { calculateWinner } from './calculateWinner'; // Importamos la función que calcula si hay un ganador

// Definimos el tipo de las propiedades (props) que recibe el componente Board
interface BoardProps {
  xIsNext: boolean; // Indica si es el turno de 'X' (si es true) o 'O' (si es false)
  squares: (string | null)[]; // El estado del tablero, un arreglo de 9 elementos que puede ser 'X', 'O' o null
  onPlay: (nextSquares: (string | null)[]) => void; // Función que actualiza el estado del tablero en el componente padre
}

// El componente Board recibe las propiedades definidas en BoardProps
const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {

  // Función que se ejecuta cuando el jugador hace clic en una casilla
  function handleClick(i: number) {
    // Si ya hay un ganador o la casilla está ocupada, no hacemos nada
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Si la casilla está vacía, se crea una copia del tablero
    const nextSquares = squares.slice();
    // Asignamos el valor 'X' o 'O' dependiendo de quien es el siguiente jugador
    nextSquares[i] = xIsNext ? 'X' : 'O';

    // Llamamos a la función onPlay para actualizar el tablero en el componente padre
    onPlay(nextSquares);
  }

  // Comprobamos si hay un ganador
  const winner = calculateWinner(squares);

  // Definimos el mensaje a mostrar en el estado
  let status = winner
    ? 'Ganador: ' + winner // Si hay un ganador, mostramos el nombre del ganador
    : 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O'); // Si no hay ganador, mostramos el siguiente jugador

// El JSX que renderiza el tablero
return (
  <>
    {/* Mostramos el estado del juego (ganador o siguiente jugador) */}
    <div className="status">{status}</div>
    
    {/* Renderizamos la primera fila del tablero */}
    <div className="board-row">
      {squares.slice(0, 3).map((value, index) => (
        // Por cada casilla de la primera fila, renderizamos un componente Square
        <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
      ))}
    </div>
    
    {/* Renderizamos la segunda fila del tablero */}
    <div className="board-row">
      {squares.slice(3, 6).map((value, index) => (
        // Por cada casilla de la segunda fila, renderizamos un componente Square
        <Square key={index + 3} value={value} onSquareClick={() => handleClick(index + 3)} />
      ))}
    </div>
    
    {/* Renderizamos la tercera fila del tablero */}
    <div className="board-row">
      {squares.slice(6).map((value, index) => (
        // Por cada casilla de la tercera fila, renderizamos un componente Square
        <Square key={index + 6} value={value} onSquareClick={() => handleClick(index + 6)} />
      ))}
    </div>
  </>
);
};

// Exportamos el componente Board para que pueda ser utilizado en otros archivos
export default Board;
