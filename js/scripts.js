// scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';

//Za bardzo nie rozumiem, dlaczego w poleceniu było nakazane sprawdzenie, czy wartość jest === akurat -1
if (allNames.indexOf(newName) === -1) {

	console.log( allNames.push(newName) );
}

//...a to poniżej tylko po to, żeby zobaczyć w konsoli zawartość obu tablic + Marian :)
console.log(allNames);