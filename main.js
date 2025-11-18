'use sctrict';

const toggleBtn = document.querySelector('.toggle-btn');
const cards = document.querySelectorAll('.dragons__card');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

cards.forEach((card) => {
  const soundSrc = card.dataset.sound;
  const audio = new Audio(soundSrc);

  card.addEventListener('mouseenter', () => {
    audio.currentTime = 0;
    audio.play();
  });
});