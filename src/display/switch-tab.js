const switchTab = (content) => {
  const main = document.querySelector('main');
  main.innerHTML = '';
  main.appendChild(content);
};

export default switchTab;
