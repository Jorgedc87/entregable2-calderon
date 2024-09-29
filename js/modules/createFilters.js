import { createElement } from './createElement.js';

// Función para crear el formulario de filtros
export const createFilters = (filterCallback) => {
  const filtersContainer = document.getElementById('filters');

  // Crea formulario de filtros
  const form = createElement('form', ['flex', 'space-x-4']);

  // Crea select de ordenar por precio
  const priceFilter = createElement('select', ['border', 'px-2', 'py-1', 'rounded']);
  priceFilter.innerHTML = `
    <option value="">Ordenar por precio</option>
    <option value="asc">Menor a mayor</option>
    <option value="desc">Mayor a menor</option>
  `;

  // Crea select de ordenar por stock
  const stockFilter = createElement('select', ['border', 'px-2', 'py-1', 'rounded']);
  stockFilter.innerHTML = `
    <option value="">Ordenar por stock</option>
    <option value="asc">Menor a mayor</option>
    <option value="desc">Mayor a menor</option>
  `;

  // Crea input de filtro por ciudad
  const cityFilter = createElement('input', ['border', 'px-2', 'py-1', 'rounded']);
  cityFilter.type = 'text';
  cityFilter.placeholder = 'Filtrar por provincia';

  // Función para aplicar filtros al cambiar cualquier filtro
  const applyFilters = () => {
    const filters = {
      price: priceFilter.value,
      stock: stockFilter.value,
      city: cityFilter.value.toLowerCase(),
    };
    filterCallback(filters);
  };

  // Agrega eventos de cambio
  priceFilter.addEventListener('change', applyFilters);
  stockFilter.addEventListener('change', applyFilters);
  cityFilter.addEventListener('input', applyFilters);

  // Agrega filtros al formulario
  form.append(priceFilter, stockFilter, cityFilter);

  // Agrega el formulario al contenedor de filtros
  filtersContainer.appendChild(form);
};
