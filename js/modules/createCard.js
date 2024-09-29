import { createCardBody } from "./createCardBody.js";
import { createElement } from "./createElement.js";
import { createImage } from "./createImage.js";
import { openModal } from "./modalPassenger.js"; 

const travelList = document.getElementById('travel-list');

// Función principal para crear la tarjeta completa
export const createCard = (travelPoint) => {
  const card = createElement('div', ['flex', 'flex-col', 'items-center', 'justify-center']);
  const cardInner = createElement('div', ['max-w-[400px]', 'bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden']);
  const image = createImage(travelPoint.image, 'avion');
  const cardBody = createCardBody(travelPoint);

  // Construye la estructura de la tarjeta
  cardInner.append(image, cardBody);
  card.appendChild(cardInner);
  travelList.appendChild(card);

  // Configura el botón "Comprar" dentro del cuerpo de la tarjeta
  const buyButton = cardBody.querySelector('button');
  buyButton.addEventListener('click', () => {
    const quantityInput = cardBody.querySelector('input[type="number"]');
    const passengerCount = parseInt(quantityInput.value) || 1;
    openModal(passengerCount, travelPoint);
  });
};

