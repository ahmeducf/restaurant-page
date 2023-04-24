import './index.css';

const Footer = () => {
  const footer = document.createElement('footer');

  const container = document.createElement('div');
  container.classList.add('container');

  const p = document.createElement('p');
  p.textContent = `Copyright © ${new Date().getFullYear()} Ahmed Salah`;

  const a = document.createElement('a');
  a.href = 'https://github.com/ahmeducf';
  a.target = '_blank';

  const githubIcon = document.createElement('i');
  githubIcon.classList.add('fab', 'fa-github');

  a.appendChild(githubIcon);
  container.appendChild(p);
  container.appendChild(a);
  footer.appendChild(container);

  return footer;
};

export default Footer;
