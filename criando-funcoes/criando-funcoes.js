function somar(a, b) {
	return a + b;
}

var subtrair = function (a, b) {
	return a - b;
}

var soma = somar(1, 5);
console.log('1 + 5 =', soma);

var diferenca = subtrair(3, 2);
console.log('3 - 2 =', diferenca);

console.log('typeof subtrair:', typeof subtrair);