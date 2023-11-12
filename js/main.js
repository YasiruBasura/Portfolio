//Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2',{delay: 500, origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p',{delay: 600, origin:'right'});
ScrollReveal().reveal('.home .info h2',{delay: 500, origin:'left'});
ScrollReveal().reveal('.home .info .btn',{delay: 700, origin:'bottom'});
ScrollReveal().reveal('.media-icons i',{delay: 500, origin:'left',interval:200});  //the interval option is used to delay the reveal of each icon
ScrollReveal().reveal('.home-img',{delay: 500, origin:'bottom'});