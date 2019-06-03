window.onload =  () => {
  heightHeader();
  preloader();
  mmMenu();
  buttonUp();
  buttonHidden();
  initGallery();
  accordion();
  mainPageImages();
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
    }, 500)
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

const mainPageImages = () => {
  const greetTextBlock = document.querySelector('.greeting > span');
  const greetImgBlock = document.querySelector('.greeting > .img');
  if(greetImgBlock != null){
    greetImgBlock.style.minHeight = greetTextBlock.clientHeight + 'px';
  }
};

const buttonUp = () => {
  new Waypoint({
    element: document.querySelector('section.content'),
    handler: (direction) => {
      if(direction == 'up'){
        buttonHidden();
      }
      if(direction == 'down'){
        buttonVisible();
      }
    },
    offset: 20
  });

  const buttonEl = document.querySelector('.up');
  buttonEl.addEventListener('click', rollingUp);
};

const buttonHidden = () => {
  const buttonEl = document.querySelector('.up');
  buttonEl.style.transition = 'all 0.17s';
  buttonEl.style.opacity = 0;
};

const buttonVisible = () => {
  const buttonEl = document.querySelector('.up');
  buttonEl.style.transition = 'all 0.17s';
  buttonEl.style.opacity = 1;
};

const rollingUp = () => {
  const offsetTop = document.documentElement.scrollTop || document.body.scrollTop;
  if(offsetTop > 0){
    window.requestAnimationFrame(rollingUp);
    window.scrollTo(0, offsetTop - offsetTop / 8);
  }
};

const initGallery = () => {
  lightGallery(document.querySelector('.gallery'));
};


const accordion = () => {
  const accordions = document.querySelectorAll('.accordion');
  let i;
  for (i = 0; i < accordions.length; i++){
    let accHead = accordions[i].querySelector('.accordion-head');
    accHead.addEventListener('click', () => {
      accHead.nextElementSibling.classList.toggle('show');
    });
  }
};