/*jslint browser: true*/
/*global $, jQuery, alert*/
$(document).ready(function () { /* Kada se ucita stranica,tek se onda pocinje sa funkcijama */
    'use strict';
    var i, y;
    y = document.getElementsByTagName('input');
    $(".jumbotron .info").css("visibility", "hidden");
    $(".jumbotron #prvo").click(function () {
        $(".jumbotron#prvi").replaceWith($(".jumbotron#drugi"));
        $(".jumbotron#drugi").show();
    });
    $(".jumbotron #drugo").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #drugo").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #drugo").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #drugo").click(function () {
                    $(".jumbotron#drugi").replaceWith($(".jumbotron#treci"));
                    $(".jumbotron#treci").show();
                });
            }
        });

    });
    $(".jumbotron #trece").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #trece").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #trece").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #trece").click(function () {
                    $(".jumbotron#treci").replaceWith($(".jumbotron#cetvrti"));
                    $(".jumbotron#cetvrti").show();
                });
            }
        });

    });
    $(".jumbotron #cetvrto").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #cetvrto").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #cetvrto").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #cetvrto").click(function () {
                    $(".jumbotron#cetvrti").replaceWith($(".jumbotron#peti"));
                    $(".jumbotron#peti").show();
                });
            }
        });

    });
    $(".jumbotron #peto").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #peto").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #peto").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #peto").click(function () {
                    $(".jumbotron#peti").replaceWith($(".jumbotron#sesti"));
                    $(".jumbotron#sesti").show();
                });
            }
        });

    });
    $(".jumbotron #sesto").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #sesto").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #sesto").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #sesto").click(function () {
                    $(".jumbotron#sesti").replaceWith($(".jumbotron#sedmi"));
                    $(".jumbotron#sedmi").show();
                });
            }
        });

    });
    $(".jumbotron #sedmo").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #sedmo").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #sedmo").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #sedmo").click(function () {
                    $(".jumbotron#sedmi").replaceWith($(".jumbotron#osmi"));
                    $(".jumbotron#osmi").show();
                });
            }
        });

    });
    $(".jumbotron #osmo").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #osmo").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #osmo").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #osmo").click(function () {
                    $(".jumbotron#osmi").replaceWith($(".jumbotron#deveti"));
                    $(".jumbotron#deveti").show();
                });
            }
        });

    });
    $(".jumbotron #deveto").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #deveto").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #deveto").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #deveto").click(function () {
                    $(".jumbotron#deveti").replaceWith($(".jumbotron#deseti"));
                    $(".jumbotron#deseti").show();
                });
            }
        });

    });
    $(".jumbotron #deseto").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #deseto").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #deseto").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #deseto").click(function () {
                    $(".jumbotron#deseti").replaceWith($(".jumbotron#jedanaesti"));
                    $(".jumbotron#jedanaesti").show();
                });
            }
        });

    });
    $(".jumbotron #jedanaesto").hover(function () {
        $('input:radio').each(function () {
            if (!$('input:radio').is(':checked')) {
                $(".jumbotron #jedanaesto").attr('class', 'btn btn-primary disabled');
                $(".jumbotron .info").html("<p style='font-size: 15px;'>Odaberite neku od opcija</p>");
                $(".jumbotron .info").css("visibility", "visible");
                return false;
            } else {
                $(".jumbotron #jedanaesto").attr('class', 'btn btn-primary active');
                $(".jumbotron .info").css("visibility", "hidden");
                $(".jumbotron #jedanaesto").click(function () {
                    $(".jumbotron#jedanaesti").replaceWith($(".jumbotron#dvanaesti"));
                    $(".jumbotron#dvanaesti").show();
                });
            }
        });

    });
    $(".jumbotron#dvanaesti button").click(function () {
        $(".jumbotron#dvanaesti #odgovori").show(500);
    }); /* Prikaz sledece grupe pitanja, kada se klikne na dugme i odradjena validacija za prazna polja*/
});