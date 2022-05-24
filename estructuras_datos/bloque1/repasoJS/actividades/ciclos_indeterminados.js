/*
1.son instrucciones de bloque de repeticion tambien llamados bucles
2.se le llaman indeterminadas porque en algunas ocasiones no 
conocemos hasta caundo sera el final del ciclo
3.aceptan cualquiuer tipo de dato dentro de la condicion
4.los elementos son: condicion, valor inicial y valor final

while(){
    instrucciones
}
do{
    instrucciones
}while()*/

//imprima en pantalla el caracter @
/*let i=1;

while(i<=5){
    console.log(`@`);
    console.log(`listo ya termine`);
    i++;
}
let respuesta="si";

while(respuesta=="si"){
    console.log(`@`);
    console.log(`listo ya termine`);
    respuesta=prompt(`¿desea imprimir otra vez? si/no`);
}*/

let i=1;
do{
    console.log(`@`);
    console.log(`listo ya termine`);
}while(i<=5){
    i++;
}

