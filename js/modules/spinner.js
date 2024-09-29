import { createElement } from './createElement.js';

const spinner = createElement('div', ['hidden', 'flex', 'justify-center', 'items-center', 'py-5']);
const loader = createElement('div', ['loader']);
spinner.appendChild(loader);

// Agrega el spinner al contenedor principal
const mainContainer = document.querySelector('main');
mainContainer.appendChild(spinner); 

// Función para mostrar el spinner
export const showSpinner = () => {
  spinner.classList.remove('hidden');
};

// Función para ocultar el spinner
export const hideSpinner = () => {
  spinner.classList.add('hidden');
};