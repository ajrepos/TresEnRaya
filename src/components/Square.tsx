// Importamos React, necesario para crear componentes en React.
import React from 'react';

// Definimos la interfaz para las propiedades (props) que recibirá el componente Square.
// Esto proporciona la estructura y el tipo de datos esperados por el componente.
interface SquareProps {
  value: string | null; // El valor que representa el contenido de la casilla (puede ser 'X', 'O' o null).
  onSquareClick: () => void; // La función que se ejecuta cuando se hace clic en la casilla.
}

// Componente funcional Square que representa una casilla del tablero.
// El componente recibe las propiedades definidas en SquareProps y las utiliza en su interior.
const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => (
  // Renderizamos un botón con clase "square" que al hacer clic ejecuta la función onSquareClick.
  // El valor de la casilla se muestra dentro del botón, que puede ser 'X', 'O' o estar vacío (null).
  <button className="square" onClick={onSquareClick}>
    {value} {/* Mostramos el valor de la casilla (puede ser 'X', 'O' o vacío) */}
  </button>
);

// Exportamos el componente Square para que pueda ser utilizado en otros archivos.
// Esto permite que el componente sea importado y usado en otros archivos de la aplicación.
export default Square;
