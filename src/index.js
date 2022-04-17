import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/**
 * En React hay varias maneras de crear componentes.
 * Como por ejemplo funciones y constantes.
 */



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  {/* //Ejemplo de Props en App.js
  // <App saludo="Mi primer hola con Props"/>
  
  //Ejemplo manejando App.js como tag
  // <App>
  //   <h1>Hola desde App.js</h1>
  // </App> */}

  <App/>

  </React.StrictMode>
);