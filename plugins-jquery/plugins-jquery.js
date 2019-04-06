$(function() {
	var elementoValor = $('#valor');
	var mascaraConfig = {
		thousands: '.',
		decimal: ',',
		prefix: 'R$ '
	}

	elementoValor.on('keyup', function(e) {
		var elementoTotal = document.getElementById('total');
		var totalMascara = $('#total-mascara');
		var total = 0;
		var valor = elementoValor.maskMoney('unmasked')[0];

		if (valor > 0 & valor < 10) {
			total = valor + valor * 0.3 + 5;
		} else if (valor >= 10 && valor < 50) {
			total = valor + valor * 0.1 + 2;
		} else {
			total = valor;
		}

		totalMascara.maskMoney(mascaraConfig);
		totalMascara.maskMoney('mask', total);
		elementoTotal.innerHTML = totalMascara.val();
	});

	elementoValor.maskMoney(mascaraConfig);
})