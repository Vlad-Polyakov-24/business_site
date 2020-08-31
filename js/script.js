/*BURGER*/
	$('.header__menu-icon').click(function(event){
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.header__menu-link').click(function(event){
		$('body').removeClass('lock');
		$('.header__menu').removeClass('active');
		$('.header__menu-icon').removeClass('active');
	});

/*=========*/

/*SLIDER*/
	$(document).ready(function(){
		$('.slider').slick({
			arrows:false,
			dots:true,
			slidesToShow:1,
			autoplay:true,
			speed:500,
			autoplaySpeed:1500,
			infinite: true,
			cssEase: 'linear',
			responsive:[
				{
					breakpoint: 768,
					settings: {
						slidesToShow:1
					}
				}
			]
		});
	});
/*=========*/