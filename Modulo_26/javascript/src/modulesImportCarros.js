import carros from './carros.js';

// Filtrar carros por ano
const carrosFiltrados = carros.filter(carros => {
  return carros.ano === 2017;
});

// Listar marcas de carros
let lista = [];
carros.forEach(carro => {
  lista += carro.marca + ', ';
});

// Somar todos os anos dos carros
let somaAnos = carros.reduce((prev, next) => {
  return { anos: prev.ano + next.ano };
});

// Mapear todos os carros flex
let carrosFlex = carros.map(carro => {
  return carro['combustível'] === 'flex';
});
