/* ===========================================================
   Laboratorio: Arreglos, Funciones y Objetos
   Completa cada TODO. Prueba cada función con console.log
   antes de avanzar a la siguiente parte.
   =========================================================== */

/* ---------------- PARTE 1: ARREGLOS ---------------- */

const inventario = ["teclado", "mouse", "monitor", "audífonos"];
const ultimoElemento = inventario[inventario.length - 1];

function agregarItems(arr, alInicio, alFinal) {
  // TODO: devolver un NUEVO arreglo con alInicio al principio y alFinal al final
  return [alInicio, ...arr, alFinal];
}

const temperaturas = [18, 22, 25, 30, 15, 19, 27];

function aFahrenheit(arr) {
  // TODO: usar map
  return arr.map((celsius) => (celsius * 9) / 5 + 32);
}

function diasCalurosos(arr, umbral) {
  // TODO: usar filter
  return arr.filter((temp) => temp > umbral);
}

function promedio(arr) {
  // TODO: usar reduce
  const suma = arr.reduce((acumulador, temp) => acumulador + temp, 0);
  return Math.round((suma / arr.length) * 100) / 100;
}

function temperaturaMaxima(arr) {
  // TODO
  return Math.max(...arr);
}

function buscarPrimerMayorA(arr, valor) {
  // TODO: usar find
  return arr.find((temp) => temp > valor);
}

function ordenarDescendente(arr) {
  // TODO: copiar el arreglo antes de ordenar
  return [...arr].sort((a, b) => b - a);
}

console.log("Parte 1");

/*Prints de la primera parte*/
console.log("1.1 Último elemento: \n", ultimoElemento);

console.log(
  "1.1 agregarItems: \n",
  agregarItems(inventario, "cable HDMI", "webcam"),
);

console.log("1.2 aFahrenheit(arr): \n", aFahrenheit(temperaturas));

console.log(
  "1.2 diasCalurosos(arr, umbral): \n",
  diasCalurosos(temperaturas, 20),
);

console.log("1.2 promedio(arr): \n", promedio(temperaturas));

console.log("1.2 temperaturaMaxima(arr): \n", temperaturaMaxima(temperaturas));

console.log(
  "1.3 buscarPrimerMayorA(arr, valor): \n",
  buscarPrimerMayorA(temperaturas, 25),
);

console.log(
  "1.3 ordenarDescendente(arr): \n",
  ordenarDescendente(temperaturas),
);

console.log("Original inventario: \n", inventario);

console.log("Orginal temperaturas: \n", temperaturas);


/* ---------------- PARTE 2: FUNCIONES ---------------- */

function procesarLista(arr, accion) {
  // TODO: recorrer arr aplicando "accion" a cada elemento y devolver un nuevo arreglo
  const nuevoArreglo = [];
  for (let i = 0; i < arr.length; i++) {
    nuevoArreglo.push(accion(arr[i]));
  }
  return nuevoArreglo;
}

const numerosOriginales = [1, 2, 3, 4];
const palabrasOriginales = ["hola", "mundo", "javascript"];

const duplicados = procesarLista(numerosOriginales, (num) => num * 2);
const enMayusculas = procesarLista(palabrasOriginales, (palabra) =>
  palabra.toUpperCase(),
);

function crearMultiplicador(factor) {
  // TODO: devolver una arrow function que multiplique su argumento por "factor"
  return (numero) => numero * factor;
}

const porTres = crearMultiplicador(3);

function dividirSeguro(a, b) {
  // TODO: lanzar un Error si b === 0, si no devolver a / b
  if (b === 0) {
    throw new Error(
      "Error crítico: No se puede dividir entre cero (b no puede ser 0).",
    );
  }
  return a / b;
}

console.log("\nParte 2 \n");

console.log("2.1 procesarLista (Duplicar números): \n", duplicados);

console.log("2.1 procesarLista (Mayúsculas): \n", enMayusculas);

console.log("2.2 crearMultiplicador por 3 de 10: \n", porTres(10)); // Debe dar 30

console.log("2.3 Dividir seguro (10 / 2): \n");
try {
  const resultadoExito = dividirSeguro(10, 2);
  console.log("Éxito: \n", resultadoExito);
} catch (error) {
  console.error("Capturado: \n", error.message);
}

