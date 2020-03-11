class SliderProject {

    constructor() {

        /**
         * Begin to count from 1 (the element 0 is skipped).
         * @type {boolean[]}
         */
        this.whichSliderIsShow = Array(false, true, false, false);

        this.sliderOne = document.getElementById('slider-one-section-II');
        this.sliderTwo = document.getElementById('slider-two-section-II');
        this.sliderThree = document.getElementById('slider-three-section-II');
    }

    showSlider(slider, position) {
        slider.classList.replace('d-none', 'd-block');
        this.whichSliderIsShow[position] = true;
    }

    hiddenSlider(slider, position) {
        slider.classList.add('d-none');
        slider.classList.replace('d-block', 'd-none');
        this.whichSliderIsShow[position] = false;
    }

    nextSlider() {
        if (this.whichSliderIsShow[1] === true) {
            // Hidden Slider 1
            // Show Slider 2

            this.hiddenSlider(this.sliderOne, 1);
            this.showSlider(this.sliderTwo, 2);
        } else if (this.whichSliderIsShow[2] === true) {
            // Hidden Slider 2
            // Show Slider 3

            this.hiddenSlider(this.sliderTwo, 2);
            this.showSlider(this.sliderThree, 3);
        } else if (this.whichSliderIsShow[3] === true) {
            // Hidden Slider 3
            // Show Slider 1

            this.hiddenSlider(this.sliderThree, 3);
            this.showSlider(this.sliderOne, 1);
        }
    }
}

let slider = new SliderProject();

function nextSliderSectionII() {
    slider.nextSlider();
}