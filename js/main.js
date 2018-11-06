
$(document).ready(function()
	{
		/* ============================
   						Menu
   		============================ */
		var nav = $('.navbar-fixed-top');

		var distancia = $('.navbar-fixed-top').offset();

		if(distancia.top > 0)
		{
			nav.removeClass('normal').addClass('efecto');
		}

		$(window).scroll(function()
			{
				var scroll = $(window).scrollTop();

				if(scroll>=380)
				{
					//alert('entraste al efecto');
					nav.removeClass('normal').addClass('efecto');

				}else
				{
					nav.removeClass('efecto').addClass('normal');
				}
			});
		/* ============================
   				 Animaciones
   		============================ */
   		$('section#principal .anima1').waypoint(function()
   			{
   				$('section#principal .anima1').addClass('animated fadeInRight');


   			},{
   				offset: '60%'
   			});
   		$('section#skills .anima1').waypoint(function()
   			{
   				$('section#skills .anima1').addClass('animated fadeInLeft');


   			},{
   				offset: '60%'
   			});

   		$('section#skills .anima2').waypoint(function()
   			{
   				$('section#skills .anima2').addClass('animated fadeInRight');


   			},{
   				offset: '60%'
   			});
   		$('section#proceso .anima1').waypoint(function()
   			{
   				$('section#proceso .anima1').addClass('animated fadeInDown');


   			},{
   				offset: '60%'
   			});

   		$('section#proceso .anima2').waypoint(function()
   			{
   				$('section#proceso .anima2').addClass('animated fadeInUp');


   			},{
   				offset: '60%'
   			});

   		/* ============================
   					Formulario
		============================ */

		$('#enviarEmail').formValidation({
        
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            'nombre': {
                row: '.col-xs-4',
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            'correo': {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            'asunto': {
                row: '.col-xs-4',
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            'mensaje': {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    }
                }
            }
            
        }
    });

	});
/* ============================
   		    SKILLS
============================ */

$('.skillbar').each(function()
        {
            $(this).find('.skillbar-bar').animate({
                  width:$(this).attr('data-percent')
              },6000);
        });
/* ============================
   		Nav Scroll
============================ */

smoothScroll.init(
	{
		speed: 1000,
		easing: 'easeInOutQuad',
		updateURL: false,
		offset:0,
		callbackBefore: function(toggle, anchor){},
		callbackAfter: function(toogle, anchor){}
	});





