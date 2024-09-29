import { createElement } from "./createElement.js";

// Función para crear la imagen de la tarjeta
export const createImage = (src, alt) => {
  const image = createElement('img', ['w-full', 'h-[200px]', 'object-cover', 'object-center']);
  image.src = src;
  image.alt = alt;
  return image;
};