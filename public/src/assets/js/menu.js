document.addEventListener('DOMContentLoaded', function () {
	// Define variables
	let mainMenu = document.getElementById('main-menu');
	let menuImage = document.getElementById('menu-image');
	let menuIcon = document.getElementById('menu-icon');
	let menuLinks = mainMenu.querySelectorAll('a');

	// On clicking the menu image
	menuImage.addEventListener('click', function () {
		// Check the visibility of the menu
		let isMenuVisible = mainMenu.style.display === 'block';

		// Change the visibility of the menu
		mainMenu.style.display = isMenuVisible ? 'none' : 'block';

		// Check the current value of the src attribute
		let currentSrc = menuIcon.getAttribute('src');
		let newSrc = '';

		// Determine the new value of the src attribute
		if (currentSrc === '/src/assets/img/menu.svg') {
			newSrc = '/src/assets/img/close.svg';
		} else {
			newSrc = '/src/assets/img/menu.svg';
		}

		// Change the value of the src attribute
		menuIcon.setAttribute('src', newSrc);
	});

    // Get links in the menu

    // Add an event handler to each link
	menuLinks.forEach((link) => {
		link.addEventListener('click', function (event) {
			// Remove the active class from all links
			menuLinks.forEach((link) => {
				link.classList.remove('active');
			});
			// Add the active class to the link that was clicked
			this.classList.add('active');
		});
	});

	// Close the menu when clicking on a link
	menuLinks.forEach(function (link) {
		link.addEventListener('click', function () {
			isMenuVisible = 'none';
			// Check the current value of the src attribute
			let currentSrc = menuIcon.getAttribute('src');
			let newSrc = '';

			// Determine the new value of the src attribute
			if (currentSrc === '/img/menu.svg') {
				newSrc = '/src/assets/img/close.svg';
			} else {
				newSrc = '/src/assets/img/menu.svg';
			}
		});
	});

	// Initial value of the display property
	mainMenu.style.display = 'none';
});
