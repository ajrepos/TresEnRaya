// Importamos React
import React from 'react';

// Definimos la interfaz para las propiedades que recibirá el componente Square
interface SquareProps {
  value: string | null; // El valor que representa el contenido de la casilla (puede ser 'X', 'O' o null)
  onSquareClick: () => void; // La función que se ejecuta cuando se hace clic en la casilla
}

// Componente funcional Square que representa una casilla del tablero
const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => (
  // Renderizamos un botón con clase "square" que al hacer clic ejecuta la función onSquareClick
  <button className="square" onClick={onSquareClick}>
    {value} {/* Mostramos el valor de la casilla (puede ser 'X', 'O' o vacío) */}
  </button>
);

// Exportamos el componente Square para que pueda ser utilizado en otros archivos
export default Square;
