var Estado = (function() {
	function Estado() {
		this.comboEstado = $('#combo-estado');
		this.emitter = $({});
		this.on = this.emitter.on.bind(this.emitter);
	}

	Estado.prototype.iniciar = function() {
		$.ajax({
			url: 'http://localhost:8080/estados',
			method: 'GET',
			dataType: 'jsonp',
			success: onEstadosRetornados.bind(this),
			error: onError
 		});

		this.comboEstado.on('change', onEstadoAlterado.bind(this));

		function onEstadoAlterado() {
			this.emitter.trigger('alterado', this.comboEstado.val());
		}
	};

	function onEstadosRetornados(estados) {
		this.comboEstado.html('<option value="">Selecione o estado</option>');

		estados.forEach(function(estado) {
			var optionEstado = $('<option>').val(estado.uf).text(estado.nome);
			this.comboEstado.append(optionEstado);
		}.bind(this));
	}

	function onError() {
		alert('Erro ao carregar os estados do servidor!');
	}

	return Estado;
})();

var Cidade = (function() {
	function Cidade(estado) {
		this.estado = estado;
		this.comboCidade = $('#combo-cidade');
	}

	Cidade.prototype.iniciar = function() {
		this.estado.on('alterado', onEstadoSelecionado.bind(this));
	};

	function onEstadoSelecionado(evento, uf) {
		if (uf) {
			$.ajax({
				url: 'http://localhost:8080/cidades',
				method: 'GET',
				dataType: 'jsonp',
				data: {uf: uf},
				success: onCidadesRetornadas.bind(this),
				error: onError
			});
		} else {
			reset.call(this); // reset.call(contexto, parametro1, parametro2..);
			//reset.apply(this); // reset.apply(contexto, [parametro1, parametro2]);
		}
	}

	function reset() {
		this.comboCidade.html('');
		this.comboCidade.attr('disabled', 'disabled');
	}

	function onCidadesRetornadas(cidades) {
		this.comboCidade.removeAttr('disabled');
		this.comboCidade.html('<option value="">Selecione a cidade</option>');

		cidades.forEach(function(cidade) {
			var optionCidade = $('<option>').val(cidade.codigo).text(cidade.nome);
			this.comboCidade.append(optionCidade);
		}.bind(this));
	}

	function onError() {
		alert('Erro ao carregar as cidades do servidor!');
	}

	return Cidade;
})();

$(function() {
	var estado = new Estado();
	estado.iniciar();

	var cidade = new Cidade(estado);
	cidade.iniciar();
});