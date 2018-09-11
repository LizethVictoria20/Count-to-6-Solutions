var inputs = process.argv.slice(2);

// ["H", "a", "f"]
var iniciales = inputs.map(item => {
  const inicial = item[0];
  return inicial;
})

var sumador = (acumulador, item) => {
  acumulador += item;
  return acumulador;
}

var result = iniciales.reduce(sumador, '')

console.log(`[${inputs.join(',')}] becomes \"${result}\"`)