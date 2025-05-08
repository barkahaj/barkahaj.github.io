let dropDown = document.getElementById('mobile-dropdown');
let megaMenuMobile = document.getElementById('mega-menu-dropdown');
let chevronMenu = document.getElementById('chevron-menu-mobile');

let isMenuOpen = false;

let openMenu = () => {
    if(isMenuOpen) {
        megaMenuMobile.style.display = 'none';
        chevronMenu.style.transform = 'rotate(0deg)';
    } else {
        megaMenuMobile.style.display = 'block';
        chevronMenu.style.transform = 'rotate(180deg)';
    }

    isMenuOpen = !isMenuOpen
}

dropDown.addEventListener('click', openMenu)

let dropDownService = document.getElementById('mobile-dropdown-service');
let megaMenuMobileService = document.getElementById('mega-menu-dropdown-service');
let chevronMenuService = document.getElementById('chevron-menu-mobile-service');

isMenuOpenService = false;

let openMenuService = () => {
    if(isMenuOpenService) {
        megaMenuMobileService.style.display = 'none';
        chevronMenuService.style.transform = 'rotate(0deg)';
    } else {
        megaMenuMobileService.style.display = 'block';
        chevronMenuService.style.transform = 'rotate(180deg)';
    }

    isMenuOpenService = !isMenuOpenService
}

dropDownService.addEventListener('click', openMenuService)