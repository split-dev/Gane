import Forms from '../components/forms';
import 'select2';

export default {
    init() {
        setTimeout(function () {
            $('.page-header__text, .page-header__img').addClass('aos-animate');
        }, 800);
        const form = new Forms({
            wrap: '.field-wrap',
            forms: '.form',
        });
        form.init();

        $('.form__select2').select2({
            placeholder: 'Reasons for enquiry',
            width: '100%',
            theme: 'form__select',
        });

        $('.form__submit__btn').on('click', function(e){
            e.preventDefault();
            $('form').remove();
            $('.form__submit__thank-you').show();
        });
    },

    // JavaScript to be fired on all pages, after page specific JS is fired
    finalize() {
    },
};