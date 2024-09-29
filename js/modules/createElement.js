// Función para crear un elemento con clases y contenido opcional
export const createElement = (tag, classes = [], content = '') => {
  const element = document.createElement(tag);
  if (classes.length) element.classList.add(...classes);
  if (content) element.textContent = content;
  return element;
};