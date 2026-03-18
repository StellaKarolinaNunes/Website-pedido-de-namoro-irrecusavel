import { createHearts } from './modules/hearts.js';
import { openPopup, closePopup, setupPopupListeners } from './modules/popup.js';

window.closePopup = closePopup;

document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    createHearts();
    setupPopupListeners();

    if (yesBtn) {
        yesBtn.addEventListener('click', () => {
            window.location.href = 'teamo.html';
        });
    }

    if (noBtn) {
        noBtn.addEventListener('mouseover', () => {
            const width = noBtn.clientWidth;
            const height = noBtn.clientHeight;
            const maxX = window.innerWidth - width;
            const maxY = window.innerHeight - height;

            const randomX = Math.max(20, Math.min(maxX - 20, Math.random() * maxX));
            const randomY = Math.max(20, Math.min(maxY - 20, Math.random() * maxY));

            noBtn.style.position = 'fixed';
            noBtn.style.left = `${randomX}px`;
            noBtn.style.top = `${randomY}px`;
            noBtn.style.zIndex = '1000';
        });

        noBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openPopup();
        });
    }
});
