let cart = {

    init: function(){
        this.events();
    },

    showCart: function () {
        $('.cart').addClass('active');
        $('.cart-background').addClass('active');
    },

    hideCart: function(){
        $('.cart').removeClass('active');
        $('.cart-background').removeClass('active');
    },

    events: function(){
        let self = this;

        $(document).on('click', '.js-show-cart', function () {
            self.showCart();
        });

        $(document).on('click', '.js-cart-close', function () {
            self.hideCart();
        });

        $(document).on('click', '.cart-background', function () {
            self.hideCart();
        });

        $(document).on('click', '.js-drop-menu', function(){
            let parent = $(this).parent();
            let list = $(this).parent().find('.product-sidebar-list-sublist');
            if (parent.hasClass('active')){
                list.slideUp(function(){
                    parent.removeClass('active');
                });
            } else{
                list.slideToggle();
                parent.addClass('active');
            }
        });

        $(document).on('click', '.js-product-minus', function(){
            let input =  $(this).parent().find('.product-item-spinner__input');
            let count =  input.val();
            if (count > 0) {
                count--;
                input.val(count);
            }
        });

        $(document).on('click', '.js-product-plus', function(){
            let input =  $(this).parent().find('.product-item-spinner__input');
            let count = $(input).val();
            count++;
            input.val(count);
        });

    }
};


jQuery(function () {
    cart.init();
});
