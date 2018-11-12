/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () {  /* Kada se ucita stranica,tek se onda pocinje sa funkcijama */
    'use strict';
    $(".container-fluid .row:first-child button").click(function () {
        $(".container-fluid .row:nth-child(2) .panel").show(600);
        $('html,body').animate({
            scrollTop: $(window).scrollTop() + 350
        },
            'slow');
    });/* Kada se klikne na dugme prikazi, prikazi panel sa timovima i kada se jos jednom klikne skroluj do panela */
});

