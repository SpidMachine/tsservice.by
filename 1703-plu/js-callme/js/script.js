function callme() {

    // Modal
    $('.j-callme__button').on('click', function() {
        $('#j-callme').addClass('j-callme--open');
    });

    $('.j-callme__close').on('click', function() {
        $('.j-callme').removeClass('j-callme--open');
    });

    $(document).mousedown(function(e) {
        var modal = $('.j-callme');
        if (modal.has(e.target).length === 0 && $('.j-callme__content').has(e.target).length === 0) {
            modal.removeClass('j-callme--open');
        }
    });

    // Ajax send
    $('.j-callme__send').on('click', function() {
        var name = $('.j-callme__name').val();
        var phone = $('.j-callme__phone').val();

        if (name.length == 0 || phone.length == 0) {
            $('.j-callme__error').slideDown();
            return false;
        };

        $.ajax({
            type: 'POST',
            url: mgBaseDir + '/ajaxrequest',
            data: {
                pluginHandler: 'js-callme',
                actionerClass: 'Pactioner',
                action: 'savePhone',
                name: name,
                phone: phone,
            },
            dataType: 'json',
            cache: false,
            success: function(response) {
                if (response.status == 'success') {
                    $('.j-callme__wrapper').hide();
                    $('.j-callme__thanks').slideDown();
                }
            }
        });
        return false;
    });
}

/* Fix z-index in .product-details-image */
$(document).ready(function() {
    $('.product-details-image').addClass('j-z-index');
});