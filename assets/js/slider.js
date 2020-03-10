class Slider {
    constructor() {
        this.slider = document.getElementById('slider-three-section-I');
    }

    showSlider() {
        this.slider.classList.add('d-block');
        this.slider.classList.remove('d-none');
    }

    hiddenSlider() {
        this.slider.classList.remove('d-block');
        this.slider.classList.add('d-none');
    }
}

let sliders = new Slider();

function nextSlider() {
    sliders.showSlider();
}