// Alta cohesion: este modulo solo se encarga de dar formato.
export function formatearResumen(cliente, total) {
  return `Pedido de ${cliente}: $${total.toFixed(2)}`;
}