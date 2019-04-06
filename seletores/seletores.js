$(function() {
	var selecaoTodosUsuarios = $('#selecao-todos-usuarios');
	var selecaoUsuarios = $('.js-selecao-usuarios');

	selecaoUsuarios.on('click', function() {
		var totalUsuariosSelecionados = selecaoUsuarios.filter(':checked').length;
		var selecionouTodosUsuarios = selecaoUsuarios.length === totalUsuariosSelecionados;

		selecaoTodosUsuarios.prop('checked', selecionouTodosUsuarios);
	});

	selecaoTodosUsuarios.on('click', function() {
		selecaoUsuarios.prop('checked', selecaoTodosUsuarios.prop('checked'));
	})
});