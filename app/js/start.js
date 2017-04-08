window.onload = function () {
    var $ = jQuery;
    $('.portfolio-grid').isotope({
        // options
        itemSelector: '.portfolio-item'
    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#back-top').show();
        } else {
            $('#back-top').hide();
        }
    });
    $('#back-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
}

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