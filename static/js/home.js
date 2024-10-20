let isShrunk = false;  // Track whether the navbar is shrunk
let debounceTimer;      // Debounce timer

// Scroll event listener with debouncing
window.addEventListener('scroll', () => {
    clearTimeout(debounceTimer); // Clear any existing debounce timer

    debounceTimer = setTimeout(() => {
        const navbar = document.querySelector('.navbar');
        const scrollPosition = window.scrollY;  // Get the current scroll position

        if (scrollPosition > 100 && !isShrunk) {
            navbar.classList.add('shrink');  // Add 'shrink' class
            isShrunk = true;  // Update state to shrunk
        } else if (scrollPosition <= 87 && isShrunk) {
            navbar.classList.remove('shrink');  // Remove 'shrink' class
            isShrunk = false;  // Update state to non-shrunk
        }
    }, 35);  // Debounce delay (

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const parallaxImage = document.querySelector('.parallax-wrapper img');
    
        // Adjust the translateY value based on scroll
        parallaxImage.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    });

});
