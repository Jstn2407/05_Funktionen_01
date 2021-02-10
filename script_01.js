
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsrumpf (body)
function test() 
{
    console.log("Hallo Justin!")    
}

//Funktionsaufruf (call)
//test();

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    let firstName = "Ahmad"; //Variable
    console.log("Hallo " +  firstName + "!"); 
}

//ausgabeNamen();
//console.log(firstName); // Fehler --> lokal

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von Außen

function ausgabeNamen(firstName) 
{
    if (firstName == undefined) {
        firstName = "kein Name vorhanden";
        
    }
    console.log("Hallo " +  firstName + "!"); 
}

ausgabeNamen("Ahmad"); //Argumente / externe Daten
ausgabeNamen("Jenny");
ausgabeNamen(); //Fehler, keine Daten .....
ausgabeNamen(prompt("Bitte Namen eingeben!"));

