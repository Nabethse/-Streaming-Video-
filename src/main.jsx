import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Importa tu componente principal
import './index.css' // Asegúrate de que los estilos estén correctamente enlazados

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Renderiza tu componente principal */}
  </React.StrictMode>
)