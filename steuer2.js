"use strict"


function berechneBrutto()
{
    let netto = document.getElementById("netto");
    let steuersatz = document.getElementById("steuersatz");

    let steuer = ((netto.value / 100) * steuersatz.value);
    let brutto = (parseFloat(netto.value) + parseFloat(steuer));
    document.getElementById("steuer").value = steuer.toFixed(2);
    document.getElementById("brutto").value = brutto.toFixed(2);

}

function berechneNetto()
{
    let brutto = document.getElementById("brutto");
    let steuersatz = document.getElementById("steuersatz");

    let netto = (brutto.value / (steuersatz.value / 100 + 1));
    let steuer = (parseFloat(brutto.value) - parseFloat(netto));
   
    document.getElementById("steuer").value = steuer.toFixed(2);
    document.getElementById("netto").value = netto.toFixed(2);

}

