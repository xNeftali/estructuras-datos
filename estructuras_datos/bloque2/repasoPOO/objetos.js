//Objetos (Atributos o propiedades y metodos o acciones)

//Objeto computadora, los objetos se componen de la clave "Key y e valor (Value)"
//key:valor

const computadora = {
    tamanio_pantalla: 17,
    tipo: 'laptop',
    modelo: 'macbook pro'
}
const computadora2 = {
    tamanio_pantalla: 14,
    tipo: 'mini laptop',
    modelo: 'dell'
}

const mesa1={
    material:'madera',
    alto:1.70,
    modelo:'real'
}

//Creado variables

//Creando arreglos

//Acceder o interactuar con los objetos
console.log(computadora.modelo);
console.log(computadora.tipo);
console.log(computadora.tamanio_pantalla);

console.log(computadora['modelo']);

//instancia = objeto de persona

const persona1={
    nombre:'rodolfo',
    apellidos: 'meraz hernandez',
    edad: 34, 
    hijos: ['maria', 'juan']
}

const persona2={
    nombre:'ruben',
    apellidos: 'meraz hernandez',
    edad: 50,
    hijos:['mario', 'juana', 'ivan']
}

for (const key in persona1) {
    console.log(key);
    console.log(persona1[key]);
}
console.log(persona1.hijos[1]);
