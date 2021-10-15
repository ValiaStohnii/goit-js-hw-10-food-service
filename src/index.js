import menuTpl from './templates/menu.hbs'
import menu from './menu.json';
import './sass/main.scss';



const menuList = document.querySelector('.js-menu');

const cardsMenu = createMenu(menu);

menuList.insertAdjacentHTML('beforeend', cardsMenu);

function createMenu(menu) {
  return menu.map(menuTpl).join(''); 
}


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
    body: document.querySelector('body'),
    themeSwitch: document.querySelector('#theme-switch-toggle'),
}

refs.themeSwitch.addEventListener('change', onThemeChange);

themeDontChange();

function onThemeChange() {
    refs.body.classList.toggle(Theme.DARK);

    if (refs.body.classList.contains(Theme.DARK)) {
        localStorage.setItem('theme', Theme.DARK)
        
    } else { localStorage.setItem('theme', Theme.LIGHT) };

}


function themeDontChange() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        refs.body.classList.add(savedTheme);
    };

    // refs.themeSwitch.checked = true;
    
}