
/**Ingresa solo números enteros positivos un vector de 5 posiciones,
posteriormente genera un nuevo vector con los números ordenados y 
otro mas con el resultado de multiplicar cada número del vector por 2. 
Después introduce un número por el teclado para buscarlo en cualquiera 
de los tres vectores y si lo encuentra que mencione en qué vector lo 
encontró y que agregar ese numero en los tres vectores./ 

let n1=5;//parseInt(prompt(`Ingresa un numero: `));
let n2=parseInt(prompt(`Ingresa un numero 1: `));
let n3=parseInt(prompt(`Ingresa un numero 2: `));
let n4=parseInt(prompt(`Ingresa un numero 3: `));
let n5=parseInt(prompt(`Ingresa un numero 4: `));

let v1=[ n1, n2, n3, n4, n5];
console.log(`Los numero son: ${v1}`);

let v2=[ n1, n2, n3, n4, n5];
console.log('Los numeros ordenados son: \n'+v1.sort((a, b) => a - b));

let sel=5;//prompt(`Ingresa un numero`);
let veri = v1.includes(sel);

console.log(veri);
if (veri==true) {
    console.log(`Si esta en el arreglo`);
}*/

/*Dado el siguiente vector = {5, 4, 10, -1, 5}, se te pide que indiques 
cuantas veces aparece el valor determinado (buscar), así como también que indique la posición en la 
que apareció, realizar el proceso anterior después de que el vector este ordenado ascendentemente.*/
/*
let vector = [5, 4, 10, -1, 5];

//ordenar
console.log(`Ordenacion:`+ vector.sort((a, b) => a - b));

//Buscar y contar

//Posiciones
let pos = vector.indexOf(10);
console.log(`Se encuntra en la posicion: `+pos);
*/

var vector = [5, 4, 10, -1, 5];

console.log(vector.sort(function( prev, next) {
    if (prev > next){
        return 1;
    }
    if (prev< next){
        return -1;
    }
    return 0;
}));


let buscar = prompt("Escriba un numero a buscar");

let uno= vector.indexOf(buscar);
if( uno>-1)
{
    console.log("El numero " + buscar+ " se encontro en el primer arreglo");
}