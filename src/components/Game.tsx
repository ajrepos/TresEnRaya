// Importamos React y useState para manejar el estado
import React, { useState } from 'react';

// Importamos el componente Board que representa el tablero
import Board from './Board';

// Componente principal del juego
const Game: React.FC = () => {
  
  // Definimos el estado de la historia de los movimientos y el movimiento actual
  // `history` es un arreglo de tableros en cada movimiento (el historial de juegos)
  const [history, setHistory] = useState<(string | null)[][]>([Array(9).fill(null)]); 
  // Inicializamos el estado `history` como un arreglo que contiene un solo tablero vacío (9 casillas con valor null).
  
  // `currentMove` es el índice del movimiento actual (el turno en el juego)
  const [currentMove, setCurrentMove] = useState<number>(0); 
  // Inicializamos el estado `currentMove` en 0, lo que indica que estamos en el primer movimiento.

  // Determinamos si es el turno de X o O
  const xIsNext = currentMove % 2 === 0;  // Si el movimiento es par, le toca a X
  // Usamos el valor de `currentMove` para calcular si es el turno de 'X' (cuando el índice es par) o de 'O' (cuando el índice es impar).

  // El tablero actual es el que corresponde al movimiento actual
  const currentSquares = history[currentMove]; 
  // Obtenemos el tablero correspondiente al movimiento actual (`currentMove`), que es un arreglo de 9 casillas.

  // Función que se llama cuando un jugador hace un movimiento
  function handlePlay(nextSquares: (string | null)[]) { 
    // `nextSquares` es el nuevo estado del tablero después de realizar un movimiento.

    // Creamos el siguiente historial: copiamos el historial anterior y añadimos el nuevo tablero
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; 
    // Creamos una nueva versión del historial, que incluye el estado del tablero después del nuevo movimiento.
    
    // Actualizamos el estado con el nuevo historial y el movimiento actual
    setHistory(nextHistory); 
    // Establecemos el nuevo historial como el estado actual.

    setCurrentMove(nextHistory.length - 1); // El movimiento actual es el último del historial
    // Actualizamos `currentMove` para que apunte al último movimiento del historial.
  }

  // Función que se llama para saltar a un movimiento específico
  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove); 
    // Actualizamos `currentMove` al índice del movimiento al que queremos saltar.
  }

  // Generamos los botones que permiten ir a un movimiento previo
  const moves = history.map((squares, move) => {
    // `move` es el índice de cada movimiento en el historial

    // Descripción de cada movimiento
    const description = move > 0 ? 'Ir al movimiento #' + move : 'Ir al inicio del juego'; 
    // Si el movimiento es mayor que 0, indicamos "Ir al movimiento #", de lo contrario, "Ir al inicio del juego".

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
        {/* Botón que al hacer clic llama a `jumpTo` con el índice del movimiento. */}
      </li>
    );
  });

  // El JSX que renderiza el juego: tablero y lista de movimientos
  return (
    <div className="game">
      <div className="game-board">
        {/* Renderizamos el tablero, pasando las props necesarias */}
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        {/* Pasamos el turno de X o O (`xIsNext`), el estado del tablero actual (`currentSquares`), y la función `handlePlay` */}
      </div>
      <div className="game-info">
        {/* Lista de movimientos previos */}
        <ol>{moves}</ol>
        {/* Mostramos la lista de movimientos previos, representados como botones. */}
      </div>
    </div>
  );
};

// Exportamos el componente Game para poder usarlo en otros archivos
export default Game;
