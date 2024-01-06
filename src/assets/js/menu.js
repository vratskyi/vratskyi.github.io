document.addEventListener('astro:page-load', () => {
	document.addEventListener('DOMContentLoaded', function () {
		// Определение переменных
		let mainMenu = document.getElementById('main-menu');
		let menuImage = document.getElementById('menu-image');
		let menuIcon = document.getElementById('menu-icon');
		let menuLinks = mainMenu.querySelectorAll('a');

		// При клике на картинку меню
		menuImage.addEventListener('click', function () {
			// Проверка видимости меню
			let isMenuVisible = mainMenu.style.display === 'block';

			// Изменение видимости меню
			mainMenu.style.display = isMenuVisible ? 'none' : 'block';

			// Проверка текущего значения атрибута src
			let currentSrc = menuIcon.getAttribute('src');
			let newSrc = '';

			// Определение нового значения атрибута src
			if (currentSrc === '/src/assets/img/menu.svg') {
				newSrc = '/src/assets/img/close.svg';
			} else {
				newSrc = '/src/assets/img/menu.svg';
			}

			// Изменение значения атрибута src
			menuIcon.setAttribute('src', newSrc);
		});

		// Получаем ссылки в меню

		// Добавляем обработчик событий на каждую ссылку
		menuLinks.forEach((link) => {
			link.addEventListener('click', function (event) {
				// Удаляем класс active у всех ссылок
				menuLinks.forEach((link) => {
					link.classList.remove('active');
				});
				// Добавляем класс active к ссылке, по которой кликнули
				this.classList.add('active');
			});
		});

		// Закрыть меню при клике на ссылку
		menuLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				isMenuVisible = 'none';
				// Проверка текущего значения атрибута src
				let currentSrc = menuIcon.getAttribute('src');
				let newSrc = '';

				// Определение нового значения атрибута src
				if (currentSrc === '/img/menu.svg') {
					newSrc = '/src/assets/img/close.svg';
				} else {
					newSrc = '/src/assets/img/menu.svg';
				}
			});
		});

		// Начальное значение свойства display
		mainMenu.style.display = 'none';
	});
});
