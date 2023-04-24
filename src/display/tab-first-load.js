import Header from '../components/header';
import Home from '../components/home';
import Footer from '../components/footer';

const tabFirstLoad = () => {
  const body = document.querySelector('body');
  const main = document.createElement('main');
  main.classList.add('content');

  body.appendChild(Header());
  body.appendChild(main);
  body.appendChild(Footer());

  main.appendChild(Home());
};

export default tabFirstLoad;
