export default {
    init() {
        setTimeout(function () {
            $('.featured-head__img, .featured-head__desc').addClass('aos-animate');
        }, 800);
    },

    // JavaScript to be fired on all pages, after page specific JS is fired
    finalize() {
    },
};