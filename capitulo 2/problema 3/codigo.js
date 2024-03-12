
const operacion = (num1,num2,oper)=>{
	if (oper == 1) {
		resultado = num1 + num2;
	}
	else if (oper == 2) {
		resultado = num1 - num2;
	}
	else if (oper == 3) {
		resultado = num1 / num2;
	}
	else if (oper == 4) {
		resultado = num1 * num2;
	}
	alert(`tu resultado es ${resultado}`);
	return;
}

alert("¿Que operación deseas realizar?");
let oper = parseInt(prompt("1: suma,  2: resta,  3: división,  4: multiplicación"));
let numero1 = parseInt(prompt("primer número para operar"));
let numero2 = parseInt(prompt("segundo número para operar"));

if (oper==1||oper==2||oper==3||oper==4){
	operacion(numero1,numero2,oper);
}
else {
	alert("no se ha encontrado la operación")
}
