var circleOne = anime.timeline({
	loop: true
});
var circleTwo = anime.timeline({
	loop: true
});

var triangleStop = (window.innerHeight / 2) - 95;
var globalSpeed = 500;

window.addEventListener('resize', function(){
	triangleStop = (window.innerHeight / 2) - 95;

	/* 
	THIS DOESN'T WORK :D. 
	Attempting to reset anime 
	on window resize so it can 
	register a new triangleStop value

	This actual fix when I apply this IRL 
	is to have start value based on absolute position
	relative to the triangle itself, rather than viewport.
	*/
	circleOne.restart();
	circleTwo.restart();
});

var ave = anime({
	targets: '.ave',
	duration: 5000,
	translateY: -775,
	easing: 'linear'
})

var blown = anime({
	targets: '.blown',
	duration: 90000,
	width: 1000,
	easing: 'linear'
})

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
