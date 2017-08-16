var app = app || {};


app.Animation = (function () {

    var curtain,
        tl,
        buttonExit,
        tig1,
        txt1,
        hero,
        cta_arrow,
        cta_txt,
        vignette;

    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        tl = new TimelineMax();

        curtain = document.getElementById('curtain');
        buttonExit = document.getElementById('button-exit');
        tig1 = document.getElementById('tig1');
        txt1 = document.getElementById('txt1');
        hero = document.getElementById('hero');
        cta_arrow = document.getElementById('cta_arrow');
        cta_txt = document.getElementById('cta_txt');
        vignette = document.getElementById('vignette');

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta_arrow, .25, {x: 5, ease: Sine.easeOut});
            TweenMax.to(cta_arrow, .25, {x: 0, delay: .25, ease: Sine.easeIn});
        });

    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl.to(curtain, .5, {opacity: 0})
            .to(tig1, 3, {scale: .73, x:"-=32", y:"+=95", ease: Sine.easeInOut}, "+=2")
            .to(txt1, .5, {opacity: 0}, "-=2")
            .to(vignette, .5, {opacity: 0}, "-=2")
            .to(hero, 1, {opacity: 1}, "+=3")
            .to(cta_txt, .5, {opacity: 1})
            .to(cta_arrow, .5, {opacity: 1}, "-=.5")
    }



    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
