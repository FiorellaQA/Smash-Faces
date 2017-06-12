'use strict';

var pais = null;

function render(root) {

	root.empty();

	var update = function (paisSelected){

		if(paisSelected == 'mexico'){
			pais = mexico;
		} else if(paisSelected == 'peru') {
			pais = peru;
		} else {
			pais = null;
		}

		if(pais != null) {
			$(".container2")
				.empty()
				.append(print(pais));
		}
	};

	var wrapper = $('<div>',{
		class: 'container'
	});

	var wrapper2 = $('<div>',{
		class: 'container2'
	});

	//Append de componentes
	wrapper.append(header());
	wrapper.append(select(update));


	root.append(wrapper);
	root.append(wrapper2);
}

$(function() {
	var root = $('.root');
	render(root);
});