import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    return (
        <div>
            <h1>¡Bienvenido a mi aplicación React!</h1>
        </div>
    );
};

// Asegúrate de que el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('root');
    if (container) {
        const root = createRoot(container);
        root.render(<App />);
    } else {
        console.error('No se encontró el elemento root');
    }
});