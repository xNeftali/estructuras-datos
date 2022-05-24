/* 
Clases de JS

Se realizan con el paradigma de programacion orientado a objetos

Objetos > Atributos (propiedades) y Metodos (Acciones)

Dentro de las clases en JS por lo regular se coloca lo siguiente:

>Metodos
>Constructor (Metodo que unicializa con valores a un objeto o instancia)

const ferrari={
    modelo:'2020',
    color:'Rojo',
    tipo_combustible:'Gasolina'
}

*/

class Coches{
    constructor(modelo, color, tipo_combustible){
        this.modelo=modelo;
        this.color=color;
        this.tipo_combustible=tipo_combustible;
    }
    arrancar(encendido){
        console.log(`Ha arrancado el vehiulo ${encendido}`);
    }
    parar(apagado){
        let encendido;
        if(apagado==true){
            console.log(`Ha detenido el vehiulo ${apagado}`);
            encendido==false;
        }else{
            console.log(`El vehiulo sigue en marcha ${apagado}`);
            encendido==true;
        }
        return(encendido);
    }
    girar(){
        console.log(`El vehiculo da la vuelta`)
    }
    acelerar(){
        return(`La velocidad que alcanzo fue superior a los 50 km/h`);
    }
}

//Crear y asignar valores al objeto

const ferrari={
    modelo:'2020',
    color:'Rojo',
    tipo_combustible:'Gasolina'
}

//Crear o instanciar un objeto mediante un metodo constructor

const ferrari2= new Coches('2021', 'Negro', 'Diesel');
ferrari2.arrancar(true);
ferrari2.girar();
let resultado=ferrari2.parar(true);
console.log(`El coche esta prendido ${resultado}`);