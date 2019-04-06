$(function() {
	var httpResponse = $.ajax({
		url: 'http://localhost:8080/estados',
		method: 'GET',
		dataType: 'jsonp'
	});

	httpResponse.done(function(estados) {
		var comboEstado = $('#combo-estado');
		
		comboEstado.html('<option value="">Selecione o estado</option>');

		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			comboEstado.append(optionEstado);
		});
	});

	httpResponse.fail(function() {
		alert('Erro ao carregar os estados do servidor!');
	});
});