import { Passenger } from "../classes/Passenger.js";

let currentPassengerIndex = 0;
let totalPassengers = 0;
let passengersData = [];
let travelDetails = {}; // Objeto para almacenar los detalles del viaje seleccionados
let isRoundTrip = false; // Variable para controlar si es ida y vuelta

// Crear modal y elementos del formulario
const modal = document.createElement('div');
modal.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full', 'bg-black', 'bg-opacity-50', 'flex', 'justify-center', 'items-center', 'hidden', 'z-50');

const modalContent = document.createElement('div');
modalContent.classList.add('bg-white', 'p-5', 'rounded', 'shadow-lg', 'max-w-lg', 'w-full', 'relative');

const form = document.createElement('form');
form.classList.add('flex', 'flex-col', 'space-y-4');

// Crear campos del formulario
['Nombre', 'Apellido', 'DNI', 'Email', 'Teléfono'].forEach((label) => {
  const inputGroup = document.createElement('div');
  const inputLabel = document.createElement('label');
  inputLabel.textContent = label;
  const input = document.createElement('input');
  input.type = label === 'DNI' ? 'number' : 'text';
  input.name = label.toLowerCase();
  input.classList.add('border', 'rounded', 'p-2', 'w-full');
  inputGroup.append(inputLabel, input);
  form.appendChild(inputGroup);
});

// Checkbox para Ida y Vuelta
const roundTripGroup = document.createElement('div');
roundTripGroup.classList.add('flex', 'items-center', 'space-x-2');
const roundTripLabel = document.createElement('label');
roundTripLabel.textContent = 'Ida y Vuelta';
const roundTripCheckbox = document.createElement('input');
roundTripCheckbox.type = 'checkbox';
roundTripCheckbox.name = 'roundtrip';
roundTripGroup.append(roundTripCheckbox, roundTripLabel);
form.appendChild(roundTripGroup);

// Botón de Continuar
const continueButton = document.createElement('button');
continueButton.type = 'button';
continueButton.textContent = 'Continuar';
continueButton.classList.add('bg-blue-500', 'text-white', 'py-2', 'px-4', 'rounded', 'hover:bg-blue-600');

// Botón de Confirmar Compra
const confirmButton = document.createElement('button');
confirmButton.type = 'button';
confirmButton.textContent = 'Confirmar Compra';
confirmButton.classList.add('bg-green-500', 'text-white', 'py-2', 'px-4', 'rounded', 'hover:bg-green-600', 'hidden');

// Contenedor para el resumen de la compra
const purchaseSummary = document.createElement('div');
purchaseSummary.classList.add('hidden', 'text-center', 'flex', 'flex-col', 'space-y-2');

// Elemento para mostrar el resumen de la compra
const summaryText = document.createElement('p');
summaryText.classList.add('text-sm', 'font-medium');

// Botón para confirmar la compra en la vista de resumen
const finalConfirmButton = document.createElement('button');
finalConfirmButton.type = 'button';
finalConfirmButton.textContent = 'Confirmar y Comprar';
finalConfirmButton.classList.add('bg-green-500', 'text-white', 'py-2', 'px-4', 'rounded', 'hover:bg-green-600');

// Agregar elementos al resumen
purchaseSummary.append(summaryText, finalConfirmButton);

// Función para capturar los datos del formulario y crear un pasajero
const captureFormData = () => {
  const formData = new FormData(form);
  const passenger = new Passenger(
    formData.get('nombre'),
    formData.get('apellido'),
    formData.get('dni'),
    formData.get('email'),
    formData.get('teléfono')
  );

  // Establecer `isReturn` en false para todos los pasajeros capturados inicialmente
  passenger.isReturn = false;
  passengersData.push(passenger);

  // Verificar si es ida y vuelta y duplicar el pasajero si es necesario
  if (roundTripCheckbox.checked) {
    const returnPassenger = new Passenger(
      formData.get('nombre'),
      formData.get('apellido'),
      formData.get('dni'),
      formData.get('email'),
      formData.get('teléfono')
    );
    returnPassenger.isReturn = true; 
    passengersData.push(returnPassenger);
  }
};

// Función para manejar la navegación entre formularios
const handleContinue = () => {
  captureFormData();

  // Incrementar el índice del pasajero solo si no es el último
  if (currentPassengerIndex < totalPassengers - 1) {
    currentPassengerIndex++;
    form.reset();
  } else {
    continueButton.classList.add('hidden');
    confirmButton.classList.remove('hidden');
  }
};

