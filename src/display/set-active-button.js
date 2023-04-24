const setActiveButton = (button) => {
  const buttons = document.querySelectorAll('.nav-item');
  buttons.forEach((item) => {
    item.classList.remove('active');
  });
  button.classList.add('active');
};

export default setActiveButton;
