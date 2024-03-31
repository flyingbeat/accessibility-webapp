/**
 * Open the current clicked menu and close the other menus
 * @param {object} event - The DOM event
 */
function openMenu(event) {
    event.stopPropagation();
    event.preventDefault();

    var currentDropDownButton = event.target;
    var currentDropDownMenu =
        currentDropDownButton.parentNode.querySelector('.dropdown-menu');
    var currentDropDownToggle =
        currentDropDownButton.parentNode.querySelector('.dropdown-toggle');
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-toggle');
    var isOpen = currentDropDownMenu.classList.contains('show');
    var dropDownMenus =
        document.querySelectorAll('#nav-bar-content .dropdown .dropdown-menu');
    for (var j = 0; j < dropDownMenus.length; j++) {
        dropDownMenus[j].classList.remove('show');
    }
    for (var j = 0; j < dropDownToggles.length; j++) {
        dropDownToggles[j].setAttribute('aria-expanded', 'false')
    }

    if (!isOpen) {
        currentDropDownMenu.classList.add('show');
        currentDropDownToggle.setAttribute('aria-expanded', 'true')
    } else {
        currentDropDownToggle.setAttribute('aria-expanded', 'false')
    }
}

/**
 * Toggle the navigation content
 * @param {object} event - The DOM event
 */
function toggleNavigation(event) {
    event.stopPropagation();
    event.preventDefault();

    var content = document.getElementById('nav-bar-content');
    if (content.classList.contains('collapse')) {
        content.classList.remove('collapse');
    } else {
        content.classList.add('collapse');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dropDownToggles =
        document.querySelectorAll('#nav-bar-content .dropdown-toggle');

        for (var i = 0; i < dropDownToggles.length; i++) {
            dropDownToggles[i].addEventListener('click', openMenu, false);
            dropDownToggles[i].addEventListener('keydown', function(event) {
                // Check if the pressed key is the space bar
                if (event.key === ' ' || event.keyCode === 32) {
                    // Prevent the default action
                    event.preventDefault();
                    // Open the dropdown menu
                    openMenu(event);
                }
            });
    }

    document.querySelector('.navbar-toggler')
        .addEventListener('click', toggleNavigation, false);

    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is the escape key
        if (event.key === 'Escape' || event.keyCode === 27) {
            // Close the dropdown if it's open
            var openDropdownMenu = document.querySelector('.dropdown-menu.show');
            if (openDropdownMenu) {
                openDropdownMenu.classList.remove('show');
                var openDropdownToggle = openDropdownMenu.parentNode.querySelector('.dropdown-toggle');
                openDropdownToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
}, false);



//In-/Decrease font size

function increaseFont(event) {
    event.stopPropagation();
    event.preventDefault();
     // font size of root element
    let rootFontSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'));
    rootFontSize += 4;
    document.documentElement.style.fontSize = rootFontSize + 'px';
}

function decreaseFont(event) {
    event.stopPropagation();
    event.preventDefault();
     // font size of root element
    let rootFontSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('font-size'));
    rootFontSize -= 4;
    document.documentElement.style.fontSize = rootFontSize + 'px';
}

document.addEventListener('DOMContentLoaded', function() {
    document
        .getElementById('font-increase-button')
        .addEventListener('click', increaseFont, false);

    document
        .getElementById('font-decrease-button')
        .addEventListener('click', decreaseFont, false);

    document
        .getElementById('font-increase-button-1')
        .addEventListener('click', increaseFont, false);

    document
        .getElementById('font-decrease-button-1')
        .addEventListener('click', decreaseFont, false);
}, false);