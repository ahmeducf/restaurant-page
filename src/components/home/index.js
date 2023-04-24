import './index.css';
import chefIcon from './assets/chef.png';

const Home = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const p1 = document.createElement('p');
  p1.textContent = 'Best pizza in your country!';

  const p2 = document.createElement('p');
  p2.textContent = 'Made with passion since 1911.';

  const img = document.createElement('img');
  img.src = chefIcon;
  img.alt = 'Chef';

  const p3 = document.createElement('p');
  p3.textContent = 'Order online or visit us!';

  container.appendChild(p1);
  container.appendChild(p2);
  container.appendChild(img);
  container.appendChild(p3);

  return container;
};

export default Home;
