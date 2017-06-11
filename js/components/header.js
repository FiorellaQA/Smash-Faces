'use strict';

function header (update) {
	var container = $('<header>',{ 
		id: 'app-header'
	});  

	var title = $('<h1>',{ 
		html:'Smash Faces' 
	});  

	var description = $('<p>',{ 
		html:'Bienvenidad al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase,' + 
		'ingresando su nombre.' 
	});

	 var reglas = $('<p>',{ 
		html:'Tienes 5 oportunidades antes de perder 1 punto y pasar a la siguiente.' 
	});  

	container
		.append(title)
		.append(description)
		.append(reglas);  

	return container;
}

