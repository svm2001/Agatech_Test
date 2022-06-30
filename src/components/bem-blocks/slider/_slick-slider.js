$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        dots: true
    });

    $('[data-go]').on('click', function() {
        const __this = $(this);
        let index = __this.attr('data-go');
        $('.slider').slick('slickGoTo', parseInt(index));
    });
});
