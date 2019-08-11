const $ = require('jquery');

$(document).ready(function() {

	const canvas = $('.canvas-elements canvas');
	for (let a = 0; a < canvas.length; a++) {

		let args = {
			colors: ['#FDC426', '#EFEFEF', 'rgba(255,255,255, 1)'],
			arc: {
				radius: [60, 60, 50],
				startCircle: [
					[0, 0.6, 0],
					[0, 0.6, 0],
					[0, 0.5, 0],
					[0, 0.5, 0],
					[0, 0.6, 0],
					[0, 0.6, 0],
				],
				endCircle: [
					[0.6, 0, 2],
					[0.6, 0, 2],
					[0.5, 0, 2],
					[0.5, 0, 2],
					[0.6, 0, 2],
					[0.6, 0, 2]
				],
			},
			text: ['70 %', '70 %', '75 %', '75 %', '70 %', '70 %']
		}

		canvas[a].width = 150;
		canvas[a].height = 140;
		let c = canvas[a].getContext('2d');

		for (let i = 0; i < 3; i++) {
			c.beginPath();
			c.arc(75, 75, args.arc.radius[i], args.arc.startCircle[a][i]*Math.PI, 
				args.arc.endCircle[a][i]*Math.PI, true);

			if (i == 1) {
				c.lineTo(75, 75);
			}

			c.fillStyle = args.colors[i]; 
			c.fill(); 
			c.strokeStyle = args.colors[i]; 
			c.stroke();
		}


		c.fillStyle = "black"; 
		c.font = "20px Open Sans, sans-serif"; 
		var text = args.text[a]; 
		var metrics = c.measureText(text); 
		c.fillText(text, 55, 80, 400); 
	};

	$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    const _href = $(this).attr('href');
    let start = $(window).scrollTop();
    let dest = $(_href).offset().top - 30;
    let s = Math.abs(start - dest);

    $("html, body").animate({
      scrollTop: dest,
    }, s/3);
	});
	
	$('.feedback-form').on('submit', function(e) {
		e.preventDefault();
		const $submit = $('.input-submit');
		$submit.addClass('button_disabled');
		
		const $result = $('<div id="error-mail"> К сожалению, в данный момент сервис автоматической отправки писем не доступен. </div>');
		$result.addClass("mail-error");
		$('.feedback').prepend($result);

		setTimeout(function() {
			$result.remove();
			$submit.removeClass('button_disabled');
		}, 3500);
		
	})

});
