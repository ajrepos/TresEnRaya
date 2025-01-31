// Función que calcula el ganador del juego de tres en línea (tic-tac-toe)
export function calculateWinner(squares: (string | null)[]): string | null {
  
  // Definimos las líneas ganadoras: filas, columnas y diagonales
  const lines = [
    [0, 1, 2], // Fila 1 (índices 0, 1, 2)
    [3, 4, 5], // Fila 2 (índices 3, 4, 5)
    [6, 7, 8], // Fila 3 (índices 6, 7, 8)
    [0, 3, 6], // Columna 1 (índices 0, 3, 6)
    [1, 4, 7], // Columna 2 (índices 1, 4, 7)
    [2, 5, 8], // Columna 3 (índices 2, 5, 8)
    [0, 4, 8], // Diagonal 1 (índices 0, 4, 8)
    [2, 4, 6], // Diagonal 2 (índices 2, 4, 6)
  ];
  
  // Recorremos todas las posibles líneas ganadoras
  for (let i = 0; i < lines.length; i++) {
    // Desestructuramos la línea actual en tres variables (a, b, c)
    const [a, b, c] = lines[i];
    
    // Verificamos si las tres casillas de la línea son iguales y no son nulas
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Si es así, retornamos el valor de la casilla, que será 'X' o 'O'
      return squares[a];
    }
  }
  
  // Si no hay ganador, retornamos null
  return null;
}
