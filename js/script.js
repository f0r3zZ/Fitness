document.addEventListener('DOMContentLoaded', function() {
	let burger = document.querySelector('.burger'),
		header = document.querySelector('.header'),
		body = document.querySelector('body');

	burger.addEventListener('click', function() {
		burger.classList.toggle('activeBurger');
		header.classList.toggle('showMenu');
		menu.classList.toggle('showMenuBlock');
		body.classList.toggle('lock');
	});
	// burger

	let menu = document.querySelector('.header-nav'),
		menuBefore = document.querySelector('.header-container');

	window.addEventListener('resize', function() {
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		if (viewport_width <= 1012) {
			menuBefore.insertAdjacentElement('afterend', menu);
		}	
	});
});