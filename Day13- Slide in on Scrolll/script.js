// debounce function is from another tutorial
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');


function chceckSlide(e) {
    sliderImages.forEach(sliderImage => {
        // window.innerHeigh - heigh of window (for example window of phone ect.)
        const sliderInAt = (window.scrollY + window.innerHeight);
        sliderImage.height / 2;
        // offsetTop  tell us the
        // top of this image is how far from the top
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        console.log(sliderImage.height);
        const isHalfShown = sliderInAt > sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
        } else {
            sliderImage.classList.remove('active')
        }
    });
}


window.addEventListener('scroll', debounce(chceckSlide));