$(document).ready(function(){

	// code pour le déplacement des liaisons lentes
	$('a[href^="#"]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			},1000);
			e.preventDefault();
	});

	// Le départ de bibliothèque wow.js avec un retard de 200px vers le bas
	new WOW({ offset: 200 }).init();
 
});﻿