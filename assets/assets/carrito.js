export default class Carrito {
    constructor(){
        this.productos = new Array();
    }

    agregarProductos(producto, cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.productos.push(producto);
        }
    }

    calcularTotal() {
        const total = this.productos.reduce((acc, producto) => acc + producto.precio, 0);
        return total;
    }

    finalizarCompra(total) {
        return alert("El total de su compra es: $" + total);
    }

    mostrarDetalle() {
        if(this.productos.lenght === 0) {
            alert("El carrito está vacio");
            return;
        }

        const resumen = {};

        this.productos.forEach((producto) => {
            if(resumen[producto.nombre]) {
                resumen[producto.nombre].cantidad += 1;
                resumen[producto.nombre].precioTotal += producto.precio;
            } else {
                resumen[producto.nombre] = {
                    cantidad:1,
                    precioTotal: producto.precio,
                };
            }
        })

        let mensaje = 'Detalles de los productos en el carrito:\n';
        for(const [nombre, {cantidad, precioTotal}] of Object.entries(resumen)){
            mensaje += `${nombre}: Cantidad: ${cantidad}, precioTotal: $${precioTotal.toFixed(2)}\n`;
        }

        const total = this.calcularTotal();

        mensaje += `\n Total del carrito: $${total.toFixed(2)}`;
        return alert(mensaje);
    }


}

