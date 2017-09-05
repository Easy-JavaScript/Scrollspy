(function($){
	$('body').scrollspy({
		target: '.navbar-nav',
		offset: 50
	});
	$(".navbar-nav").on('activate.bs.scrolllspy', function(){
		$("#conteudo").css("opacity",0);

		var id = $(".navbar-nav li.active a").attr("href");
		var elemento = $(id).find("#conteudo");

		elemento.css("opacity",1);

	});

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 1000);
	    return false;
	});
	
})(jQuery);

