class SliderTeam {
    constructor() {

        /**
         * The first element of array {Zero element} is skipped.
         * Only work with elements from 1 to 5.
         * @type {boolean[]}
         */
        this.whichSliderIsShowSectionI = Array(false, true, true, false, false, false);

        this.sliderOne = document.getElementById('slider-one-section-I');
        this.sliderTwo = document.getElementById('slider-two-section-I');
        this.sliderThree = document.getElementById('slider-three-section-I');
        this.sliderFour = document.getElementById('slider-four-section-I');
        this.sliderFive = document.getElementById('slider-five-section-I');
    }

    showSlider(slider, numberSlider) {
        slider.classList.replace('d-sm-none', 'd-xs-block');

        this.whichSliderIsShowSectionI[numberSlider] = true;
    }

    hiddenSlider(slider, numberSlider) {
        slider.classList.add('d-sm-none');
        slider.classList.replace('d-xs-block', 'd-sm-none');

        this.whichSliderIsShowSectionI[numberSlider] = false;
    }

    nextSliderSectionI() {
        if (this.whichSliderIsShowSectionI[1] && this.whichSliderIsShowSectionI[2]) {
            // Hidden the slider 1
            // Slider 2 without change
            // Show the slider 3

            this.hiddenSlider(this.sliderOne, 1);
            this.showSlider(this.sliderThree, 3);
        } else if (this.whichSliderIsShowSectionI[2] && this.whichSliderIsShowSectionI[3]) {
            // Hidden the slider 2
            // Slider 3 without change
            // Show the slider 4

            this.hiddenSlider(this.sliderTwo, 2);
            this.showSlider(this.sliderFour, 4);
        } else if (this.whichSliderIsShowSectionI[3] && this.whichSliderIsShowSectionI[4]) {
            // Hidden the slider 3
            // Slider 4 without change
            // Show the slider 5

            this.hiddenSlider(this.sliderThree, 3);
            this.showSlider(this.sliderFive, 5);
        } else if (this.whichSliderIsShowSectionI[4] && this.whichSliderIsShowSectionI[5]) {
            // Hidden the slider 4
            // Slider 5 without change
            // Show the slider 1

            this.hiddenSlider(this.sliderFour, 4);
            this.showSlider(this.sliderOne, 1);
        } else if (this.whichSliderIsShowSectionI[5] && this.whichSliderIsShowSectionI[1]) {
            // Hidden the slider 5
            // Slider 1 without change
            // Show the slider 2

            this.hiddenSlider(this.sliderFive, 5);
            this.showSlider(this.sliderTwo, 2);
        }
    }

    prevSlider() {
        if (this.whichSliderIsShowSectionI[1] && this.whichSliderIsShowSectionI[2]) {
            // Hidden slider 2
            // Slider 1 without change
            // Show slider 5

            this.hiddenSlider(this.sliderTwo, 2);
            this.showSlider(this.sliderFive, 5);
        } else if (this.whichSliderIsShowSectionI[5] && this.whichSliderIsShowSectionI[1]) {
            // Hidden slider 1
            // Slider 5 without change
            // Show slider 4

            this.hiddenSlider(this.sliderOne, 1);
            this.showSlider(this.sliderFour, 4);
        } else if (this.whichSliderIsShowSectionI[4] && this.whichSliderIsShowSectionI[5]) {
            // Hidden slider 5
            // Slider 4 without change
            // Show slider 3

            this.hiddenSlider(this.sliderFive, 5);
            this.showSlider(this.sliderThree, 3);
        } else if (this.whichSliderIsShowSectionI[3] && this.whichSliderIsShowSectionI[4]) {
            // Hidden slider 4
            // Slider 3 without change
            // Show slider 2

            this.hiddenSlider(this.sliderFour, 4);
            this.showSlider(this.sliderTwo, 2);
        } else if (this.whichSliderIsShowSectionI[2] && this.whichSliderIsShowSectionI[3]) {
            // Hidden 3 slider
            // Slider 2 without change
            // Show slider 1

            this.hiddenSlider(this.sliderThree, 3);
            this.showSlider(this.sliderOne, 1);
        }
    }
}

let sliders = new SliderTeam();

function nextSliderSectionI() {
    sliders.nextSliderSectionI();
}

function prevSliderSectionI() {
    sliders.prevSlider();
}

window.setTimeout(showToastBootstrap, 3000);

function showToastBootstrap() {
    $('#toast-bootstrap').toast('show');
}

window.setTimeout(showToastArchitect, 6000);

function showToastArchitect() {
    $('#toast-architect').toast('show');
}