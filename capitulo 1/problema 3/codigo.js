
let sospechoso1 = prompt("Sospechoso 1 ¿mintió?");
let sospechoso2 = prompt("Sospechoso 2 ¿mintió?");
let cofla = prompt("Sospechoso 3 ¿mintió?");


if (sospechoso1 == 1) {
	alert("sospechoso 1 mintió, darle descarga electrica")
}
else if (sospechoso1 == 2) {
	alert("sospechoso 1 no mintió, no darle descarga")
}

else {
	alert("no se si sospechoso 1 minitó, probemos de vuelta")
}


if (sospechoso2 == 1) {
	alert("sospechoso 2 mintió, darle descarga electrica")
}
else if (sospechoso2 == 2) {
	alert("sospechoso 2 no mintió, no darle descarga")
}

else {
	alert("no se si sospechoso 2 mintió, probemos de vuelta")
}


if (cofla == 1) {
	alert("cofla mintió, no darle descarga")
}
else if (cofla == 2) {
	alert("cofla no mintió, no darle descarga")
}

else {
	alert("no se si cofla mintió, probemos de vuelta")
}