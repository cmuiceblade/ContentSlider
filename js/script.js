$(document).ready(function () {
	var speed = 500;
	var autoSwitch = true;
	var autoSwitch_speed = 4000;

	//Add initial active class
	$('.slide').first().addClass('active');

	//Hide all slides
	$('.slide').hide();

	//Show first slide
	$('.active').show();

	$('#next').on('click', nextSlide);

	$('#prev').on('click', prevSlide);


	if (autoSwitch == true) {
		setInterval(function () {
			nextSlide();
		}, autoSwitch_speed);
	}

	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':last-child')) {
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}

	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});