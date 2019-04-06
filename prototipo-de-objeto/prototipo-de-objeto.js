var carro = {
	modelo: '',
	fabricante: '',
	placa: ''
}

console.log('getPrototypeOf carro ->', Object.getPrototypeOf(carro));

var fox = Object.create(carro);

fox.modelo = 'Fox';
fox.fabricante = 'VW';
fox.placa = 'AAA-111';

console.log('fox:', fox);
console.log('getPrototypeOf fox ->', Object.getPrototypeOf(fox));

var gols = []

var gol1 = Object.create(carro);

gol1.modelo = 'gol';
gol1.fabricante = 'VW';
gol1.placa = 'AAA-222';
gol1.cor = 'Preto';

console.log('getPrototypeOf gol1 ->', Object.getPrototypeOf(gol1));

var gol2 = Object.create(carro);

gol2.modelo = 'gol';
gol2.fabricante = 'VW';
gol2.placa = 'AAA-333';
gol2.cor = 'Prata';

console.log('getPrototypeOf gol2 ->', Object.getPrototypeOf(gol1));

gols.push(gol1);
gols.push(gol2);

console.log('gols:', gols);