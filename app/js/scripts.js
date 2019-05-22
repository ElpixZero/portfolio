const $ = require('jquery');


$(document).ready(function() {

	let canvas = $('.canvas-elements canvas');

	for (let a = 0; a < canvas.length; a++) {

		let args = {
			colors: ['#FDC426', '#EFEFEF', 'rgba(255,255,255, 1)'],
			arc: {
				radius: [60, 60, 50],
				startCircle: [
					[0, 0.6, 0],
					[0, 0.6, 0],
					[0, 0.5, 0],
					[0, 0.8, 0],
					[0, 0.6, 0],
					[0, 0.7, 0],
				],
				endCircle: [
					[0.6, 0, 2],
					[0.6, 0, 2],
					[0.5, 0, 2],
					[0.8, 0, 2],
					[0.6, 0, 2],
					[0.7, 0, 2]
				],
			},
			text: ['70 %', '70 %', '75 %', '60 %', '70 %', '65 %']
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
				console.log('jr');
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
	}






});
