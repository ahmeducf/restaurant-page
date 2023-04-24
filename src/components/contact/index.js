import './index.css';
import restaurantLocation from './assets/restaurant-location.png';

const Contact = () => {
  const container = document.createElement('div');
  container.classList.add('contact-container');

  const phone = document.createElement('div');
  phone.classList.add('phone');
  const phoneIcon = document.createElement('i');
  phoneIcon.classList.add('fas', 'fa-phone');
  const phoneText = document.createElement('p');
  phoneText.textContent = '123-456-7890';

  phone.appendChild(phoneIcon);
  phone.appendChild(phoneText);

  const address = document.createElement('div');
  address.classList.add('address');
  const addressIcon = document.createElement('i');
  addressIcon.classList.add('fas', 'fa-map-marker-alt');
  const addressText = document.createElement('p');
  addressText.textContent = '123 Main St, New York, NY 10001';
  const addressImg = document.createElement('img');
  addressImg.src = restaurantLocation;

  address.appendChild(addressIcon);
  address.appendChild(addressText);
  address.appendChild(addressImg);

  container.appendChild(phone);
  container.appendChild(address);

  return container;
};

export default Contact;
