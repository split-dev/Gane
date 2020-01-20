export default class {

    constructor () {
      this.stopped = false;
      this.lineHeight = 0;
    }
  
    initialise () {
      var $droplineWrap = $('[data-droplet-line-wrap]');
      if ($droplineWrap.length < 0) {
        return;
      }

      var $line = $droplineWrap.find('[data-droplet-line]');
      var $icon = $droplineWrap.find('[data-droplet-icon]')

      setInterval(() => {
        $line.css({
          'height': `${this.lineHeight}px`,
        });
      }, 300);

      window.addEventListener('scroll', () => {
          window.requestAnimationFrame(() => {
            let docViewTop = $(window).scrollTop();
            let $lineSwitchWrap = $('[data-line-switch]');
            let $lineStopWrap = $('[data-line-stop]');
            let switchOffset = $lineSwitchWrap.offset().top - $(window).scrollTop();
            let stopOffset = $lineStopWrap.offset().top - $(window).scrollTop();
            
            // let lineStopWrapHeight = $lineStopWrap.height();
            // let lineStopContentHeight = $lineStopWrap.find('.prominent-cta__content').height();
            // let lineStopPaddingTop = (lineStopWrapHeight - lineStopContentHeight) / 2;
            let windowHeight = window.innerHeight
                              || document.documentElement.clientHeight
                              || document.body.clientHeight;

            if (stopOffset < 200) {
              this.stopped = true;
              return;
            }

            if (this.stopped) {
              return;
            }

            if (switchOffset < 80) {
              $line.addClass('section-2');
              $icon.addClass('yellow');
            } else {
              $line.removeClass('section-2');
              $icon.removeClass('yellow');
            }
                              
            if (docViewTop < windowHeight / 2) {
              return;
            }

            let bufferSpace = 100;
            let windowWidth = window.innerWidth
                              || document.documentElement.clientWidth
                              || document.body.clientWidth;
            if (windowWidth <= 1440) {
              bufferSpace = 0
            }

            let calclineHeight = docViewTop - windowHeight / 2 + bufferSpace;
            if (calclineHeight < this.lineHeight) {
              return;
            }
            this.lineHeight = calclineHeight;
          });
      })
    }
  }
  