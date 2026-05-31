function toggleMenu() {
    document.querySelector('.nav-links')
        .classList.toggle('active');
}

function handleScroll() {
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        if (window.scrollY > 200) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
}

window.addEventListener('scroll', handleScroll);
// Run immediately on load in case the page starts scrolled down
handleScroll();
