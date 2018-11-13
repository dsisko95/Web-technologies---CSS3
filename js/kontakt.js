/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () { /* Kada se ucita stranica,tek se onda pocinje sa funkcijama */
    'use strict';
    $("#sadrzaj button").hover(function () {
        var mejl, string;
        mejl = $(".form-group input[type='email']").val();
        string = mejl.substr(mejl.indexOf("@") + 1);
        if ($(".form-group input[type='text']").val().length === 0) {
            $("#info").html("<p>Unesite Vaše ime</p>");
            $(this).attr('class', 'btn btn-primary disabled');
        } else if ($(".form-group input[type='email']").val().length === 0 || $(".form-group input[type='email']").val().indexOf('@') <= 0 || (string !== "gmail.com" && string !== "yahoo.com" && string !== "outlook.com" && string !== "hotmail.com")) {
            $("#info").html("<p>Niste uneli email ili je neispravan format</p>");
            $(this).attr('class', 'btn btn-primary disabled');
        } else if ($(".form-group #area").val().length === 0) {
            $("#info").html("<p>Unesite neki komentar</p>");
            $(this).attr('class', 'btn btn-primary disabled');
        } else {
            $(this).attr('class', 'btn btn-primary active');
            $("#info").html("<i class='fa fa-check'></i>");
        }
        $("#info").show();
    }, function () {
        $("#info").hide();
    });
});
/*Funkcija za validaciju forme*/