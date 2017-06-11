'use strict';

function select (update) {
	var container = $('<section>',{
		id: 'app-select'
	});
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

	container
		.append(label)
		.append(select);

	return container;

}