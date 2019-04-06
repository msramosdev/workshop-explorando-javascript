$(function() {
	var atividade = $('#atividade');
	var listaAtividades = $('#lista-atividades');

	atividade.on('keyup', function(e) {
		if (e.keyCode === 13 && atividade.val()) {
			atividade.trigger('enter', atividade.val())
			atividade.val('');
		}
	});

	atividade.on('enter', function(evento, texto) {
		console.log(evento);
		listaAtividades.prepend('<li>' + texto + '</li>');
	});
});