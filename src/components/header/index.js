import './index.css';
import Nav from './nav';

const Header = () => {
  const header = document.createElement('header');
  const container = document.createElement('div');

  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'Mozzafiato';

  const nav = Nav(['Home', 'Menu', 'Contact']);

  container.appendChild(restaurantName);
  container.appendChild(nav);
  header.appendChild(container);

  return header;
};

export default Header;
