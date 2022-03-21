const primaryNavigation = document.querySelector('#primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');


navToggle.addEventListener('click',() => {
    primaryNavigation.classList.toggle('visible');
});