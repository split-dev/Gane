import 'bootstrap';

export default {
    init() {
        setTimeout(function () {
            $('.page-header__text, .page-header__img').addClass('aos-animate');
        }, 800);
    },

    // JavaScript to be fired on all pages, after page specific JS is fired
    finalize() {
    },
};