document.addEventListener('DOMContentLoaded', function () {
    // Define variables
    let mainMenu = document.getElementById('main-menu');
    let menuImage = document.getElementById('menu-image');
    let menuIcon = document.getElementById('menu-icon');
    let menuLinks = mainMenu.querySelectorAll('a');
    let homeLink = document.getElementById('home-link');

    // Function to toggle menu visibility
    function toggleMenuVisibility() {
        let isMenuVisible = mainMenu.style.display === 'block';
        mainMenu.style.display = isMenuVisible ? 'none' : 'block';
    }

    // Function to toggle menu icon between open and close
    function toggleMenuIcon() {
        let currentSrc = menuIcon.getAttribute('src');
        menuIcon.setAttribute('src', currentSrc.includes('menu.svg') ? '/src/assets/img/close.svg' : '/src/assets/img/menu.svg');
    }

    // On click of the menu image
    menuImage.addEventListener('click', function () {
        toggleMenuVisibility();
        toggleMenuIcon();
    });

    // Add event handlers to each link for active class and menu closing
    menuLinks.forEach((link) => {
        link.addEventListener('click', function () {
            menuLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            // Close the menu and reset icon when any menu link is clicked
            if (mainMenu.style.display === 'block') {
                toggleMenuVisibility();
                toggleMenuIcon();
            }
        });
    });

    // Event listener for the header link to update active state
    homeLink.addEventListener('click', function () {
        menuLinks.forEach(link => link.classList.remove('active'));
        // Assuming the first link in your menu is the home link
        menuLinks[0].classList.add('active');
        // Close the menu and reset icon if menu is open
        if (mainMenu.style.display === 'block') {
            toggleMenuVisibility();
            toggleMenuIcon();
        }
    });

    // Initial value of the display property
    mainMenu.style.display = 'none';
});
