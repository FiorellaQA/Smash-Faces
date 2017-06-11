'use strict';

function select (update) {
	var containerSection = $('<section>',{
		id: 'app-select'
	});

	var containerSelect = $('<div>');

	var label = $('<label>',{
		html:'Elige tu sede: '
	});

	var select = $('<select>');

	var optionPeru = $('<option>',{
		value: 'peru',
		html: 'Peru'
	});
	var optionMexico = $('<option>',{
		value: 'mexico',
		html: 'Mexico'
	});

	select
		.append(optionMexico)
		.append(optionPeru);

	containerSelect
		.append(label)
		.append(select);

	var containerPoints = $('<div>');

	var contador = $('<p>',{
		html:' puntos.'
	});

	var spanDinamico = $('<span>',{
		id:'contadorPuntos',
		html:'0'
	});

	contador.append(spanDinamico);
	containerPoints.append(contador);

	containerSection
		.append(containerSelect)
		.append(containerPoints);

	return containerSection;

}