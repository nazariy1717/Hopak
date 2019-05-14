 let frontend = {
     hamburger: $('.hamburger'),
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

        $(document).on('click', '.hamburger', function () {
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

 let modal = {
     closeButton: $('.js-close-modal'),
     closeOverlay: $('.modal'),

     init: function () {
         this.events();
     },
     openModal: function (id) {
         let modalWindow = $(id);
         modalWindow.fadeIn();
         modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');
         $('html,body').addClass('js-modal');
         $('html,body').off('scroll mousewheel touchmove');
     },

     closeModal: function (id) {
         let modalWindow = $(id);
         modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
         modalWindow.fadeOut();
         $('html,body').removeClass('js-modal');
         $('html,body').on('scroll mousewheel touchmove');
     },

     events: function () {

         $(document).on('click', '.modalTrigger', function (e) {
             e.preventDefault();
             let self = $(this),
                 target = self.attr('data-modal');
             modal.openModal(target);
         });

         $(document).on('click', '.modal', function (event) {
             let self = '#' + $(this).attr('id');
             if (event.target.className == 'modal__body') {
                 modal.closeModal(self);
             }
         });

         $(document).on('click', '.js-close-modal', function () {
             let self = '#' + $(this).closest('.modal').attr('id');
             modal.closeModal(self);
         });

     }
 };

 jQuery(function () {
     frontend.init();
     slider.init();
     modal.init();
 });
