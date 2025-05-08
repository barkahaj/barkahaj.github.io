const menuProduct = document.getElementById('menu-product');
const menuServices = document.getElementById('menu-services');
const megaMenuProduct = document.getElementById('mega-menu-product');
const megaMenuServices = document.getElementById('mega-menu-services');

const chevronProduct = document.getElementById('chevron-product');
const chevronServices = document.getElementById('chevron-services');

const toggleMenu = (showMenu, hideMenu, activeChevron, inactiveChevron) => {
  const isVisible = showMenu.style.display === 'block';

  if (isVisible) {
    showMenu.style.display = 'none';
    activeChevron.classList.remove('rotate-180');
  } else {
    showMenu.style.display = 'block';
    activeChevron.classList.add('rotate-180');
  }

  hideMenu.style.display = 'none';
  inactiveChevron.classList.remove('rotate-180');
};

menuProduct.addEventListener('click', () => {
  toggleMenu(megaMenuProduct, megaMenuServices, chevronProduct, chevronServices);
});

menuServices.addEventListener('click', () => {
  toggleMenu(megaMenuServices, megaMenuProduct, chevronServices, chevronProduct);
});
