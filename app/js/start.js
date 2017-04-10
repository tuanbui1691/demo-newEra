var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
window.onload = function () {
    var $ = jQuery;
    $('#carousel').carousel({
        interval: 2000
    })
    $('.portfolio-grid').isotope({
        // options
        itemSelector: '.portfolio-item'
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('#back-top').show();
        } else {
            $('#back-top').hide();
        }
    });
    $('#back-top').click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    $('.icon-menu span.fa-bars').click(function(e){
        e.preventDefault();
        $('.header-menu').toggle();
    });
    $(window).resize(function () {
        if($(window).width() > 767) {
            $('.header-menu').css('display','');
        }
    })

}
