const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


left.addEventListener('mouseenter', () => {
  container.classList.add('move-left');
});

left.addEventListener('mouseleave', () => {
  container.classList.remove('move-left');
})

right.addEventListener('mouseenter', () => {
  container.classList.add('move-right');
});

right.addEventListener('mouseleave', () => {
  container.classList.remove('move-right');
})