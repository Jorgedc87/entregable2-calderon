import { createElement } from "./createElement.js";

// Función para crear el cuerpo de la tarjeta
export const createCardBody = (travelPoint) => {
  const cardBody = createElement('div', ['p-6']);
  const title = createElement('h2', ['font-bold', 'text-xl', 'text-gray-800'], travelPoint.name);
  const state = createElement('p', ['text-gray-600', 'mt-1'], `Provincia: ${travelPoint.state}`);
  const description = createElement('p', ['text-gray-700', 'mt-2', 'h-20', 'overflow-hidden'], travelPoint.description);
  const price = createElement('p', ['text-gray-700', 'mt-2'], `Precio pasaje: $${travelPoint.price}`);
  const discountedPrice = createElement('p', ['text-gray-700', 'mt-2'], `Precio pasaje c/descuento: $${travelPoint.discountedPrice}`);
  const discountInfo = createElement('p', ['italic', 'text-xs'], travelPoint.discountInfo);

  // Crea contenedor para el input y el botón
  const actionContainer = createElement('div', ['flex', 'items-center', 'space-x-4', 'mt-4']);

  // Crea label para el input de cantidad de pasajes
  const quantityLabel = createElement('label', ['text-gray-700', 'font-medium'], 'Cant. de pasajes:');

  // Crea el input de cantidad de pasajes
  const quantityInput = createElement('input', ['border', 'border-gray-300', 'rounded', 'px-2', 'py-2', 'w-24']);
  quantityInput.type = 'number';
  quantityInput.min = '1';
  quantityInput.value = '1';
  quantityInput.placeholder = '1';

  // Crear el botón de comprar
  const button = createElement('button', ['bg-[#1c99d8]', 'text-white', 'font-bold', 'py-2', 'px-4', 'rounded', 'hover:bg-[#49ade0]', 'transition-all', 'duration-400'], 'Comprar');
  button.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value) || 1;
  });

  // Mostrar stock disponible
  const stockInfo = createElement('p', ['text-gray-500', 'text-xs', 'my-2', 'float-right'], `Pasajes disponibles: ${travelPoint.stock}`);


  // Agrega el label, input y el botón al contenedor de acciones
  actionContainer.append(quantityLabel, quantityInput, button);

  // Agrega los elementos al cardBody
  cardBody.append(title, state, description, price, discountedPrice, discountInfo, actionContainer, stockInfo);
  return cardBody;
};
