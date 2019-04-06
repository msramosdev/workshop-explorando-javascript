var joao = {
	nome: 'João',
	idade: 25,
	endereco: {
		logradouro: 'Av. Brasil',
		numero: 200,
		complemento: 'Apto 101',
		cidade: 'Rio de Janeiro',
		estado: 'RJ'
	}
}

console.log(joao);

delete joao.idade;
console.log('->', joao);

// Apagando dinâmicamente
delete joao['endereco']['estado'];
console.log('-->', joao);