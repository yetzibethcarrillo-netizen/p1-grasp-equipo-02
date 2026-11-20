import { test } from "node:test";
  import assert from "node:assert";
  import { procesarPedido } from "../src/pedidos.js";

  test("cliente normal con envio", () => {
    const r = procesarPedido({
      cliente: "Ana",
      tipoCliente: "normal",
      productos: [
        { nombre: "Taza", precio: 100, cantidad: 2 },
        { nombre: "Libreta", precio: 50, cantidad: 1 },
      ],
    });
    assert.strictEqual(r.total, 404.84);
    assert.strictEqual(r.resumen, "Pedido de Ana: $404.84");
  });

  test("cliente frecuente sin envio", () => {
    const r = procesarPedido({
      cliente: "Luis",
      tipoCliente: "frecuente",
      productos: [{ nombre: "Audifonos", precio: 1000, cantidad: 1 }],
    });
    assert.strictEqual(r.total, 1044);
  });

  test("empleado con descuento y envio", () => {
    const r = procesarPedido({
      cliente: "Sofia",
      tipoCliente: "empleado",
      productos: [{ nombre: "Mochila", precio: 300, cantidad: 2 }],
    });
    assert.strictEqual(r.total, 636.84);
  });

  test("tipo de cliente no registrado se cobra como normal", () => {
    const r = procesarPedido({
      cliente: "Ana",
      tipoCliente: "estudiante",
      productos: [{ nombre: "Taza", precio: 100, cantidad: 2 }],
    });
    assert.strictEqual(r.total, 346.84);
  });

  test("cantidad invalida lanza error", () => {
    assert.throws(() =>
      procesarPedido({
        cliente: "Ana",
        tipoCliente: "normal",
        productos: [{ nombre: "Taza", precio: 100, cantidad: 0 }],
      })
    );
  });
