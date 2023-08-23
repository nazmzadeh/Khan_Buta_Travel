! function (e) {
    "use strict";
    e(window).on("load", function () {
        e('[data-loader="circle-side"]').fadeOut(), e("#preloader").delay(350).fadeOut("slow"), e("body").delay(350), e(".hero_in h1,.hero_in form").addClass("animated"), e(".hero_single, .hero_in").addClass("start_bg_zoom"), e(window).scroll()
    }), e(window).on("scroll", function () {
        e(this).scrollTop() > 1 ? e(".header").addClass("sticky") : e(".header").removeClass("sticky")
    });
}(window.jQuery);