'use strict';

function select (update) {
	var containerSection = $('<section>',{
		id: 'app-select'
	});

	var row = $('<div>',{
		class: 'row container bg-gray'
	});

	var containerSelect = $('<div>',{
		class: 'col-md-6 containerSelect'
	});

	var label = $('<label>',{
		id: 'label-select',
		html:'Elige tu sede: '
	});

	var select = $('<select>',{
		id: 'select',
		name: 'hola'
	});

	var optionDefault = $('<option>',{
		hidden: '',
		html: 'Seleccione una opción'
	});

	var optionPeru = $('<option>',{
		value: 'peru',
		html: 'Peru'
	});

	var optionMexico = $('<option>',{
		value: 'mexico',
		html: 'Mexico',
		checked: 'checked'
	});

	select
		.append(optionDefault)
		.append(optionMexico)
		.append(optionPeru)
		.on('change', function (e) {
			e.preventDefault();
			update($(this).val());
		});

	containerSelect
		.append(label)
		.append(select);

	var containerPoints = $('<div>',{
		class: 'col-md-6 containerPoints'
	});

	var contador = $('<p>',{
		html:'Puntos : '
	});

	var spanDinamico = $('<span>',{
		id:'contadorPuntos',
		html:'0'
	});

	contador.append(spanDinamico);
	containerPoints.append(contador);

	row
		.append(containerSelect)
		.append(containerPoints);

	containerSection.append(row);

	return containerSection;

}