import './index.css';

const Nav = (args) => {
  const nav = document.createElement('nav');

  const navItems = document.createElement('ul');
  navItems.classList.add('nav-items');

  args.forEach((item) => {
    const navItem = document.createElement('li');

    const navButton = document.createElement('button');
    navButton.classList.add('nav-item');
    navButton.setAttribute('id', `${item.toLowerCase()}-button`);
    navButton.textContent = item;

    navItem.appendChild(navButton);
    navItems.appendChild(navItem);
  });

  nav.appendChild(navItems);

  return nav;
};

export default Nav;
