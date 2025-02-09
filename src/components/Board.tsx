// Importamos React desde la librería principal para trabajar con componentes en JSX
import React from 'react';

// Importamos el componente Square que representa una casilla individual en el tablero de juego.
// Cada casilla puede ser clickeada para realizar una jugada.
import Square from './Square'; 

// Importamos la función calculateWinner, que se encarga de determinar si hay un ganador
// evaluando el estado actual del tablero (el arreglo 'squares') y devolviendo el ganador, si existe.
import { calculateWinner } from './calculateWinner'; 

// Definimos una interfaz llamada BoardProps para describir las propiedades (props) que 
// serán pasadas al componente Board. Esto asegura que las propiedades recibidas por el 
// componente sean de los tipos correctos y mejora la mantenibilidad del código.

interface BoardProps {
  xIsNext: boolean; // Booleano que indica si es el turno de 'X' (true) o de 'O' (false).
  squares: (string | null)[]; // Arreglo de 9 elementos que representa el estado del tablero. 
                             // Cada elemento puede ser 'X', 'O' o null, dependiendo de si la casilla ha sido ocupada o no.
  onPlay: (nextSquares: (string | null)[]) => void; // Función que se invoca para actualizar el estado del tablero 
                                                  // cuando un jugador hace una jugada. Esta función pasa los nuevos 
                                                  // valores del tablero al componente padre.
}

// Declaramos el componente Board como un componente funcional de React (FC),
// que recibe las propiedades definidas en la interfaz BoardProps.
const Board: React.FC<BoardProps> = ({ xIsNext, squares, onPlay }) => {

  // Definimos la función handleClick que se ejecuta cuando un jugador hace clic sobre una casilla del tablero.
  // Esta función toma un parámetro 'i' que es el índice de la casilla que fue clickeada en el arreglo 'squares'.
  
  function handleClick(i: number) {
    // Si ya hay un ganador o la casilla que el jugador intenta ocupar está ya ocupada, no hacemos nada.
    // Esto previene que un jugador haga una jugada en una casilla ya ocupada o cuando ya se ha determinado un ganador.
    if (calculateWinner(squares) || squares[i]) {
      return; // Sale de la función sin hacer ningún cambio si hay un ganador o la casilla está ocupada.
    }

    // Si la casilla está vacía, creamos una copia del arreglo 'squares' usando slice().
    // Usamos slice() para asegurarnos de no mutar el estado directamente, ya que React requiere que el estado sea inmutable.
    const nextSquares = squares.slice();
    
    // Asignamos el valor 'X' o 'O' a la casilla seleccionada dependiendo de cuál es el turno del jugador.
    // Si 'xIsNext' es true, significa que le toca a 'X', de lo contrario le toca a 'O'.
    nextSquares[i] = xIsNext ? 'X' : 'O';

    // Llamamos a la función 'onPlay' para pasar el nuevo estado del tablero al componente padre.
    // Esto actualizará el estado del tablero en el componente que controla la lógica de juego.
    onPlay(nextSquares);
  }

  // Llamamos a la función 'calculateWinner' para ver si hay un ganador en el estado actual del tablero.
  // Esta función devuelve el ganador ('X' o 'O') si hay uno, o 'null' si aún no hay un ganador.
  const winner = calculateWinner(squares);

  // Definimos el mensaje que se mostrará en la parte superior del tablero.
  // Si hay un ganador, mostramos el nombre del jugador ganador. Si no, mostramos el turno del siguiente jugador.
  let status = winner
    ? 'Ganador: ' + winner // Si hay un ganador, mostramos 'Ganador: X' o 'Ganador: O'.
    : 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O'); // Si no hay ganador, mostramos el turno del siguiente jugador.

  // JSX que renderiza el tablero y el estado actual del juego.
  return (
    <>
      {/* Mostramos el estado actual del juego: quién es el ganador o cuál es el siguiente jugador */}
      <div className="status">{status}</div>
      
      {/* Renderizamos la primera fila del tablero (casillas 0, 1, 2) */}
      <div className="board-row">
        {squares.slice(0, 3).map((value, index) => (
          // Para cada casilla en la fila, renderizamos un componente 'Square' 
          // que representa una casilla individual en el tablero.
          // El valor de la casilla puede ser 'X', 'O' o null. 
          <Square key={index} value={value} onSquareClick={() => handleClick(index)} />
        ))}
      </div>
      
      {/* Renderizamos la segunda fila del tablero (casillas 3, 4, 5) */}
      <div className="board-row">
        {squares.slice(3, 6).map((value, index) => (
          // De manera similar a la primera fila, renderizamos una casilla para cada valor
          // de la segunda fila del tablero.
          <Square key={index + 3} value={value} onSquareClick={() => handleClick(index + 3)} />
        ))}
      </div>
      
      {/* Renderizamos la tercera fila del tablero (casillas 6, 7, 8) */}
      <div className="board-row">
        {squares.slice(6).map((value, index) => (
          // Para la tercera fila, se hace lo mismo. Aquí también pasamos el índice corregido
          // para que coincida con las posiciones correctas en el arreglo 'squares'.
          <Square key={index + 6} value={value} onSquareClick={() => handleClick(index + 6)} />
        ))}
      </div>
    </>
  );
};

// Exportamos el componente Board para que pueda ser utilizado en otros archivos,
// como el componente principal de la aplicación que maneja el estado global del juego.
export default Board;
