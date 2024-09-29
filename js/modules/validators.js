/* 
  AUN NO ESTOY UTILIZANDO ESTO. QUEDÓ DEL EJERCICIO ANTERIOR
*/

// Verifica que el nombre no sea null y los intentos sean menos de 3 con while
export const verificaNombre = i => {
  let intentos = 0;
  let nombre = prompt(`Ingrese un nombre para el pasajero ${i + 1}`);

  while (!nombre && intentos < 2) {
    nombre = prompt('Nombre inválido. Ingrese un nombre válido');
    intentos++;
  }

  if (!nombre) {
    alert('Nombre inválido. Se cancelará la compra');
    return false;
  }
  
  return nombre;
}

// Verifica que el DNI sea un numero entero mayor a 0 y los intentos sean menos de 3 con for
export const verificaDni = (nombre) => {
  for (let i = 0; i < 3; i++) {
    let dni = parseInt(prompt(`Ingrese el DNI de ${nombre}`));

    // Verifica si el DNI es un número entero positivo
    if (!isNaN(dni) && dni > 0) {
      return dni; // Devuelve el DNI válido
    }
    alert('DNI inválido. Intente de nuevo.');
  }

  alert('Superó los intentos para ingresar el DNI. Se cancelará la compra');
  return false; // Cancela la compra si hay 3 intentos fallidos
}