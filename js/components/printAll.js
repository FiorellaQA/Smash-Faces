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
	* Contenedor Derecho state.selectedSede[0].students
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

	var puntaje = 0;
	var oportunidades = 0;
	var spanPuntaje = $('#contadorPuntos');


	button.on('click',function(e) {
		e.preventDefault();

		if (input.val().toLowerCase() == imagenRandom.name.toLowerCase()) {
			alert("Excelente Acertaste");
			oportunidades = 0;
			puntaje = puntaje + 5;

			setTimeout(function(){
				$(".wrapper2")
					.empty()
					.append(print(pais));
			},2000);
		} else {
			alert("Sigue intentando");
			oportunidades = oportunidades + 1;
			if(oportunidades == 5){
				puntaje = puntaje - 1;
				oportunidades = 0;
			}
		}
		input.val('');
		spanPuntaje.text(puntaje);
	});


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
