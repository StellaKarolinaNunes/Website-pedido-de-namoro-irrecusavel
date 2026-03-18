// Heart Particle Generator
function createHearts() {
  const container = document.getElementById('hearts-container');
  if (!container) return;

  const count = 12;

  for (let i = 0; i < count; i++) {
    createHeart(container);
  }

  setInterval(() => {
    createHeart(container);
  }, 1200);
}

function createHeart(container) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '❤️';

  const left = Math.random() * 100;
  const duration = 12 + Math.random() * 8;
  const delay = Math.random() * 5;
  const size = 0.5 + Math.random() * 0.8;

  heart.style.left = `${left}%`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.fontSize = `${size}rem`;

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, (duration + delay) * 1000);
}

// Global Popup Functions for clarity
window.openPopup = () => {
  const noPopup = document.getElementById('noPopup');
  if (noPopup) noPopup.classList.add('active');
};

window.closePopup = () => {
  const noPopup = document.getElementById('noPopup');
  if (noPopup) noPopup.classList.remove('active');
};

// Main DOM Content Loaded Logic
document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const noPopup = document.getElementById('noPopup');

  // Start heart animation
  createHearts();

  // Yes Button Action
  if (yesBtn) {
    yesBtn.addEventListener('click', () => {
      window.location.href = 'teamo.html';
    });
  }

  // Maybe/No Button Action (Fleeing and Popup)
  if (noBtn) {
    /*
    noBtn.addEventListener('mouseover', () => {
      const maxX = window.innerWidth - noBtn.clientWidth;
      const maxY = window.innerHeight - noBtn.clientHeight;

      const randomX = Math.max(20, Math.min(maxX - 20, Math.random() * maxX));
      const randomY = Math.max(20, Math.min(maxY - 20, Math.random() * maxY));

      noBtn.style.position = 'fixed';
      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
      noBtn.style.zIndex = '1000';
    });
    */

    noBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openPopup();
    });
  }

  // Close popup logic
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closePopup();
  });

  if (noPopup) {
    noPopup.addEventListener('click', (e) => {
      if (e.target === noPopup) window.closePopup();
    });
  }
});