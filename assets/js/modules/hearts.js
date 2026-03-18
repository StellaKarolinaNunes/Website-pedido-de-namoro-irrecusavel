export function createHearts() {
    const container = document.getElementById('hearts-container');
    if (!container) return;

    const count = 12;

    for (let i = 0; i < count; i++) {
        createOneHeart(container);
    }

    setInterval(() => {
        createOneHeart(container);
    }, 1200);
}

function createOneHeart(container) {
    const heart = document.createElement('div');
    heart.className = 'heart';

    const heartIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    heartIcon.setAttribute('viewBox', '0 0 24 24');
    heartIcon.setAttribute('fill', 'currentColor');
    heartIcon.style.width = '100%';
    heartIcon.style.height = '100%';
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z');
    heartIcon.appendChild(path);
    heart.appendChild(heartIcon);

    const left = Math.random() * 100;
    const duration = 12 + Math.random() * 8;
    const delay = Math.random() * 5;
    const size = 0.5 + Math.random() * 0.8;

    heart.style.left = `${left}%`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.animationDelay = `${delay}s`;
    heart.style.fontSize = `${size}rem`;
    heart.style.width = `${size * 20}px`;
    heart.style.height = `${size * 20}px`;

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (duration + delay) * 1000);
}
