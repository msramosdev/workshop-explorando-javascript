var fox = {
	cor: 'Prata',
	modelo: 'Fox',
	fabricante: 'VW'
}

console.log('Fox:', fox);
console.log(typeof fox);
console.log('Cor do Fox:', fox.cor);

// Pintando o Fox
fox.cor = 'Preto';
console.log('Cor do Fox depois de pintado:', fox.cor);

// Acesso dinâmico
console.log('Modelo:', fox['modelo']);

// Adicionando peso
fox.peso = 1100;
console.log(fox);

// Testando propriedade não existente
console.log('Potência:', fox.potencia);

// Criando funções
fox.ligar = function() {
	console.log('Ligando o carro!');
}

console.log(fox);
fox.ligar();

var celta = {
	cor: 'Branco',
	modelo: 'Celta',
	fabricante: 'GM',
	ligar: function() {
		console.log('Ligando o carro!');
	}
}

console.log('Celta:', celta);

celta.ligar();