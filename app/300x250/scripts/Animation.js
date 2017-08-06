var app = app || {};


app.Animation = (function () {

    var curtain,
        tl,
        buttonExit,
        tig1,
        txt1,
        hero,
        cta_arrow,
        cta_txt;

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

        buttonExit.addEventListener('mouseover', function () {
            TweenMax.to(cta_arrow, .25, {x: 5, ease: Sine.easeOut});
            TweenMax.to(cta_arrow, .25, {x: 0, delay: .25, ease: Sine.easeIn});
        });

    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl.to(curtain, .5, {opacity: 0})
            .to(tig1, 3, {scale: .75, x:"+=55", y:"+=105", ease: Sine.easeInOut}, "+=.5")
            .to(txt1, 1, {opacity: 1}, "-=1")
            .to(txt1, .5, {opacity: 0}, "+=3")
            .to(txt2, .5, {opacity: 1})
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
