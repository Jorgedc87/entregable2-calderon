// Obtener los datos de los pasajes desde localStorage
const ticketsData = JSON.parse(localStorage.getItem('ticketsData')) || {};
const passengers = ticketsData.passengers || [];
const travelDetails = ticketsData.travelDetails || {};
const isRoundTrip = ticketsData.isRoundTrip || false;

// Contenedor de los tickets
const ticketsContainer = document.getElementById('tickets-container');

// Función para crear un ticket con el diseño deseado
const createTicket = (passenger, index) => {
  const fromCity = passenger.isReturn ? travelDetails.name : "Buenos Aires";
  const fromProvince = passenger.isReturn ? travelDetails.state : "Buenos Aires";
  const toCity = passenger.isReturn ? "Ezeiza" : travelDetails.name;
  const toProvince = passenger.isReturn ? "Buenos Aires" : travelDetails.state;
  const departureLocation = passenger.isReturn ? travelDetails.name : "Ezeiza";

  const ticket = document.createElement('div');
  ticket.classList.add(
    'ticket',
    'border',
    'p-4',
    'rounded-lg',
    'shadow-lg',
    'bg-white',
    'flex',
    'flex-col',
    'items-center',
    'space-y-2',
    'relative',
    'max-w-md',
    'w-full',
    'text-gray-800',
    'font-mono'
  );

  ticket.innerHTML = `
    <div class="flex flex-col items-center text-center w-full p-3 border-b border-dashed">
      <h2 class="text-xl font-extrabold text-red-600 tracking-wider">PASAJE</h2>
      <h3 class="text-lg font-bold">${passenger.name.toUpperCase()} ${passenger.surname.toUpperCase()}</h3>
    </div>
    <div class="flex justify-between w-full px-3 py-2">
      <div class="flex flex-col text-left space-y-1">
        <p class="text-xs font-semibold">Desde: <span class="font-normal">${fromCity}</span></p>
        <p class="text-xs font-semibold">Salida: <span class="font-normal">${departureLocation}</span></p>
      </div>
      <div class="flex flex-col text-right space-y-1">
        <p class="text-xs font-semibold">Destino: <span class="font-normal">${toCity}</span></p>
        <p class="text-xs font-semibold">Provincia: <span class="font-normal">${toProvince}</span></p>
      </div>
    </div>
    <div class="flex justify-between items-center w-full px-3 pb-2 pt-4 border-t border-dashed">
      <p class="text-xs font-semibold">Precio: <span class="font-normal">$${travelDetails.price.toFixed(2)}</span></p>
    </div>
    <div class="flex justify-between items-center w-full px-3 py-2 border-t border-dashed">
      <p class="text-xs font-semibold">DNI: <span class="font-normal">${passenger.dni}</span></p>
      <p class="text-xs font-semibold">EMAIL: <span class="font-normal">${passenger.email}</span></p>
      <p class="text-xs font-semibold">TEL: <span class="font-normal">${passenger.phone}</span></p>
    </div>
    <div class="w-full flex justify-center mt-4">
      <img src="./img/codbarras.png" alt="Código de barras" class="w-40 h-10 object-cover">
    </div>
  `;

  ticketsContainer.appendChild(ticket);
};


// Mostrar todos los tickets
passengers.forEach((passenger, index) => {
  createTicket(passenger, index);
});
