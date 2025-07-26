import React from 'react';
import { createRoot } from 'react-dom/client';

// Componente principal de la aplicación
const App = () => {
    return (
        <div>
            <h1>¡Bienvenido a mi aplicación React!</h1>
        </div>
    );
};

// Obtener el elemento raíz del DOM
const container = document.getElementById('root');

// Crear una raíz React y renderizar la aplicación
const root = createRoot(container);
root.render(<App />);