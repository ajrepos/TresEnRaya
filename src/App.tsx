// Importamos React para poder usar JSX
import React from 'react';
// Importamos el componente Game que será el principal en nuestra aplicación
import Game from './components/Game';

// Definimos el componente funcional App
const App: React.FC = () => {
  return (
    // Estructura principal de la aplicación, un contenedor con la clase "App"
    <div className="App">
      {/* Renderizamos el componente Game dentro de App */}
      <Game />
    </div>
  );
}

// Exportamos el componente App para que pueda ser utilizado en otros archivos
export default App;
