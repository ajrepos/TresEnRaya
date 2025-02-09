# Tic-Tac-Toe con React y TypeScript

Este proyecto es una implementación del clásico juego de Tic-Tac-Toe utilizando React y TypeScript. La aplicación permite a dos jugadores jugar entre sí, alternando turnos para colocar sus marcas (X u O) en una cuadrícula de 3x3.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

src/
  ├── App.tsx               # Componente principal de la aplicación que renderiza el componente `Game`.
  ├── /components
  │    ├── Board.tsx        # Componente que representa el tablero de juego.
  │    ├── Square.tsx       # Componente que representa una casilla individual en el tablero.
  │    ├── Game.tsx         # Componente que maneja el lógica del juego, incluyendo el historial de movimientos y el estado actual del juego.
  │    └── calculateWinner.ts # Función que determina el ganador del juego.
  ├── index.css             # Estilos generales para la aplicación.
  └── main.tsx              # Punto de entrada de la aplicación que renderiza el componente `App`.

## Lógica del Juego

### `Game.tsx`

El componente `Game` maneja el estado del juego, incluyendo el historial de movimientos y el movimiento actual. Utiliza el hook `useState` para gestionar estos estados.

- `history`: Un array que almacena el historial de movimientos. Cada elemento es un array de 9 elementos que representa el estado del tablero en un momento dado.
- `currentMove`: Un número que indica el movimiento actual.
- `xIsNext`: Un booleano que indica si el siguiente jugador es X.

Funciones principales:

- `handlePlay(nextSquares)`: Actualiza el historial de movimientos y el movimiento actual cuando un jugador hace una jugada.
- `jumpTo(nextMove)`: Permite a los jugadores retroceder a un movimiento anterior en el historial.

### `Board.tsx`

El componente `Board` representa el tablero de juego y maneja la lógica para determinar el estado de cada casilla.

- `handleClick(i)`: Maneja el evento de clic en una casilla. Si ya hay un ganador o la casilla ya está ocupada, no hace nada. De lo contrario, actualiza el estado de la casilla con la marca del jugador actual (X u O) y llama a `onPlay` para actualizar el estado del juego.

### `Square.tsx`

El componente `Square` representa una casilla individual en el tablero. Recibe dos props:

- `value`: El valor de la casilla (X, O o null).
- `onSquareClick`: Una función que se llama cuando se hace clic en la casilla.

### `calculateWinner.ts`

La función `calculateWinner` determina si hay un ganador en el juego. Recorre todas las posibles combinaciones ganadoras y verifica si alguna de ellas está completa (es decir, si todas las casillas en una línea contienen la misma marca).

## Scripts Disponibles

En el archivo `package.json`, se definen varios scripts útiles:

- `dev`: Inicia el servidor de desarrollo.
- `build`: Compila la aplicación para producción.
- `lint`: Ejecuta ESLint para verificar el código.
- `preview`: Previsualiza la aplicación compilada.

## Instalación y Uso

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor de desarrollo con `npm run dev`.

¡Disfruta jugando Tic-Tac-Toe!