import Header from '../components/header';
import Home from '../components/home';
import Footer from '../components/footer';

const tabFirstLoad = () => {
  const body = document.querySelector('body');
  body.appendChild(Header());
  body.appendChild(Home());
  body.appendChild(Footer());
};

export default tabFirstLoad;
