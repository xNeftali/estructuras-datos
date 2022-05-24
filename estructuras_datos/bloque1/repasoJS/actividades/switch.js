//estructura selectiva

/*
NOTA: La variable puede ser; enetera, cadena o caracter

switch (variable)
{
    case valor1: instruccion1;
                break;
    case valor2: instruccion2;
                break;
                ...
    case valorN: instruccionN;
                break;
    default valorN: instruccionN;
                break;
}

switch (variable)
{
    case valor1:
    case valor2: instruccion1;
                break;
                ...
    case valorN: instruccionN;
                break;
}

 */

 //Edad de una persona
 /*
 let edad=parseIntprompt("Introduce tu edad: ");
 if(edad>0){
    switch(edad){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17: alert(`Es menor de edad porque tiene ${edad}`);
        break;
        default: alert(`Es mayor de edad porque tiene ${edad}`);

    }     
 }
 else{
     alert(`Numero no valido, verifique`);
 }
*/
 //opcion b
 /*
 switch (true)
    {
        case edad>=0 && edad<=17:
                 alert(`Es menor de edad por que tienen ${edad} años`);
                 break;
        case edad<0:alert(`No es un rango de edad valido, tiene que ser un numero entero positivo`); 
                    break;     
        case edad>=18:  alert(`Es mayor de edad por que tienen ${edad} años`);
                        break;             
        default: alert(`No es un valor numerico verifique`);
                 break;
    }
*/
    //Crear un programa que imprima en pantalla el 
    //dia de la semana que correspoknda el numero del dia
//a
let num= parseInt(prompt("Introduce tu dia: "));
switch(num){
    case 1: alert(`El numero ${num} es DOMINGO`);
    break;
    case 2: alert(`El numero ${num} es LUNES`);
    break;
    case 3: alert(`El numero ${num} es MARTES`);
    break;
    case 4: alert(`El numero ${num} es MIERCOLES`);
    break;
    case 5: alert(`El numero ${num} es JUEVES`);
    break;
    case 6: alert(`El numero ${num} es VIERNES`);
    break;
    case 7: alert(`El numero ${num} es SABADO`);
    break;
    default: alert(`El numero ${num} NO es valido`);
    break;
}

//b

