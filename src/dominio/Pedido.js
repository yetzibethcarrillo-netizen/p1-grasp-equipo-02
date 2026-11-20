import { LineaPedido } from "./LineaPedido.js";
import { IVA, COSTO_ENVIO, MINIMO_ENVIO_GRATIS } from "./constantes.js";

export class Pedido {
  constructor(cliente, tipoCliente) {
    this.cliente = cliente;
    this.tipoCliente = tipoCliente;
    this.lineas = [];
  }

  // Creador: el Pedido contiene lineas, por eso las crea.
  agregarLinea(nombre, precio, cantidad) {
    this.lineas.push(new LineaPedido(nombre, precio, cantidad));
  }

  // Experto en informacion: el Pedido conoce todas sus lineas.
  subtotal() {
    return this.lineas.reduce((suma, linea) => suma + linea.subtotal(), 0);
  }

  total() {
    let monto = this.tipoCliente.aplicarDescuento(this.subtotal());
    if (monto < MINIMO_ENVIO_GRATIS) monto += COSTO_ENVIO;
    monto = monto * (1 + IVA);
    return Math.round(monto * 100) / 100;
  }
}