// Codigo heredado: funciona, pero es dificil de mantener.
  export function procesarPedido(datos) {
    let total = 0;
    for (let i = 0; i < datos.productos.length; i++) {
      const p = datos.productos[i];
      if (p.cantidad <= 0) throw new Error("Cantidad invalida");
      total = total + p.precio * p.cantidad;
    }
    if (datos.tipoCliente === "frecuente") {
      total = total - total * 0.1;
    } else if (datos.tipoCliente === "empleado") {
      total = total - total * 0.25;
    }
    if (total < 500) total = total + 99;
    total = total * 1.16;
    total = Math.round(total * 100) / 100;
    const resumen = "Pedido de " + datos.cliente + ": $" + total.toFixed(2);
    console.log(resumen);
    return { total, resumen };
  }
