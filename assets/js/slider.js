class Slider {
    constructor() {

        /**
         * The first element of array {Zero element} is skipped.
         * Only work with elements from 1 to 5.
         * @type {boolean[]}
         */
        this.whichSliderIsShowSectionI = Array(false, true, true, false, false, false);

        this.sliderOneSectionI = document.getElementById('slider-one-section-I');
        this.sliderTwoSectionI = document.getElementById('slider-two-section-I');
        this.sliderThreeSectionI = document.getElementById('slider-three-section-I');
        this.sliderFourSectionI = document.getElementById('slider-four-section-I');
        this.sliderFiveSectionI = document.getElementById('slider-five-section-I');
    }

    showSlider(slider, numberSlider) {
        slider.classList.add('d-block');
        slider.classList.remove('d-none');

        this.whichSliderIsShowSectionI[numberSlider] = true;
    }

    hiddenSlider(slider, numberSlider) {
        slider.classList.remove('d-block');
        slider.classList.add('d-none');

        this.whichSliderIsShowSectionI[numberSlider] = false;
    }

    nextSliderSectionI() {
        if (this.whichSliderIsShowSectionI[1] && this.whichSliderIsShowSectionI[2]) {
            // Hidden the slider 1
            // Slider two without change
            // Show the slider 3

            this.hiddenSlider(this.sliderOneSectionI, 1);
            this.showSlider(this.sliderThreeSectionI, 3);
        } else if (this.whichSliderIsShowSectionI[2] && this.whichSliderIsShowSectionI[3]) {

        } else if (this.whichSliderIsShowSectionI[3] && this.whichSliderIsShowSectionI[4]) {

        } else if (this.whichSliderIsShowSectionI[4] && this.whichSliderIsShowSectionI[5]) {

        } else if (this.whichSliderIsShowSectionI[5] && this.whichSliderIsShowSectionI[1]) {

        }
    }
}

let sliders = new Slider();

function nextSliderSectionI() {
    sliders.nextSliderSectionI();
}