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

for(prop in joao) {
	console.log(prop, '->', joao[prop]);
}