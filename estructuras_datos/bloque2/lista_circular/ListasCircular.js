//Codigo lista circular
class Nodo{
    constructor (dato, sig){
        this.dato = dato;
        this.sig = sig;
    }
}
class ListaCircular{
    constructor(){
        this.inicio = null;
        this.fin = null;
    }
    insertarnodoalfinal(objeto){
        const nodonuevo = new Nodo (objeto, this.inicio);
        if(this.inicio == null){ //Cuando no existan nodos en las listas
            this.inicio = nodonuevo;
            this.inicio.sig = nodonuevo;
            this.fin = nodonuevo;
        }else{ //Insertar mas nodos a la listas
            this.fin.sig = nodonuevo;
            this.fin = nodonuevo;
        }
    }
    eliminarnodoalfinal(){
        //Si es igual significa que es el ultimo nodo de la lista
        if (this.inicio == this.fin) {
            this.fin,sig = null;
            this.inicio = null;
            this.fin = null;
        }
        //Quitar el enlace de ultimo nodo
    this.fin.sig = null;
    //Crear apuntador para recorrer la lista
    this.temporal = this.inicio;
    //Mover apuntador temporal hasta uno antes del que se va eliminar
        while (this.temporal.sig.dato != this.fin.dato) {
            this.temporal = this.temporal.sig;
        }
        //Mover apuntador un nodo antes del que se va eliminar
        this.fin = this.temporal;
        this.fin.sig = this.inicio;
        this.temporal = null;        
    }

    buscaryactualizar(objeto){
        let respuesta = "No";
        let valor = "";
        this.temporal = this.inicio;
        while(this.temporal != this.fin){ //Recorrer lista hasta nodo final
            if(this.temporal.dato == objeto){//Buscar si existe el valor en la lista
                respuesta = prompt("Deseas cambiar el valor del nodo (Si/No)")
                if(repuesta.toUpperCase() = "Si"){
                    valor = prompt("Introduce el nuevo valor del nodo");
                    this.temporal.dato = valor;
                }
            }
            this.temporal = this.temporal.sig;//El apuntador temporal se mueve al sigueinte nodo
        }
    }

    cuantosnodos()
   {
       let numnodos=0;

       this.temporal=this.inicio;

       if (this.inicio!=null && this.fin!=null)
       {
            numnodos++;
            while (this.temporal!=this.fin)
            {
                numnodos++;
                this.temporal=this.temporal.sig;
            }
       } 
       else
       {
           numnodos=0;
       }
       return numnodos;
   }

   insertarnodoalprincipio(objeto){

   }
}
//Crear un apuntador que se llame incicio y que apunte la primera vez a null
const apuntador = new ListaCircular();
console.log(apuntador);
//Crear un metodo que se llame insertarnodoalfinal que reciba un parametro de tipo String y que permita enlazar los nodos de fotrma lista circular simple
apuntador.insertarnodoalfinal("Perro");
console.log(apuntador);
//Crear otro nodo con los sigujientes valores: dato: "Gato" y sig: (Que apunte al primer nodo de la lista)
apuntador.insertarnodoalfinal("Gato");
console.log(apuntador);
apuntador.insertarnodoalfinal("Caballo");
console.log(apuntador);
apuntador.insertarnodoalfinal("Ave");
console.log(apuntador);
apuntador.insertarnodoalfinal("Covid");
console.log(apuntador);


//Crear un metodo que permita buscar un valor en la lista circular, si lo encuentra
//preguntar si desea cambiar el valor por otro y su es SI cambiarlo, en caso contrario
//No hacer nada
//apuntador.buscaryactualizar("Caballo");

//Crear un metodo que diga cuantos nodos tiene la lista
cantidadnodos=apuntador.cuantosnodos();
if(cantidadnodos!=){
    
}
//Crear un nuevonodo con los siguientes elementos dato: "Perro", siguiente: null
/*let valor="Perro";
let siguiente=null;
const nuevonodo = new Nodo (valor, siguiente);
console.log(nuevonodo);
//Crear un nuevonodo con los siguientes elementos dato: "Gato", siguiente: null
const nuevonodo2 = new Nodo ('Gato', null);
console.log(nuevonodo2);*/

//Crear un objeto que se llame nuevonodo3 con los siguientes elementos: dato: "Guacamaya", siguiente: "null"
//Muestre e imprima el objeto
/*const nuevonodo3 = {
    dato: 'Guacamaya',
    siguiente: null
}
console.log(nuevonodo3);*/
