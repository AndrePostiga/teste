window.onscroll = function () {add_class()};

var navbar = document.getElementById("header");
var distanciaY = navbar.offsetTop;
var menu = document.getElementById("dropdown_content")


function add_class() {
	if (window.pageYOffset >= distanciaY) {
		navbar.classList.add("fixar");
	} else {
		navbar.classList.remove("fixar");
	}
}


function mostrar_menu() {	
	menu.classList.toggle("hide");
	menu.classList.toggle("show");	

	
}