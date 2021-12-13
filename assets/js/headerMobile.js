var $hamburger = $('.hamburger');

TweenLite.set('.top', {
    x: 0
});
TweenLite.set('.bottom', {
    x: 0
});
TweenLite.set('#menu-wrap', {
    yPercent: -100
});
TweenLite.set('.stripe', {
    yPercent: 100
});
// TweenLite.set('.navigation',{xPercent:-50, yPercent:-50});
TweenLite.set('.navigation li', {
    x: -112
});

var hamburgerMotion = new TimelineMax()
    .to('.bottom', 0.2, {
        x: -4,
        ease: Power2.easeInOut
    }, 0)
    .to('.top', 0.2, {
        x: 4,
        ease: Power2.easeInOut
    }, 0)
    .to('#menu-wrap', 0.3, {
        yPercent: 0
    }, 0)
    .to('.stripe', 0.5, {
        yPercent: 0
    }, '-=.1')
    .staggerTo('.navigation li', 0.3, {
        x: 0,
        ease: Sine.easeOut
    }, 0.2, 0.5)
    // .to('.navigation li',.6,{marginBottom:'40px', ease: Power1.easeOut})
    .reverse()

$hamburger.on('click', function (e) {
    hamburgerMotion.reversed(!hamburgerMotion.reversed());
    $('body').toggleClass('active-menu');
});

// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}