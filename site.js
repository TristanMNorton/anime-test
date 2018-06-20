var circleOne = anime.timeline({
	loop: true
});
var circleTwo = anime.timeline({
	loop: true
});

var triangleStop = (window.innerHeight / 2) - 95;


circleOne
	.add({
		targets: '.circle-one',
		translateY: triangleStop,
		duration: 500,
		easing: 'linear'
	})
	.add({
		targets: '.circle-one',
		translateY: triangleStop + 300,
		duration: 500,
		translateX: 175,
		easing: 'linear'
	})
	.add({
		targets: '.circle-one',
		translateY: (triangleStop * 2) + 300,
		duration: 500,
		translateX: 175,
		easing: 'linear'
	});

window.setTimeout(function(){
	circleTwo
		.add({
			targets: '.circle-two',
			translateY: triangleStop,
			duration: 500,
			easing: 'linear'
		})
		.add({
			targets: '.circle-two',
			translateY: triangleStop + 300,
			duration: 500,
			translateX: -175,
			easing: 'linear'
		})
		.add({
			targets: '.circle-two',
			translateY: (triangleStop * 2) + 300,
			duration: 500,
			translateX: -175,
			easing: 'linear'
		});
	}, 1000);
