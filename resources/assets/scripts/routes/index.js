export default {
    init() {
        setTimeout(function () {
            $('.entry-screen__video, .entry-screen__text, .entry-screen .container-box').addClass('aos-animate');
        }, 800);

        //Pause video when out of viewport
        var windowOffsetTop = window.pageYOffset;
        let clouds = document.querySelector('#clouds');
        let sky = document.querySelector('#sky');
        // let sky = document.querySelector('#sky');
        // let wood = document.querySelector('#wood');
          $(window).on('scroll', function () {
              windowOffsetTop = window.pageYOffset;
              var enableClouds = clouds.offsetTop + window.innerHeight;
              var enableSky = sky.offsetTop + window.innerHeight;
              // var enableSky = sky.offsetTop + window.innerHeight;
              // var enableWood = wood.offsetTop + window.innerHeight;
              if (windowOffsetTop > enableClouds) {
                  clouds.pause();
              }
              else if ( (windowOffsetTop < enableClouds) && clouds.paused) {
                  clouds.play();
              }


              if (windowOffsetTop > enableSky) {
                  sky.pause();
              }
              else if ((windowOffsetTop < enableSky) && sky.paused) {
                  sky.play();
              }
          });
    },

    // JavaScript to be fired on all pages, after page specific JS is fired
    finalize() {
    },
};