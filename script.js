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