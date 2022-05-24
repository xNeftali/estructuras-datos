//Ejemplo practico basado en una libreria
class Nodo{
    constructor(libro,siguiente){
        this.libro=libro;
        this.siguiente=siguiente;
    }
}

class Libros{
    //Se implemento la pila
    constructor(){
        this.tope=null;
    }
    // Agregara libros a la pila
    agregar_libro(valor){
        const nodonuevo=new Nodo(valor,this.tope);
           this.tope=nodonuevo;   
    }
    //Eliminar elementos
    eliminar_Libros(){
        if (this.tope!=null){
            this.temporal_tope=this.tope;
            this.tope=this.tope.siguiente;
            this.temporal_tope.siguiente=null;
            this.temporal_tope=null;
        }
    }
    //Tamaño de la pila de los ejemplares que se tienen agrgados 
    tamanio_Libros(){
      let nodosLibros=0;
      this.temporal_tope=this.tope;
      nodosLibros++;
 
      while (this.temporal_tope.siguiente!=null) //recorrer la pila hasta el ultimo elemento
      {
         this.temporal_tope=this.temporal_tope.siguiente; //mover el puntero al siguiente nodo
         nodosLibros++;
      }
 
      return nodosLibros;
 
    }
    //Imprimira todos los elementos que se tienen agregados en la pila  
    imprimir_Libros(){
    let valores ="";
    this.temporal_tope=this.tope;

      while (this.temporal_tope.siguiente!=null) //recorrer la pila hasta el ultimo elemento
      {         
          valores=valores+this.temporal_tope.libro;
         this.temporal_tope=this.temporal_tope.siguiente; //mover el puntero al siguiente nodo
      }
      valores=valores+this.temporal_tope.libro + ",";
      return valores;
    }

}
//Se inicio la pila 
const libros = new Libros();
//Se agregaron los libros en total son 10 ejemplares
libros.agregar_libro('El Código da Vinci de Dan Brown');
libros.agregar_libro('Lo que el viento se llevó de Margaret Mitchell');
libros.agregar_libro('Rojo y negro de Stendhal');
libros.agregar_libro('Cuentos de Antón Chéjov');
libros.agregar_libro('La colmena de Camilo José Cela');
libros.agregar_libro('Lolita de Vladimir Nabokov');
libros.agregar_libro('La Biblia');
libros.agregar_libro('Los viajes de Gulliver de Jonathan Swift');
libros.agregar_libro('Príncipes de Maine de John Irving');
libros.agregar_libro('Moby Dick de Herman Melville');
//Sirve para visualizar como quedo la lista despues de insertar los elementos. 
console.log(libros);
//eliminar libros agregados 
libros.eliminar_Libros(); //quita el libro Moby Dick
libros.eliminar_Libros();//quita el libro principes
libros.eliminar_Libros();//quita el libro los viajes
libros.eliminar_Libros();//quita el libro la biblia
libros.eliminar_Libros();//quita el libro lolita
libros.eliminar_Libros();//quita el libro la colmena
libros.eliminar_Libros();//quita el libro cuentos
//Sirve para visualizar como quedo la lista despues de eliminar los elementos. 
 console.log(libros);
//Tamaño de la pila 
console.log(`La cantidad de libros que esta disponible son : ${libros.tamanio_Libros()}`);
//Imprimira el estado actual de la lista
console.log(libros.imprimir_Libros());

