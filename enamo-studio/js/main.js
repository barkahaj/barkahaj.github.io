const menuProduct = document.getElementById('menu-product');
const menuServices = document.getElementById('menu-services');
const megaMenuProduct = document.getElementById('mega-menu-product');
const megaMenuServices = document.getElementById('mega-menu-services');

const toggleMenu = (showMenu, hideMenu) => {
  const isVisible = showMenu.style.display === 'block';

if (isVisible) {
  showMenu.style.display = 'none';
} else {
  showMenu.style.display = 'block';
}

  hideMenu.style.display = 'none';
};

menuProduct.addEventListener('click', () => {
  toggleMenu(megaMenuProduct, megaMenuServices);
});

menuServices.addEventListener('click', () => {
  toggleMenu(megaMenuServices, megaMenuProduct);
});