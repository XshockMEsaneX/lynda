(function ($) {
    $('.search-toggle').click(function(){
        $('#search-container').slideToggle('slow', function(){
                $('#search-container').toggleClass('active');
            });
    });
})(jQuery);