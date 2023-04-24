import './index.css';

const Nav = (args) => {
  const nav = document.createElement('nav');
  const navItems = document.createElement('ul');

  args.forEach((item) => {
    const navItem = document.createElement('li');
    const navButton = document.createElement('button');
    navButton.textContent = item;
    navItem.appendChild(navButton);
    navItems.appendChild(navItem);
  });

  nav.appendChild(navItems);

  return nav;
};

export default Nav;
