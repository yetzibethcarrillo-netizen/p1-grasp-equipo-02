// Controlador (GRASP): primer elemento despues de la interfaz que recibe la
// operacion del sistema ("procesar un pedido"). Coordina y delega; no calcula.
import { Pedido } from "./dominio/Pedido.js";
import { obtenerTipoCliente } from "./dominio/tiposCliente.js";
import { formatearResumen } from "./presentacion/resumen.js";

export function procesarPedido(datos) {
  const pedido = new Pedido(datos.cliente, obtenerTipoCliente(datos.tipoCliente));
  for (const p of datos.productos) {
    pedido.agregarLinea(p.nombre, p.precio, p.cantidad);
  }
  const total = pedido.total();
  return { total, resumen: formatearResumen(datos.cliente, total) };
}