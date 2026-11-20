import { procesarPedido } from "./pedidos.js";

const { resumen } = procesarPedido({
  cliente: "Ana",
  tipoCliente: "frecuente",
  productos: [{ nombre: "Audifonos", precio: 1000, cantidad: 1 }],
});
console.log(resumen);