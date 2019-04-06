console.log('Iniciando...');

var elementoValor = document.getElementById('valor');
var elementoTotal = document.getElementById('total');

elementoValor.addEventListener('keyup', function(e) {
	var total = 0;
	var valor = parseFloat(elementoValor.value ? elementoValor.value : 0);

	if (valor > 0 & valor < 10) {
		total = valor + valor * 0.3 + 5;
	} else if (valor >= 10 && valor < 50) {
		total = valor + valor * 0.1 + 2;
	} else {
		total = valor;
	}

	elementoTotal.innerHTML = total;
});