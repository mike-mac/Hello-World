document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('exploreButton');
    const modal = document.getElementById('modal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementsByClassName('close')[0];

    exploreButton.addEventListener('click', () => {
        window.location.href = '#about';
    });

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});