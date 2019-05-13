window.onload =  () => {
  heightHeader();
  preloader();
  mmMenu();
};
window.onresize = () => {
  heightHeader();
  preloader();
};

const heightHeader = () => {
  const navEl = document.querySelector('nav.nav');
  const navHeight = navEl.offsetHeight;
  
  const headerEl = document.querySelector('header.header');
  const windowHeight = document.body.clientHeight;

  headerEl.style.minHeight = (windowHeight - navHeight) + 'px';
};

const preloader = () => {
  const preloaderOverlay = document.querySelector('.preloader-overlay');

  if (!preloaderOverlay.classList.contains('hidden')){
    setTimeout(() => {
      preloaderOverlay.classList.add('hidden');
    }, 1000)
  }
};


const mmMenu = () => {
  const menu = mmlight(document.querySelector('.mm-menu'));
  menu.create();
  menu.init('selected');

  const mobileMenuButton = document.querySelector('.mobile-menu > li');
  mobileMenuButton.addEventListener('click', e => {
    menu.open();
    e.preventDefault();
    e.stopPropagation();
  });
};