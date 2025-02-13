// script.js

// Custom cursor
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
    cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;
});

// Toggle menu visibility
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}
