$(function() {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuarios');

	function estilizarLinhaUsuario() {
		selecaoUsuarios.filter(':checked').parents('tr').addClass('selecionado');
		selecaoUsuarios.filter(':not(:checked)').parents('tr').removeClass('selecionado');
	}

	selecaoUsuarios.on('click', function() {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var selecionouTodosUsuarios = selecaoUsuarios.length === totalUsuariosSelecionados;

		selecaoTodosUsuarios.prop('checked', selecionouTodosUsuarios);
	});

	selecaoTodosUsuarios.on('click', function() {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
		estilizarLinhaUsuario();
	})

	selecaoUsuarios.on('change', function() {
		estilizarLinhaUsuario();
	})
});