/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () { /* Kada se ucita stranica,tek se onda pocinje sa funkcijama */
    'use strict';
    $("section .container-fluid img").click(function () {
        $("section .container-fluid p#izaberi").html("<p>Izaberi</p>");
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "block");
        $("section .container-fluid .opis").hide();
        $(".container-fluid .row + #sakrivenSadrzaj").animateCSS("fadeIn");
    }); /* Klikom na sliku meni(beli), prikazi pocetnu stranu */
    $("section .container-fluid .row .well#prviPrvi").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>border-radius</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisBorderRadius");
    });
    $("section .container-fluid .row .well#drugi").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>border-image</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisBorderImage");
    });
    $("section .container-fluid .row .well#treci").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>background</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisBackground");
    });
    $("section .container-fluid .row .well#cetvrti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Colors</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisColors");
    });
    $("section .container-fluid .row .well#peti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Gradients</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisGradients");
    });
    $("section .container-fluid .row .well#sesti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Shadows</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisShadows");
    });
    $("section .container-fluid .row .well#sedmi").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Text</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisText");
    });
    $("section .container-fluid .row .well#osmi").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Fonts</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisFonts");
    });
    $("section .container-fluid .row .well#deveti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Transforms</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisTransforms");
    });
    $("section .container-fluid .row .well#deseti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Transitions</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisTransitions");
    });
    $("section .container-fluid .row .well#jedanaesti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Animations</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisAnimations");
    });
    $("section .container-fluid .row .well#dvanaesti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Multiple Columns</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisColumns");
    });
    $("section .container-fluid .row .well#trinaesti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>User Interface</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisInterface");
    });
    $("section .container-fluid .row .well#cetrnaesti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>box-sizing</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisBoxSizing");
    });
    $("section .container-fluid .row .well#petnaesti").click(function () {
        $(".container-fluid .row + #sakrivenSadrzaj").css("display", "none");
        $("section .container-fluid p#izaberi").html("<p>Flexbox</p>");
        $("section .container-fluid .opis").show();
        $("section .container-fluid .opis").load("opisSvojstva.html div#opisFlexbox");
    });
}); /* Klikom na dugme prikazati odredjeni sadrzaj */