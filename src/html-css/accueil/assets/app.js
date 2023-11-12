let index = 0;
function changeSlide() {
    let slides = document.getElementsByClassName('slide');

    for (let slide of slides) {
        slide.classList.remove('show');
    }

    index++;
    if (index > slides.length) {
        index = 1;
    }

    slides[index - 1].classList.add('show');

    setTimeout(changeSlide, 3000); // Change every 5 seconds
}

changeSlide();
