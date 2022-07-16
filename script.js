$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    /* slide-up script */
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    /* toogle menu navbar */

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    /* typing animation script */
    var typed = new Typed(".typing", {
        strings: ["Student", "Freelancer"],
        typedSpeed: 500,
        backSpeed: 100,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Freelancer"],
        typedSpeed: 500,
        backSpeed: 100,
        loop: true
    });
});
