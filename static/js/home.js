let isShrunk = false;
let debounceTimer;

window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer); // Clear the previous timer

    debounceTimer = setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100 && !isShrunk) {
            navbar.classList.add('shrink');
            isShrunk = true;
        } else if (scrollPosition < 80 && isShrunk) {
            navbar.classList.remove('shrink');
            isShrunk = false;
        }
    }, 50); // Wait 50ms before toggling again
});