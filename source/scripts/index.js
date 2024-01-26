/* в этот файл добавляет скрипты*/

// НАВИГАЦИЯ ШАПКИ(mobile burger menu)
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.button-toogle');
const navList = document.querySelector('.main-nav__list');
const mapReverse = document.querySelector('.map__reserve');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('button-toogle--nojs');
navList.classList.remove('main-nav__list--nojs');
mapReverse.classList.remove('map__reserve--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
