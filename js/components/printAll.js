'use strict';

function print(pais) {

	var containerSection = $('<section>',{
		class: 'row container bg-white',
		id:'app-print'
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

	var containerRight = $('<div>',{
		class: 'col-md-6 containerRight'
	});

	var containerInput = $('<div>',{
		class: 'flex-container'
	});

	var label = $('<label>',{
		html: 'Ingresa su nombre: '
	});

	var input = $('<input>',{
		type: 'text',
		id: 'input-nombre',
		placeholder:' Nombre'
	});

	var containerButton = $('<div>');

	var button = $('<button>',{
		html: 'COMPROBAR',
		id: 'btn-comprobar'
	});

	var containerOportunidades = $('<div>',{
		class:'containerOportunidades'
	});

	var textOportunidades = $('<p>',{
		html: 'Oportunidades:'
	});
	var spanOportunidades = $('<span>',{
		id:'oportDinamico',
		html:'5'
	});
	var mensaje = $('<p>',{
		id:'mensajeAlert',
		html: ''
	});
	console.log(imagenRandom.name);

	var puntaje = 0;
	var oportunidades = 0;
	var spanPuntaje = $('#contadorPuntos');


	button.on('click',function(e) {
		e.preventDefault();

		if (input.val().toLowerCase() == imagenRandom.name.toLowerCase()) {
			mensaje.text("Excelente Acertaste");
			oportunidades = 0;
			puntaje = puntaje + 5;




			setTimeout(function(){
				$(".wrapper2")
					.empty()
					.append(print(pais));
			},2000);
		} else {
			mensaje.text("Sigue Intentando");
			oportunidades = oportunidades + 1;

			spanOportunidades.text(oportunidades);

			if(oportunidades == 5){
				mensaje.text("Lo sentimos, la imagen cambiará en 2 segundos");
				puntaje = puntaje - 1;
				oportunidades = 0;
				setTimeout(function(){
					$(".wrapper2")
						.empty()
						.append(print(pais));
				},2000);
			}
		}
		input.val('');
		spanPuntaje.text(puntaje);
	});

	textOportunidades.append(spanOportunidades);

	containerOportunidades
		.append(textOportunidades)
		.append(mensaje);

	containerInput
		.append(label)
		.append(input);

	containerButton
		.append(button)
		.append(containerOportunidades);

	containerRight
		.append(containerInput)
		.append(containerButton);

	containerSection
		.append(containerLeft)
		.append(containerRight);

	return containerSection;
}
