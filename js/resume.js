
!function (e) {
    "use strict";
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var t = e(this.hash); if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length) return e("html, body").animate({ scrollTop: t.offset().top }, 1e3, "easeInOutExpo"), !1
        }
    }), e(".js-scroll-trigger").click(function () { e(".navbar-collapse").collapse("hide") }), e("body").scrollspy({ target: "#sideNav" })
}(jQuery);