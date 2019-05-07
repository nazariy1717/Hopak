 let frontend = {
     hamburger: $('.header-hamburger'),
     header: $('.header'),
     nav: $('.header-list'),

    init: function(){
        this.events();
    },

    toggleNav: function () {
         if (!this.hamburger.hasClass('is-active')) {
             this.hamburger.addClass("is-active");
             this.header.addClass("is-active");
             this.nav.toggleClass('js-show');
         }
         else {
             this.hamburger.removeClass("is-active");
             this.header.removeClass("is-active");
             this.nav.toggleClass('js-show');
         }
     },

    events: function(){
         let self = this;

        $(document).on('click', '.header-hamburger', function () {
            self.toggleNav();
        });

    }
 };

 let slider = {

     slider_options_default: {
         wrapAround: true,
         pageDots: false,
         prevNextButtons: true,
         autoPlay: false,
         cellAlign: 'center',
         contain: true,
         arrowShape: {
             x0: 15,
             x1: 45, y1: 25,
             x2: 65, y2: 40,
             x3: 65
         }
     },

     init: function () {
         this.events();
     },

     newSlider: function (selector, options) {
         options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
         return new Flickity(document.querySelector(selector), options);
     },

     events: function () {
         let self = this;
     }

 };

 jQuery(function () {
     frontend.init();
     slider.init();
 });
