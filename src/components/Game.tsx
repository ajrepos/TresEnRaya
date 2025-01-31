// Importamos React y useState para manejar el estado
import React, { useState } from 'react';
// Importamos el componente Board que representa el tablero
import Board from './Board';

// Componente principal del juego
const Game: React.FC = () => {
  
  // Definimos el estado de la historia de los movimientos y el movimiento actual
  // `history` es un arreglo de tableros en cada movimiento (el historial de juegos)
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]);
  // `currentMove` es el índice del movimiento actual (el turno en el juego)
  const [currentMove, setCurrentMove] = useState<number>(0);

  // Determinamos si es el turno de X o O
  const xIsNext = currentMove % 2 === 0;  // Si el movimiento es par, le toca a X

  // El tablero actual es el que corresponde al movimiento actual
  const currentSquares = history[currentMove];

  // Función que se llama cuando un jugador hace un movimiento
  function handlePlay(nextSquares: (string | null)[]) {
    // Creamos el siguiente historial: copiamos el historial anterior y añadimos el nuevo tablero
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // Actualizamos el estado con el nuevo historial y el movimiento actual
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1); // El movimiento actual es el último del historial
  }

  // Función que se llama para saltar a un movimiento específico
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove); // Establecemos el movimiento que el usuario selecciona
  }

  // Generamos los botones que permiten ir a un movimiento previo
  const moves = history.map((squares, move) => {
    // Descripción de cada movimiento
    const description = move > 0 ? 'Ir al movimiento #' + move : 'Ir al inicio del juego';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // El JSX que renderiza el juego: tablero y lista de movimientos
  return (
    <div className="game">
      <div className="game-board">
        {/* Renderizamos el tablero, pasando las props necesarias */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        {/* Lista de movimientos previos */}
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

// Exportamos el componente Game para poder usarlo en otros archivos
export default Game;
