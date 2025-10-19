document.addEventListener('DOMContentLoaded', () => {
  const spoofButton = document.querySelector('.card.recommended');
  const cleanButton = document.querySelector('.card:not(.recommended)');
  const homeButton = document.querySelector('nav a.active');
  const productsButton = document.querySelector('nav a:nth-child(2)');
  const supportButton = document.querySelector('nav a:nth-child(3)');
  const settingsButton = document.querySelector('nav a:nth-child(4)');

  spoofButton.addEventListener('click', () => {
    alert('Natural Spoof button clicked!');
  });

  cleanButton.addEventListener('click', () => {
    alert('Super Clean button clicked!');
  });

  homeButton.addEventListener('click', () => {
    alert('Home button clicked!');
  });

  productsButton.addEventListener('click', () => {
    alert('Products button clicked!');
  });

  supportButton.addEventListener('click', () => {
    alert('Support button clicked!');
  });

  settingsButton.addEventListener('click', () => {
    alert('Settings button clicked!');
  });
});
