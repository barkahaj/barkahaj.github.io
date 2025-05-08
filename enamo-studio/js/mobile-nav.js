let mobileMenuToggle = document.getElementById('mobile-menu-toggle');
let headerMobileNav = document.getElementById('header-mobile-nav');
let menuIcon = document.getElementById('mobile-menu-icon')

let isChangeColor = false;

let changeBackground = () => {
    if(isChangeColor) {
        headerMobileNav.style.display = 'none';
        menuIcon.src = './img/humberger-menu-icon.png';
    } else {
        headerMobileNav.style.display = 'inline-block';
        menuIcon.src = './img/close-menu-icon.png';
    }

    isChangeColor = !isChangeColor;
}

mobileMenuToggle.addEventListener('click', changeBackground)

