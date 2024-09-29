import travelPoints from "./data/travelPoints.js";
import { applyFilters } from "./modules/applyFilters.js";
import { createCard } from "./modules/createCard.js";
import { createFilters } from "./modules/createFilters.js";
import { showSpinner, hideSpinner } from "./modules/spinner.js";

let currentIndex = 0; 
const loadSize = 6; 
let allLoaded = false;
let currentData = [...travelPoints]; 

// Función para cargar las tarjetas en grupos
const loadCards = (points) => {
  if (allLoaded || currentIndex >= currentData.length) return;

  showSpinner();
  setTimeout(() => {
    const end = currentIndex + loadSize;

    const pointsToShow = points.slice(currentIndex, end);

    if (pointsToShow.length === 0) {
      allLoaded = true; 
      hideSpinner();
      return;
    }

    pointsToShow.forEach(createCard);
    currentIndex = end;

    if (currentIndex >= currentData.length) {
      allLoaded = true;
    }

    hideSpinner();
  }, 1000);
};

// Función para manejar los filtros aplicados
const handleFilters = (filters) => {
  currentIndex = 0; 
  allLoaded = false; 
  document.getElementById('travel-list').innerHTML = ''; 
  currentData = applyFilters(travelPoints, filters);
  loadCards();
};

createFilters(handleFilters);

// Mostrar las primeras tarjetas inicialmente
loadCards(travelPoints);

// Detectar el scroll para cargar más tarjetas
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadCards(travelPoints);
  }
});