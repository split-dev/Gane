import LazyLoad from 'vanilla-lazyload';
import AOS from 'aos';
// import ScrollOut from 'scroll-out';
import Dropline from '../components/Dropline';

export default {
  init() {
    // eslint-disable-next-line no-unused-vars
    var lazyLoadInit = new LazyLoad({
      elements_selector: '.lazy',
    });
    setTimeout(function () {
      AOS.init({
        once: true,
      });
    }, 300);

    // ScrollOut({
    //   cssProps: true,
    // });
    // console.log(lazyLoadInit);

    //Page Title Replacing from the header
    var pageTitle = $('.header__menu__links li:first-child').text();
    pageTitleReplace();


    //Delete duplicating Page Title in the Menu
    var children = $('.header__menu__links').children();
    for (let i = 0; i < children.length; i++) {
      if (children[i].textContent === pageTitle) {
        $(children[i]).hide();
      }
    }


    //Compact Header Set & Unset
    $(window).on('scroll', function () {
      if ( window.pageYOffset > 10) {
        $('header, .header__base').addClass('compact');
      }
      else {
        $('header, .header__base').removeClass('compact');
      }
    });


    //Primary Buttons animations
    $('.btn--yellow--primary, .btn--blue--primary, .btn--yellow--secondary, .btn--blue--secondary').on('mousemove', function (e) {
      let x = e.pageX - $(this).offset().left;
      let y = e.pageY - $(this).offset().top;
      e.target.style.setProperty('--x', `${ x }px`);
      e.target.style.setProperty('--y', `${ y }px`);
    });


    //Header Functions
    $('.header__menu__links li').on('mouseenter', function () {
      $('.header__menu').addClass('expand');
      $('.header__menu__links li:first-child').text(pageTitle);
      $('.header__mask').addClass('visible');
      $('.header__img').addClass('smooth');
    });
    $('.header__menu__links').on('mouseleave', function () {
      $('.header__menu').removeClass('expand');
      pageTitleReplace();
      $('.header__mask').removeClass('visible');
      $('.header__img').removeClass('smooth');
    });


    //Extra Functions
    function pageTitleReplace() {
      $('.header__menu__links li:first-child').html('<span class="header__menu__line"></span>Menu');
    }

    const dropline = new Dropline();
    dropline.initialise();
  },

  // JavaScript to be fired on all pages, after page specific JS is fired
  finalize() {


  },
};