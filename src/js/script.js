const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

//procent counter

const parrent = document.querySelectorAll('.progress__item-counter'),
      lines = document.querySelectorAll('.progress__item-line span');

parrent.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
}) 

