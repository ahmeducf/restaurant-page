import './index.css';
import carneImg from './assets/carne.png';
import coloratoImg from './assets/colorato.png';
import cremaImg from './assets/crema.png';
import disgustosoImg from './assets/disgustoso.png';
import gamberiImg from './assets/gamberi.png';
import pepeImg from './assets/pepe.png';
import pomodoroImg from './assets/pomodoro.png';
import salsicciaImg from './assets/salsiccia.png';

const menu = [
  {
    name: 'Pomodoro',
    ingredients: 'Pomodoro, mozzarella, basilico',
    img: pomodoroImg,
  },
  {
    name: 'Carne',
    ingredients: 'Carne, mozzarella, origano',
    img: carneImg,
  },
  {
    name: 'Salsiccia',
    ingredients: 'Salsiccia, mozzarella, peperoni',
    img: salsicciaImg,
  },
  {
    name: 'Gamberi',
    ingredients: 'Gamberi, mozzarella, aglio',
    img: gamberiImg,
  },
  {
    name: 'Pepe',
    ingredients: 'Pepe, mozzarella, peperoni',
    img: pepeImg,
  },
  {
    name: 'Colorato',
    ingredients: 'Pomodoro, mozzarella, peperoni, gamberi, salsiccia',
    img: coloratoImg,
  },
  {
    name: 'Crema',
    ingredients: 'Panna, mozzarella, peperoni',
    img: cremaImg,
  },
  {
    name: 'Disgustoso',
    ingredients: 'Pomodoro, mozzarella, peperoni, salsiccia, aglio',
    img: disgustosoImg,
  },
];

const createMenuItem = (pizza) => {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const img = document.createElement('img');
  img.src = pizza.img;
  img.alt = pizza.name;
  menuItem.appendChild(img);

  const name = document.createElement('h3');
  name.textContent = pizza.name;
  menuItem.appendChild(name);

  const ingredients = document.createElement('p');
  ingredients.textContent = pizza.ingredients;
  menuItem.appendChild(ingredients);

  return menuItem;
};

const Menu = () => {
  const container = document.createElement('div');
  container.classList.add('menu-container');

  menu.forEach((pizza) => {
    const menuItem = createMenuItem(pizza);

    container.appendChild(menuItem);
  });

  return container;
};

export default Menu;
