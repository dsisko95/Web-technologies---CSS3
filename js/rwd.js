/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () { /* Kada se ucita stranica,tek se onda pocinje sa funkcijama */
    'use strict';
    $(".jumbotron span").click(function () {
        $('html,body').animate({
                scrollTop: $(window).scrollTop() + 680
            },
            'slow');
    }); /* Kada se klikne na strelicu, ona se polako spusti nadole */
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 80) {
            $(".jumbotron span").hide(500);
        } else {
            $(".jumbotron span").show(300);
        }

    }); /* Sakrij ili pokazi strelicu ako se skroluje vise od 80px tj. manje od 80px */
    $(".jumbotron + .jumbotron button").click(function () {
        $(".jumbotron + .jumbotron #paragrafOtkrij").toggle(450);
    }); /* Klikom na dugme "Objasniti?" moguce je prikazati i sakriti dodatna objasnjenja*/
});