

//let perro ={nombre:"Rex", edad:5, vivio: true};
//console.log(perro.nombre);

function Perro(nombre, edad, vivo){
    this.nombre=nombre;
    this.edad=edad;
    this.vivo=vivo;
};
let perro1 = new Perro("rex", 5, true);
console.log(perro1);

let perro2 = new Perro("Toby", 3, false);
console.log(perro2);
