// Defino algunas variables
const pasajeros = []; // Array para guardar los datos de los pasajeros
const descuentoIdaYVuelta = 0.85; // Descuento del 15% para pasajes de ida y vuelta
const precioPasaje = 41000; // Precio del pasaje

// Verifica que cantidad sea un número válido (positivo) y los intentos sean menos de 3 con do while
const preguntaCantidad = () => {
  let intentos = 0;
  let cantidad;

  do {
    cantidad = prompt('Ingrese la cantidad de pasajes que desea comprar');
    
    if (cantidad === null) {
      alert('Compra cancelada');
      return false;
    }

    cantidad = parseInt(cantidad);
    intentos++;
    if (isNaN(cantidad) || cantidad <= 0) {
      if (intentos < 3) {
        alert('Cantidad inválida. Intente nuevamente.');
      }
    } else {
      return cantidad;
    }
  } while (intentos < 3);

  alert('Cantidad inválida. Se cancelará la compra');
  return false; 
}


// Verifica que el nombre no sea null y los intentos sean menos de 3 con while
const verificaNombre = i => {
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
const verificaDni = (nombre) => {
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

// Pide datos del pasajero
const consultaDatos = (i, idaYVuelta) => {
  const nombre = verificaNombre(i);
  if (!nombre) return false;
  const dni = verificaDni(nombre);
  if (!dni) return false;
  if(idaYVuelta){
    pasajeros.push({ nombre, dni: parseInt(dni), tipo: 'ida' , precio: precioPasaje * descuentoIdaYVuelta });
    pasajeros.push({ nombre, dni: parseInt(dni), tipo: 'vuelta' , precio: precioPasaje * descuentoIdaYVuelta });
  }else{
    pasajeros.push({ nombre, dni: parseInt(dni), tipo: 'ida' , precio: precioPasaje });
  }

  return true;
}

// Calcula el total de la compra
const calculaTotal = () => {
  let total = 0;
  for (let i = 0; i < pasajeros.length; i++) {
    total += pasajeros[i].precio;
  }

  return total;
}

// Resetea la compra al finalizar
const resetCompra = () => {
  pasajeros.length = 0;
}

/* 
  Función principal para comprar pasajes
*/
const compraPasaje = () => {
  // Resetea la compra
  resetCompra();

  // Pregunta la cantidad de pasajes
  let cantidad = preguntaCantidad();
  // // Verifica que la cantidad sea válida
  if (!cantidad) return;

  const idaYVuelta = confirm('¿Es pasaje de ida y vuelta?');

  // Calcula precio pasaje si es ida y vuelta o solo ida
  if(idaYVuelta){
    alert('Se aplicará un descuento del 15% por compra de pasaje de ida y vuelta');
  };

  // Luego pido datos de cada pasajero
  for(i=0;i<cantidad;i++){
    const pasajero = consultaDatos(i, idaYVuelta);
    if (!pasajero) return alert('Compra cancelada');
  }

  // Confirma compra
  if (confirm(`El monto total a pagar es de ${calculaTotal()} \n \n¿Desea confirmar la compra?`)) {
    alert(`Compra realizada con éxito`);
  } else {
    alert('Compra cancelada');
  }

  // Muestra en consola una mejor tabla
  console.table(pasajeros);

}