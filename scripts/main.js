$(document).ready(function () {
    let lastScrollTop = 0;
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) { // if scrolled
            $('.navbar').css({ 
                'border-bottom': '1px solid #f9f9f9'
            });
        }
        
        if ($(this).scrollTop() > lastScrollTop) { // if scrolled downwards
            $('.navbar').css({ 
                'padding-top': '0px',
                'padding-bottom': '0px',
            });
        } else { // if scrolled upwards
            $('.navbar').css({ 
                'padding-top': '5px',
                'padding-bottom': '5px'
            });
        }
        lastScrollTop = $(this).scrollTop();
    });

}); 