const mobileNav = document.getElementById('mobile__nav'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close-mobile');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        mobileNav.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        mobileNav.classList.remove('show-menu');
    });
}

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
        : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('scroll-up')
        : scrollUp.classList.remove('scroll-up')
}
window.addEventListener('scroll', scrollUp)

const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link');
        } else {
            sectionClass.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);
