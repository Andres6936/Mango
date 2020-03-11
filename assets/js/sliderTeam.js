class SliderTeam {
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
        slider.classList.replace('d-none', 'd-block');

        this.whichSliderIsShowSectionI[numberSlider] = true;
    }

    hiddenSlider(slider, numberSlider) {
        slider.classList.add('d-none');
        slider.classList.replace('d-block', 'd-none');

        this.whichSliderIsShowSectionI[numberSlider] = false;
    }

    nextSliderSectionI() {
        if (this.whichSliderIsShowSectionI[1] && this.whichSliderIsShowSectionI[2]) {
            // Hidden the slider 1
            // Slider 2 without change
            // Show the slider 3

            this.hiddenSlider(this.sliderOneSectionI, 1);
            this.showSlider(this.sliderThreeSectionI, 3);
        } else if (this.whichSliderIsShowSectionI[2] && this.whichSliderIsShowSectionI[3]) {
            // Hidden the slider 2
            // Slider 3 without change
            // Show the slider 4

            this.hiddenSlider(this.sliderTwoSectionI, 2);
            this.showSlider(this.sliderFourSectionI, 4);
        } else if (this.whichSliderIsShowSectionI[3] && this.whichSliderIsShowSectionI[4]) {
            // Hidden the slider 3
            // Slider 4 without change
            // Show the slider 5

            this.hiddenSlider(this.sliderThreeSectionI, 3);
            this.showSlider(this.sliderFiveSectionI, 5);
        } else if (this.whichSliderIsShowSectionI[4] && this.whichSliderIsShowSectionI[5]) {
            // Hidden the slider 4
            // Slider 5 without change
            // Show the slider 1

            this.hiddenSlider(this.sliderFourSectionI, 4);
            this.showSlider(this.sliderOneSectionI, 1);
        } else if (this.whichSliderIsShowSectionI[5] && this.whichSliderIsShowSectionI[1]) {
            // Hidden the slider 5
            // Slider 1 without change
            // Show the slider 2

            this.hiddenSlider(this.sliderFiveSectionI, 5);
            this.showSlider(this.sliderTwoSectionI, 2);
        }
    }
}

let sliders = new SliderTeam();

function nextSliderSectionI() {
    sliders.nextSliderSectionI();
}