// Equation is ºC = 5/9(ºF - 32).

var degFahren = prompt("This page converts the given Fahrenheit value below to Celsius, please enter the degrees in Fahrenheit: ",50);
var degCent;

degCent = 5/9*(degFahren - 32);

alert(degFahren + "\xB0 Fahrenheit is " + degCent + "\xB0 centigrade.");
