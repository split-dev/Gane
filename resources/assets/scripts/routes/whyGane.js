export default {
    init() {
        // Page-header animation
        setTimeout(function () {
            $('.page-header__text, .page-header__img').addClass('aos-animate');
        }, 800);


        // Tabs
        var currentTab = $('.tab__content:nth-child(1)');
        $('.tab__left ul li:first-child').addClass('selected');
        $(currentTab).addClass('selected');
        $('.tab__left ul li').on('click', function () {
            $('.selected').removeClass('selected');
            $(this).addClass('selected');
            var target = '#' + $(this).attr('data-target');
            $(target).addClass('selected');
            currentTab = target;
        });

        $('.tab-box h4').on('click', function () {
            $('.tab__left').toggleClass('expand');
            $(this).toggleClass('up');
        });
    },

    // JavaScript to be fired on all pages, after page specific JS is fired
    finalize() {
    },
};