document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        carouselItems.forEach((item, index) => {
            item.classList.remove('active');
            if (index === currentIndex) {
                item.classList.add('active');
            }
        });

        // Disable prev button if the first item is active
        prevButton.disabled = currentIndex === 0;

        // Disable next button if the last item is active
        nextButton.disabled = currentIndex === carouselItems.length - 1;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Initial update to set the first item active and disable prev button
    updateCarousel();
});


var icon = document.getElementById('nav-icon');
var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');
var ul = document.getElementById('ul');
var dropdown = document.getElementById('dropdown')

icon.addEventListener('click', () => {
    icon.classList.toggle('fa-xmark');
    btn.classList.toggle('active')
    btn1.classList.toggle('active')
    ul.classList.toggle('active')
    dropdown.classList.toggle('active')
});
var content = document.getElementById('content')

var dropdown = document.getElementById('dropdown');

dropdown.addEventListener('click', () => {
   content.classList.toggle('active')
})

ScrollReveal({ 
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.content, .top-title', { origin: 'top'});
ScrollReveal().reveal('.category-card, .carousel-wrapper, .contact', { origin: 'bottom'});
ScrollReveal().reveal('.sel-card, .east-left, .left-side', { origin: 'left'});
ScrollReveal().reveal('.east-right, .navigation ', { origin: 'right'});