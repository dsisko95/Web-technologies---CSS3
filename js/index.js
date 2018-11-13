/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () { /* Kada se ucita stranica,tek se onda pocinje sa funkcijama */
    'use strict';
    $(".container-fluid .row:nth-child(2) .col-sm-4:last-child .krug").hover(function () {
        $(this).css("background", "linear-gradient(180deg, #20B0D4 50%, white 50%)");
        $(this).css("border", "5px solid gray");

    }, function () {
        $(this).css("background", "linear-gradient(360deg, #20B0D4 50%, white 50%)");
        $(this).css("border", "none");
    }); /*Zamena pozadine i dodavanje ivice za treci krug u drugom redu*/
    $(".container-fluid .row:nth-child(2) .col-sm-4:nth-child(2) .krug").hover(function () {
        $(this).animateCSS("rubberBand");
    }, function () {
        $(this).animateCSS("none");
    }); /* Dodavanje animacije za drugi krug u drugom redu */
    $(".container-fluid .row:nth-child(2) .col-sm-4:first-child .krug").hover(function () {
        $(this).toggleClass("klasaRotiranje");
    }); /* Rotiranje za prvi krug u drugom redu */
    $(".container-fluid .row:nth-child(1) .col-sm-4:last-child .krug").hover(function () {
        $(this).css("borderRadius", "0px");
        $(this).html('<a href="http://www.w3schools.com/css/css3_flexbox.asp" style="color: black" target="_blank"><p>display:flex</p></a>');
    }); /* Dodavanje linka za flexbox za treci krug u prvom redu */
    $(".container-fluid .row:nth-child(1) .col-sm-4:nth-child(2) .krug").hover(function () {
        $(this).css("borderRadius", "0px");
        $(this).html('<p>box-sizing</p>');
    }); /* Prikaz linka za boxmodel za drugi krug u prvom redu */
    $(".container-fluid .row:nth-child(1) .col-sm-4:first-child .krug").hover(function () {
        $(this).css("borderRadius", "0px");
        $(this).css("width", "150px");
        $(this).html('<a href="http://www.w3schools.com/cssref/css_selectors.asp" style="color: black" target="_blank"><p>[attribute="value"]</p></a>');
    }); /* Prikaz linka za css selektore za prvi krug u prvom redu */
    $(".container-fluid .row:nth-child(3) .col-sm-4:last-child .krug").hover(function () {
        $(this).css("borderRadius", "0px");
        $(this).css("width", "150px");
        $(this).html('<a href="https://www.w3schools.com/css/css3_mediaqueries.asp" style="color: black" target="_blank"><p>@media only </p></a>');
    }); /*  Prikaz linka za media upite za treci krug u trecem redu*/
    $(".container-fluid .row:nth-child(3) .col-sm-4:nth-child(2) .krug").hover(function () {
        $(this).css("boxShadow", "10px 10px gray");
    }, function () {
        $(this).css("boxShadow", "none");
    }); /* Dodavanje senke za drugi krug u trecem redu */
    $(".container-fluid .row:nth-child(3) .col-sm-4:first-child .krug").hover(function () {
        $(this).css("background", "linear-gradient(to left, #20B0D4, white)");
    }, function () {
        $(this).css("background", "linear-gradient(360deg, #20B0D4 50%, white 50%)");
    }); /* Dodavanje gradijenata za prvi krug u trecem redu*/
    $(".jumbotron .glyphicon").click(function () {
        $('html,body').animate({
                scrollTop: $("#skriven").offset().top
            },
            'slow');
        $("#strelicaSadrzaj").show(100);
    }); /* Kada se klikne na strelicu, ona se polako spusti nadole*/
});