# Entregable 2 - Semana 7

## Descripción
Simulador de compra de pasajes. Como segunda etapa, existirán varios destinos, con valor único y un descuento por compra **Ida y Vuelta**. Se agregará la posibilidad de comprar más de un pasaje y verlo reflejado en el Dom, e incluso poder ver los pasajes en otra pestaña.

Se intenta seguir con las **buenas prácticas**, definiendo **variables** y **funciones**, y luego utilizándolas en una función principal que es llamada al presionar el botón **comprar**.

## Aclaración importante

Decidí hacer una **entrega2** lo más detallado posible, sabiendo que aun falta el tema de asincronismo, peticiones, promesas y librerías, para tener que hacer la menor cantidad de cosas más adelante. De igual manera, al observar como quedó el proyecto, posiblemente tenga que reacomodar mil cosas después, pero creo que cumple con la entrega correctamente.

Como digo más abajo, no hay ningún tipo de validación, ya que utilicé mucho tiempo en "componetizar" el proyecto, en armar los templates html en js, y en hacerlo dinámico. Tenía pensado agregar también o bien una **librería de mensajes similares a la de toast o sweetalert**, o bien hacerlo de cero. Son cosas que me vienen quedando pendientes aún.

Aprendí muchísimo en el medio a pesar de tener algo de experiencia ya en **JavaScript**, pero fue gracias a esa experiencia que pude hacer algo de este nivel.

Al conocer algo en React, me apoyé muchísimo en ese conocimiento para reformular este proyecto y encararlo de esta manera.

## Tecnologías

- HTML
- CSS
- TailwindCSS
- Javascript

## Scope

### El usuario podrá: 

- Ver todos los paquetes disponibles
- Elegir cantidad de pasajes.
- Iniciar la compra
- Completar formulario y seleccionar si es ida y vuelta
- Ver resumen de compra
- Confirmar compra al final.
- Visualizar los pasajes al finalizar.

## Validaciones

De momento **quité las validaciones**. Utilicé todo el esfuerzo en el resto de los requisitos.

## Comentarios

- Se colocaron diferentes comentarios en el código **HTML** y en el código **JS** para mejor entendimiento.

- Se utiliza localStorage para: Guardar los "pasajeros" con toda la información de los pasajes, y luego cargarlos y utilizarlos en la vista de **Tus Pasajes**.

- Utilicé clases para la creación de Passengers (pasajeros). Luego se guardan en un array de objetos/clases.

- Funcionalidades agregué bastantes.

- Para poder utilizar los imports y exports de js, se agregó **type="module"** en el script y funciona correctamente.

## Versión

- **Entregable:** v2.0 
- **Fecha de entrega:** 29/9/2024
- **Autor:** Jorge Calderón