console.log("2.3 Dividir seguro (10 / 0 - Error esperado): \n");
try {
  const resultadoError = dividirSeguro(10, 0);
  console.log("Éxito:", resultadoError);
} catch (error) {
  console.error("Capturado correctamente: \n", error.message);
}

/* ---------------- PARTE 3: OBJETOS ---------------- */

// 3.1 Modelando una entidad
const producto = {
  nombre: "Teclado mecánico",
  precio: 45,
  stock: 12,
  aplicarDescuento(porcentaje) {
    // TODO: devolver el precio con descuento, sin modificar this.precio
    return this.precio - (this.precio * (porcentaje / 100));
  },
};

// 3.2 Arreglos de objetos
const catalogo = [
  { nombre: "Teclado", precio: 45, categoria: "periféricos", stock: 12 },
  { nombre: "Monitor", precio: 180, categoria: "pantallas", stock: 5 },
  { nombre: "Mouse", precio: 20, categoria: "periféricos", stock: 30 },
  { nombre: "Silla", precio: 150, categoria: "mobiliario", stock: 0 },
];

function productosDisponibles(catalogo) {
  // TODO
  return catalogo.filter((item) => item.stock > 0);
}

function valorTotalInventario(catalogo) {
  // TODO: usar reduce
  return catalogo.reduce((total, item) => total + item.precio * item.stock, 0);
}

function productoMasCaro(catalogo) {
  // TODO
  return catalogo.reduce((max, item) => (item.precio > max.precio ? item : max));
}

// 3.3 Desestructuración (destructuring)
function nombresPorCategoria(catalogo, categoria) {
  // TODO: usar desestructuración en el callback
  return catalogo
    .filter(({ categoria: cat }) => cat === categoria)
    .map(({ nombre }) => nombre);
}

/*
Comentario 3.3: 
La desestructuración hace el código más legible porque extrae directamente las 
propiedades que la función necesita ({ categoria: cat }, { nombre }) en los parámetros, 
eliminando la repetición de "item.categoria" o "item.nombre", dejando claro a primera vista 
la forma del objeto que se espera y reduciendo el ruido visual.
*/

console.log("\nParte 3 \n");

/*Prints de la tercera parte*/
console.log(
  "3.1 aplicarDescuento: \n",
  producto.aplicarDescuento(10),
);

console.log(
  "3.1 precio original: \n",
  producto.precio,
);

console.log(
  "3.2 productosDisponibles: \n",
  productosDisponibles(catalogo),
);

console.log(
  "3.2 valorTotalInventario: \n",
  valorTotalInventario(catalogo),
);

console.log(
  "3.2 productoMasCaro: \n",
  productoMasCaro(catalogo),
);

console.log(
  "3.3 nombresPorCategoria (con desestructuración): \n",
  nombresPorCategoria(catalogo, "periféricos"),
);


/* ---------------- PARTE 4: RETO INTEGRADOR ---------------- */

const ventas = [
  { producto: "Teclado", cantidad: 3, precioUnitario: 45 },
  { producto: "Monitor", cantidad: 1, precioUnitario: 180 },
  { producto: "Mouse", cantidad: 5, precioUnitario: 20 },
  { producto: "Teclado", cantidad: 2, precioUnitario: 45 },
  { producto: "Silla", cantidad: 1, precioUnitario: 150 },
];

function generarReporte(ventas) {
  // TODO: devolver el objeto reporte descrito en la guía
  const totalVendido = ventas.reduce(
    (total, v) => total + v.cantidad * v.precioUnitario,
    0,
  );

  const numeroTransacciones = ventas.length;

  const agrupado = ventas.reduce((acc, v) => {
    if (!acc[v.producto]) {
      acc[v.producto] = {
        producto: v.producto,
        cantidadTotal: 0,
        ingresoTotal: 0,
      };
    }
    acc[v.producto].cantidadTotal += v.cantidad;
    acc[v.producto].ingresoTotal += v.cantidad * v.precioUnitario;
    return acc;
  }, {});

  const resumenPorProducto = Object.values(agrupado);

  const productoTop = [...resumenPorProducto].sort(
    (a, b) => b.cantidadTotal - a.cantidadTotal,
  )[0];

  return {
    totalVendido,
    numeroTransacciones,
    productoTopVentas: productoTop.producto,
    resumenPorProducto,
  };
}

console.log("\nParte 4 \n");

// Descomenta para probar cuando termines:
console.log(JSON.stringify(generarReporte(ventas), null, 2));
