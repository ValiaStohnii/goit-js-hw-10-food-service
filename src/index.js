import menuTpl from './templates/menu.hbs'
import menu from './menu.json';
import './sass/main.scss';



const menuList = document.querySelector('.js-menu');

const cardsMenu = createMenu(menu);

menuList.insertAdjacentHTML('beforeend', cardsMenu);

function createMenu(menu) {
  return menu.map(menuTpl).join(''); 
}