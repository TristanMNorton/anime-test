var circleOne = anime.timeline({
	loop: true
});
var circleTwo = anime.timeline({
	loop: true
});

var triangleStop = (window.innerHeight / 2) - 95;
var globalSpeed = 1000;

circleOne
	.add({
		targets: '.circle-one',
		translateY: triangleStop,
		duration: globalSpeed,
		easing: 'linear'
	})
	.add({
		targets: '.circle-one',
		translateY: triangleStop + 300,
		duration: globalSpeed,
		translateX: 175,
		easing: 'linear'
	})
	.add({
		targets: '.circle-one',
		translateY: (triangleStop * 2) + 300,
		duration: globalSpeed,
		translateX: 175,
		easing: 'linear'
	});

window.setTimeout(function(){
	circleTwo
		.add({
			targets: '.circle-two',
			translateY: triangleStop,
			duration: globalSpeed,
			easing: 'linear'
		})
		.add({
			targets: '.circle-two',
			translateY: triangleStop + 300,
			duration: globalSpeed,
			translateX: -175,
			easing: 'linear'
		})
		.add({
			targets: '.circle-two',
			translateY: (triangleStop * 2) + 300,
			duration: globalSpeed,
			translateX: -175,
			easing: 'linear'
		});
	}, (globalSpeed * 2));
