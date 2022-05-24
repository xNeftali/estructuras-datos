

let numero, suma;
suma=0;

do {
    numero=parseInt(prompt(`Ingrese un numero`));
    suma=suma+numero;
} while (suma<=499);

alert(`El valor es: ${suma}`);