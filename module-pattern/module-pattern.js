var contadorModule = (function() {
	var valor = 0;

	var incrementar = function() {
		valor++;
	};

	var reset = function() {
		console.log('Valor antes de resetar:', valor);
	}

	return {
		incrementar: incrementar,
		reset: reset
	}
})();

contadorModule.incrementar();
contadorModule.incrementar();
contadorModule.reset();