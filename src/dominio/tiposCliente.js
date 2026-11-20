// Polimorfismo (GRASP): todos los tipos de cliente comparten la misma operacion,
// aplicarDescuento(monto), y cada uno la resuelve a su manera.
class TipoCliente {
  aplicarDescuento(monto) {
    throw new Error("Cada tipo de cliente debe implementar aplicarDescuento");
  }
}

class TipoNormal extends TipoCliente {
  aplicarDescuento(monto) {
    return monto;
  }
}

class TipoFrecuente extends TipoCliente {
  aplicarDescuento(monto) {
    return monto * 0.9;
  }
}

class TipoEmpleado extends TipoCliente {
  aplicarDescuento(monto) {
    return monto * 0.75;
  }
}

// Variaciones protegidas: agregar un tipo nuevo solo cambia este archivo.
const TIPOS = {
  normal: new TipoNormal(),
  frecuente: new TipoFrecuente(),
  empleado: new TipoEmpleado(),
};

// Igual que el codigo heredado: un tipo no registrado se cobra como normal.
export function obtenerTipoCliente(clave) {
  return TIPOS[clave] ?? TIPOS.normal;
}