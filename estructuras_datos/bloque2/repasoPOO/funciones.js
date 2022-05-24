//Funciones
/*
  A)funciones escritas mediante la palabra reservada
    "Function"
 
  B)Funciones de Flecha "Arrow" 
 
  De acuerdo al funcionamiento de las funciones se puede decir lo siguiente:
  => No Regresan Valor (void)
  => Si regresan valor "return"
  => No Regresan Valor (void) y reciben parametros
  => Si regresan valor "return" y reciben parametros
 
*/
 
//Caso A, No Regresan Valor (void)
 
function saludo1(){
    console.log(`Hola soy una función Saludos ...`);
    console.log(`Hola soy otra función Saludos ...`);
}
 
//Caso B, No Regresan Valor (void)
 
const saludo11=()=> {
    console.log(`Hola soy una función Saludos ...`);
    console.log(`Hola soy otra función Saludos ...`);
}
 
//Mandar llamar una funcion
 
saludo1();
saludo11();
 
//Caso A, Si regresan valor "return"
function saludo2(){
   let n1=23,n2=34,suma=0;
   suma=n1+n2;
   return suma;
}
 
 
 
//Caso B, Si regresan valor "return"
 
const saludo22=()=>{
    let n1=23,n2=34,suma=0;
   suma=n1+n2;
   return suma;
}
 
 
//Mandar llamar una funcion que si regresa valor
 
let r1;
 
r1=saludo2()+100;
 
 
console.log(r1);
console.log(saludo22());
 
//Caso A, No Regresan Valor (void) y reciben parametros
 
function saludo3(mensaje,d){
    console.log(`Hola soy una función Saludos mi mensaje es ${mensaje}...`);
    console.log(`Hola soy otra función Saludos ...${d}`);
}
 
//Caso B, No Regresan Valor (void) y reciben parametros
 
const saludo33=(num,mensaje)=> {
    console.log(`Hola soy una función Saludos ...${num}`);
    console.log(`Hola soy otra función Saludos, mi mensaje es ${mensaje} ...`);
}
 
//Mandar llamar una funcion No Regresan Valor (void) y reciben parametros
 
let m="Soy de TI";
let dia=7;
 
saludo3(m,dia);
saludo33(8,"Y soy del Area de Desarrollo de SW multiplataforma");
