// Función que calcula el ganador del juego de tres en línea (tic-tac-toe).
// Recibe un arreglo 'squares' que contiene el estado actual de las casillas del tablero, donde cada elemento puede ser 'X', 'O' o null.
export function calculateWinner(squares: (string | null)[]): string | null {
  
  // Definimos las líneas ganadoras: estas son las combinaciones de índices que representan las posibles formas de ganar.
  // Son las tres filas, las tres columnas y las dos diagonales del tablero.
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
  
  // Recorremos todas las posibles líneas ganadoras (filas, columnas y diagonales)
  for (let i = 0; i < lines.length; i++) {
    // Desestructuramos la línea actual en tres variables (a, b, c) para hacer el código más legible
    const [a, b, c] = lines[i];
    
    // Verificamos si las tres casillas de la línea actual son iguales y no están vacías (no son null)
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // Si las tres casillas de la línea son iguales, significa que hay un ganador.
      // Retornamos el valor de la casilla, que será 'X' o 'O'.
      return squares[a];
    }
  }
  
  // Si no encontramos ninguna línea ganadora, significa que el juego aún está en curso o es un empate.
  // Por lo tanto, retornamos null para indicar que no hay un ganador aún.
  return null;
}
