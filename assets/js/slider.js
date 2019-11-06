// document.ready kører funktionen når hele siden er loadet. 

// funktionen som bliver kørt er slick, som er et library til at lave responsive sliders. 
// inde i funktionen er defineret nogle værdier, som bestemmer hvordan slideren opfører sig.
// docs: https://kenwheeler.github.io/slick/

$(document).ready(function(){
    $(".slideshow-container").slick({
        infinite: true,
        slidesToShow: 1,
    });
});