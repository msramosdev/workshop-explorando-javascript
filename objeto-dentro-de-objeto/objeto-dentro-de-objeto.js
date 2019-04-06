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

// Lendo a cidade
console.log('Cidade que o', joao.nome, 'mora:', joao.endereco.cidade);

joao.endereco.numero = 201;
console.log(joao);

console.log(joao.endereco.cep);

// Acesso dinâmico
console.log('Estado:', joao['endereco']['estado']);