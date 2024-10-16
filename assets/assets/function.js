import Carrito from './carrito.js';
import Producto from './producto.js'

const producto1 = new Producto("Leche", 1000);
const producto2 = new Producto("Pan de Molde", 2000);
const producto3 = new Producto("Queso", 1200);
const producto4 = new Producto("Mermelada", 890);
const producto5 = new Producto("Azúcar", 1300);

let carrito = new Carrito();
carrito = chooseAndAddItemsToCart(carrito);
carrito.mostrarDetalle();
const totalCompra = carrito.calcularTotal();
carrito.finalizarCompra(totalCompra);

console.log(carrito);

function chooseProduct() {
  let mainMessage = 'Productos disponibles:\n 1.- Leche $1000\n 2.- Pan de Molde $2000\n 3.- Queso $1200\n 4.- Mermelada $890\n 5.- Azúcar $1300';
  let option;

  do {
    option = parseInt(prompt(mainMessage, "Ingrese número de producto"));

    if (isNaN(option)) {
      alert("No has ingresado un número válido. Intenta nuevamente.");
    } else if (option < 1 || option > 5) {
      alert(`Has ingresado: ${option}. Intenta nuevamente.`);
    }

  } while (option < 1 || option > 5 || isNaN(option));

  return option; 
}

function chooseAndAddItemsToCart(carrito) {
  let option = chooseProduct();
  let cantidad = parseInt(prompt("¿Cuántas unidades deseas añadir?"));

  switch (option) {
    case 1:
      carrito.agregarProductos(producto1, cantidad);
      alert(`(${cantidad}) ${producto1.nombre} se añadieron a carrito`)
      break;
    case 2:
      carrito.agregarProductos(producto2, cantidad);
      alert(`(${cantidad}) ${producto2.nombre} se añadieron a carrito`)
      break;
    case 3:
      carrito.agregarProductos(producto3, cantidad);
      alert(`(${cantidad}) ${producto3.nombre} se añadieron a carrito`)
      break;
    case 4:
      carrito.agregarProductos(producto4, cantidad);
      alert(`(${cantidad}) ${producto4.nombre} se añadieron a carrito`)
      break;
    case 5:
      carrito.agregarProductos(producto5, cantidad);
      alert(`(${cantidad}) ${producto5.nombre} se añadieron a carrito`)
      break;
  }

  let addMore = confirm("¿Deseas añadir otro producto?");
  
  if (addMore) {
    return chooseAndAddItemsToCart(carrito);
  } else {
    return carrito; 
  }
}
