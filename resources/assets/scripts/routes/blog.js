import Forms from '../components/forms';
import 'bootstrap';
import 'select2';

export default {
    init() {
        setTimeout(function () {
            $('.featured-head__img, .featured-head__desc').addClass('aos-animate');
        }, 800);
        const form = new Forms({
            wrap: '.field-wrap',
            forms: '.newsletter-box__form',
        });
        form.init();

        $('.newsletter-box__submit__btn').on('click', function(e){
            e.preventDefault();
            $('form, .newsletter-box > h4').remove();
            $('.newsletter-box__submit__thank-you').show();
        });
        $('.select2-select').select2({
            width: '172px',
            theme: 'default product__description__select',
        });

        let numberOfPages = $('.pagination').children().length - 2;
        let active = 1;
        $('.pagination li:first-child').on('click', function (e) {
            e.preventDefault();
            active--;
            let y = active + 1;
            setActive(y);
            $('.pagination li:last-child').removeClass('disabled');
            if (active === 1) {
                $(this).addClass('disabled');
            }
            else if (active === 0) {
                active = 1;
            }
            else {
                $(this).removeClass('disabled');
            }
        });
        $('.pagination li:last-child').on('click', function (e) {
            e.preventDefault();
            active++;
            let y = active + 1;
            setActive(y);
            $('.pagination li:first-child').removeClass('disabled');
            if (active === numberOfPages) {
                $(this).addClass('disabled');
            }
            else if (active > numberOfPages) {
                active = numberOfPages;
            }
            else {
                $(this).removeClass('disabled');
            }
        });
        $('.pagination li').not('.pagination li:first-child').not('.pagination li:last-child').on('click', function (e) {
            e.preventDefault();
            active = $(this).children().text();
            $('.active').removeClass('active');
            $(this).addClass('active');
            $('.disabled').removeClass('disabled');
            if (active == 1) {
                $('.pagination li:first-child').addClass('disabled');
            }
            else if (active == numberOfPages) {
                $('.pagination li:last-child').addClass('disabled');
            }
        });
        function setActive(y) {
            let x = $('.pagination li:nth-child(' + y + ')');
            $('.active').removeClass('active');
            $(x).addClass('active');

        }
    },

    // JavaScript to be fired on all pages, after page specific JS is fired
    finalize() {
    },
};