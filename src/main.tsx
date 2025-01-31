// Importamos StrictMode desde React para habilitar comprobaciones adicionales en desarrollo
import { StrictMode } from 'react';
// Importamos createRoot desde react-dom para inicializar la aplicación React en el DOM
import { createRoot } from 'react-dom/client';
// Importamos el archivo de estilos CSS para la aplicación
import './index.css';
// Importamos el componente principal de la aplicación, que es App
import App from './App.tsx';

// Usamos createRoot para obtener el contenedor DOM en el que React montará la aplicación
// `document.getElementById('root')!` busca un elemento con el ID "root" en el HTML
// El operador `!` asegura que el valor no sea null (esto es seguro si el HTML tiene el div con id "root")
createRoot(document.getElementById('root')!).render(
  // StrictMode es un entorno de desarrollo que ayuda a identificar problemas potenciales
  <StrictMode>
    {/* Renderizamos el componente App dentro de StrictMode */}
    <App />
  </StrictMode>,
);
