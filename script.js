document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === index);
            dots[i].classList.toggle('active', i === index);
        });
    }

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            showItem(currentIndex);
        });
    });
});
