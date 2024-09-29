import { createCard } from "./createCard.js";

// Función para aplicar los filtros y mostrar los resultados filtrados
export const applyFilters = (travelPoints, filters) => {
  let filteredPoints = [...travelPoints];

  // Filtra por ciudad
  if (filters.city) {
    filteredPoints = filteredPoints.filter((point) =>
      point.name.toLowerCase().includes(filters.city) || point.state.toLowerCase().includes(filters.city)
    );
  }

  // Ordena por precio
  if (filters.price) {
    filteredPoints.sort((a, b) =>
      filters.price === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

  // Ordena por stock
  if (filters.stock) {
    filteredPoints.sort((a, b) =>
      filters.stock === 'asc' ? a.stock - b.stock : b.stock - a.stock
    );
  }

  // Limpia lista actual
  document.getElementById('travel-list').innerHTML = '';
  
  // Crea tarjetas filtradas
  filteredPoints.forEach(createCard);
};
