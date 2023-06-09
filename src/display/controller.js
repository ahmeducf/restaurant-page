import Home from '../components/home';
import Menu from '../components/menu';
import Contact from '../components/contact';
import Header from '../components/header';
import Footer from '../components/footer';

const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.nav-item');
  buttons.forEach((item) => {
    item.classList.remove('active');
  });
  button.classList.add('active');
};

const loadDisplay = () => {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  main.classList.add('content');

  body.appendChild(Header());
  body.appendChild(main);
  body.appendChild(Footer());

  main.appendChild(Home());

  setActiveButton(document.getElementById('home-button'));
};

const switchTabTo = (tab) => {
  const main = document.querySelector('main');

  main.innerHTML = '';
  main.appendChild(tab);
};

const init = () => {
  const main = document.querySelector('main');
  const homeButton = document.getElementById('home-button');
  const menuButton = document.getElementById('menu-button');
  const contactButton = document.getElementById('contact-button');

  homeButton.addEventListener('click', () => {
    if (homeButton.classList.contains('active')) {
      return;
    }
    setActiveButton(homeButton);
    switchTabTo(Home());
  });

  menuButton.addEventListener('click', () => {
    if (menuButton.classList.contains('active')) {
      return;
    }
    setActiveButton(menuButton);
    switchTabTo(Menu());
  });

  contactButton.addEventListener('click', () => {
    if (contactButton.classList.contains('active')) {
      return;
    }
    setActiveButton(contactButton);
    switchTabTo(Contact());
  });
};

export default { init, loadDisplay };
