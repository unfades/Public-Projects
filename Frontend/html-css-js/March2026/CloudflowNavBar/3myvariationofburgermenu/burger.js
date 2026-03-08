let burgerMenu = document.querySelector('.burger');

const hidemenu = document.querySelector('.burgerlist');

burgerMenu.addEventListener('click', () =>{
  hidemenu.classList.toggle('burgerhide');
});