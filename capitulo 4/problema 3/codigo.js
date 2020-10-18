let materias = {
		fisica: ["Perez","pedro","pepito","cofla","maria"],
		programacion: ["Dalto","pedro","juan","pepito"],
		logica: ["Hernandez","pedro","juan","pepito","cofla","maria"],
		quimica: ["Rodriguez","pedro","juan","pepito","cofla","maria"]
	}


const inscribir = (alumno,materia)=>{
	personas = materias[materia];
	if (personas.length >= 21) {
		document.write(`lo siento ${alumno}, las clases de ${materia} ya estan llenas<br><br>`);
	} else {
		personas.push(alumno);
		if (materia == "fisica") {
			materias = {
		        fisica: personas,
		        programacion: materias['programacion'],
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}
		else if (materia == "programacion") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: personas,
		        logica: materias['logica'],
		        quimica:materias['quimica']
	        }
		}else if (materia == "logica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: personas,
		        quimica:materias['quimica']
	        }
		}else if (materia == "quimica") {
			materias = {
		        fisica: materias['fisica'],
		        programacion: materia['programacion'],
		        logica: materias['logica'],
		        quimica: personas
	        }
		}
		document.write(`¡Felicidades ${alumno}! te has inscrito a ${materia} correctamente.<br><br>`);
	}
}

document.write(materias['fisica'] + "<br>")

inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");
inscribir("jorge","fisica");
inscribir("ramses","fisica");
inscribir("pedrito","fisica");

document.write("<br>" + materias['fisica'])