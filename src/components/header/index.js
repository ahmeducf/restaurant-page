import './index.css';
import Nav from './nav';

const Header = () => {
  const header = document.createElement('header');

  const container = document.createElement('div');
  container.classList.add('container');

  const restaurantName = document.createElement('h1');
  restaurantName.classList.add('restaurant-name');
  restaurantName.textContent = 'Mozzafiato';

  const nav = Nav(['Home', 'Menu', 'Contact']);

  container.appendChild(restaurantName);
  container.appendChild(nav);
  header.appendChild(container);

  return header;
};

export default Header;
