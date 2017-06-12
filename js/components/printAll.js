'use strict';

function print(pais) {

	var containerSection = $('<section>',{
		class: 'row'
	});

	var containerLeft = $('<div>',{
		class: 'col-md-6'
	});

	var randomNumber = Math.floor((Math.random() * pais.length));
	var imagenRandom = pais[randomNumber];

	var contentImage = $('<img>',{
		src: 'assets/img/'+$("#select").val()+'/' + imagenRandom.image,
		alt: imagenRandom.name
	});

	containerLeft.append(contentImage);

	/*
	* Contenedor Derecho
	*/
	var containerRight = $('<div>',{
		class: 'col-md-6 containerRight'
	});

	var containerInput = $('<div>');

	var label = $('<label>',{
		html: 'Ingresa su nombre:'
	});
	var input = $('<input>',{
		type: 'text',
		id: 'input-nombre',
		placeholder:'nombre'
	});

	var containerButton = $('<div>');

	var button = $('<button>',{
		html: 'COMPROBAR',
		id: 'btn-comprobar'
	});

	console.log(imagenRandom.name);



	button.on('click',function(e) {
		e.preventDefault();

		if (input.val() == imagenRandom.name) {
			alert("si");
		} else {
			alert("no");

		}
	});

	// var contador = 0;
	// 	while (contador<5) {
	// 		contador++;
	// 		if(input.val() == imagenRandom.name){
	// 			alert("si");
	//
	// 		}else{
	// 			alert("no");
	//
	// 		}
	//
	// 	}



	containerInput
		.append(label)
		.append(input);

	containerButton.append(button);

	containerRight
		.append(containerInput)
		.append(containerButton);

	containerSection
		.append(containerLeft)
		.append(containerRight);

	return containerSection;
}