const showPurchaseSummary = () => {
  form.classList.add('hidden');
  confirmButton.classList.add('hidden');
  purchaseSummary.classList.remove('hidden');

  // Calcular subtotal y total correctamente
  const ticketPrice = isRoundTrip ? travelDetails.discountedPrice : travelDetails.price;
  const passengerCount = passengersData.length;
  const subtotal = ticketPrice * passengerCount;
  const serviceCharge = subtotal * 0.15;
  const total = subtotal + serviceCharge;

  // Estructura del resumen de la compra
  summaryText.innerHTML = `
    <div class="text-left">
      <h2 class="text-lg font-bold mb-4">Confirmación del Pedido</h2>
      <div class="flex justify-between mb-2">
        <p class="font-medium">Productos (Pasajes x${passengerCount}):</p>
        <p>ARS ${subtotal.toFixed(2)}</p>
      </div>
      <div class="flex justify-between mb-2">
        <p class="font-medium">Total antes de impuestos:</p>
        <p>ARS ${subtotal.toFixed(2)}</p>
      </div>
      <div class="flex justify-between mb-2">
        <p class="font-medium">Impuestos (15%):</p>
        <p>ARS ${serviceCharge.toFixed(2)}</p>
      </div>
      <hr class="my-2 border-gray-300">
      <div class="flex justify-between text-red-600">
        <p class="font-bold text-xl">Total del pedido:</p>
        <p class="font-bold text-xl">ARS ${total.toFixed(2)}</p>
      </div>
    </div>
  `;
};

// Función para confirmar la compra y mostrar el resumen
const handleConfirmPurchase = () => {
  if (currentPassengerIndex === totalPassengers - 1 && passengersData.length < totalPassengers) {
    captureFormData();
  }
  showPurchaseSummary();
};

// Función final para confirmar la compra y guardar los datos
const handleFinalConfirm = () => {
  // Guardar los datos en localStorage
  const purchaseData = {
    passengers: passengersData,
    travelDetails
  };
  localStorage.setItem('ticketsData', JSON.stringify(purchaseData));

  // Actualizar el contenido del modal para mostrar el mensaje de confirmación
  modalContent.innerHTML = `
    <div class="text-center">
      <h2 class="text-lg font-bold mb-4">Compra completada</h2>
      <p>Has completado la compra. Recibirás un email de confirmación.</p>
      <div class="flex justify-center mt-4 space-x-4">
        <button id="viewTicketsButton" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Ver tickets
        </button>
        <button id="closeModalButton" class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
          Finalizar y recargar
        </button>
      </div>
    </div>
  `;

  // Mostrar el modal con el mensaje de confirmación
  modal.classList.remove('hidden');

  // Añadir evento al botón "Ver tickets" para abrir en una nueva pestaña
  document.getElementById('viewTicketsButton').addEventListener('click', () => {
    window.open('tickets.html', '_blank');
  });

  // Añadir evento al botón "Finalizar y cerrar" para cerrar el modal
  document.getElementById('closeModalButton').addEventListener('click', () => {
    modal.classList.add('hidden');
    window.location.reload();
  });
};

// Añadir eventos a los botones
continueButton.addEventListener('click', handleContinue);
confirmButton.addEventListener('click', handleConfirmPurchase);
finalConfirmButton.addEventListener('click', handleFinalConfirm);

// Añadir elementos al formulario y al modal
form.appendChild(continueButton);
form.appendChild(confirmButton);
modalContent.appendChild(form);
modalContent.appendChild(purchaseSummary);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Función para abrir el modal
export const openModal = (passengerCount, travelPoint) => {
  totalPassengers = passengerCount;
  currentPassengerIndex = 0;
  passengersData = [];
  travelDetails = {
    name: travelPoint.name,
    state: travelPoint.state,
    price: travelPoint.price,
    discountedPrice: travelPoint.discountedPrice
  };
  form.reset();
  form.classList.remove('hidden');
  purchaseSummary.classList.add('hidden');

  if (totalPassengers === 1) {
    continueButton.classList.add('hidden');
    confirmButton.classList.remove('hidden');
  } else {
    continueButton.classList.remove('hidden');
    confirmButton.classList.add('hidden');
  }

  modal.classList.remove('hidden');
};


// Función para cerrar el modal
const closeModal = () => {
  modal.classList.add('hidden');
};

// Ocultar el modal al hacer clic fuera de él
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});
