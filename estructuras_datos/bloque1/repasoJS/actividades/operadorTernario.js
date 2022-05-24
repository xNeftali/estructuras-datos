//Operador Ternario (if sin if)
/*let edad=17;
if(edad>=18){
    console.log(`Es mayor de edad, tiene ${edad}`);
}
else{
    console.log(`Es menor de edad, tiene ${edad}`);
}*/

let edad=17;
(edad>=0)? console.log(`Es mayor de edad, tiene ${edad} años`):console.log(`Es menor de edad, tiene ${edad} años`);

//mostrar en pantalla si un numero es inpar o par

//hacer un if
let numero=2;
if(numero % 2 == 0){
    console.log(`El numero ${numero} es par`);
}
else{
    console.log(`El numero ${numero} es inpar`);
}

//operador ternario
(numero % 2 == 0)? 
    (console.log(`El numero ${numero} es par`),
    console.log(`El numero ${numero} es par`))
    :
    (console.log(`El numero ${numero} es inpar`),
    console.log(`El numero ${numero} es inpar`))