import './index.css';
import tabFirstLoad from './display/tab-first-load';
import setActiveButton from './display/set-active-button';
import Home from './components/home';
import Menu from './components/menu';
import Contact from './components/contact';

tabFirstLoad();

const main = document.querySelector('main');
const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

homeButton.addEventListener('click', () => {
  if (homeButton.classList.contains('active')) {
    return;
  }
  setActiveButton(homeButton);
  main.innerHTML = '';
  main.appendChild(Home());
});

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('active')) {
    return;
  }
  setActiveButton(menuButton);
  main.innerHTML = '';
  main.appendChild(Menu());
});

contactButton.addEventListener('click', () => {
  if (contactButton.classList.contains('active')) {
    return;
  }
  setActiveButton(contactButton);
  main.innerHTML = '';
  main.appendChild(Contact());
});
