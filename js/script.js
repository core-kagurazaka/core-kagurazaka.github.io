
$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('nav.menu').addClass('active');
        } else {
            $('nav.menu').removeClass('active');
        }
    });
});

$(function() {
    $('nav.menu a').click(function() {
        $('.hamburger').removeClass('active');
         $('nav.menu').removeClass('active');
        }
    )});