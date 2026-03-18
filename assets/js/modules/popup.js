export function openPopup() {
    const noPopup = document.getElementById('noPopup');
    if (noPopup) noPopup.classList.add('active');
}

export function closePopup() {
    const noPopup = document.getElementById('noPopup');
    if (noPopup) noPopup.classList.remove('active');
}

export function setupPopupListeners() {
    const noPopup = document.getElementById('noPopup');
    if (noPopup) {
        noPopup.addEventListener('click', (e) => {
            if (e.target === noPopup) closePopup();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePopup();
    });
}
