"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test() 
{
    console.log("Hallo Robert!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();
// console.log(firstName); // Fehler: Scope!

function ausgabeNamen() {
    let firstName = "Anna"; // what happens in Vegas, ...
    console.log("Hallo " + firstName + "!");
}


/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Anna"); // Argument 
// ausgabeNamenParam("Craig");
// ausgabeNamenParam("Fatih");

function ausgabeNamenParam(firstName) { // Parameter
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02C *****/
// 2c.mehrere Parameter
// ausgabeNamenParam("Anna"); // Argument 
// ausgabeNamenParam("Craig");
// ausgabeNamenParam("Fatih");

ausgabeNamenParams("Maxine","Mütze");
ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"),);

function ausgabeNamenParams(firstName, famalyName) { // Parameter
    console.log("Hallo " + firstName + " " + famalyName + "!");
}


/***** Funktionen 03a *****/
// 03a, Vorbereitung
// Postulat: one function = one job (uncle Bob) 
// SRP single responsibility principle

function ausgabeNamenParams2(firstName, famalyName) { // Parameter
    console.log("Hallo " + firstName + " " + famalyName + "!");
}