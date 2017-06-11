function render(root) {

	root.empty();

	var wrapper = $('<div>',{
		class: 'container'
	});

	//Append de componentes
	..

	root.append(wrapper);
}

$(function() {
	var root = $('.root');
	render(root);
});