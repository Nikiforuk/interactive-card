'use strict';

const toggleBtn = document.querySelector('.toggle-btn');
const cardsContainer = document.querySelector('.dragons');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

cardsContainer.addEventListener('click', (e) => {
  const card = e.target.closest('.dragons__card');
  if (!card) return;

  const soundSrc = card.dataset.sound;
  const audio = new Audio(soundSrc);
  audio.currentTime = 0;
  audio.play().catch(() => {});

  card.classList.toggle('flipped');
});
