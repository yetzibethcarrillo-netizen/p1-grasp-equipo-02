// Experto en informacion: conoce precio y cantidad, calcula su subtotal.
export class LineaPedido {
  constructor(nombre, precio, cantidad) {
    if (cantidad <= 0) throw new Error("Cantidad invalida");
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  subtotal() {
    return this.precio * this.cantidad;
  }
}