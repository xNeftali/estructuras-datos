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
     //Imprimira todos los elementos que se tienen agregados en la pila  
     imprimir_Libros(){
        let valores ="";
        this.temporal_tope=this.tope;
    
          while (this.temporal_tope.siguiente!=null)
          {         
              valores=valores+this.temporal_tope.libro;
             this.temporal_tope=this.temporal_tope.siguiente; 
          }
          valores= ' ' + valores + ", " + this.temporal_tope.libro;
          return valores;
        }
        //Tamaño de la pila de los ejemplares que se tienen agrgados 
    tamanio_Libros(){
        let nodosLibros=0;
        this.temporal_tope=this.tope;
        nodosLibros++;
   
        while (this.temporal_tope.siguiente!=null) 
        {
           this.temporal_tope=this.temporal_tope.siguiente;
           nodosLibros++;
        }
   
        return nodosLibros;
   
      }
    
}
const libros = new Libros();

function ok() {
    
    let seleccion = document.getElementById("accion").value;
    
    if (seleccion == "encolar") {
       
    libros.agregar_libro(document.getElementById("libro").value);
    console.log(libros);
    document.getElementById("resultado").innerHTML = 'Libro añadido: ' + document.getElementById("libro").value;

   }

   if (seleccion == "desencolar") {
    console.log("Se elimino");  
    libros.eliminar_Libros();
    console.log(libros);
    document.getElementById("resultado").innerHTML = 'Se elimino el ultimo libro agregado';
  } 
  
  if (seleccion == 'imprimir') {
    document.getElementById("resultado").innerHTML ='Los libros disponibles son:   ' +libros.imprimir_Libros();
  }
  
  if (seleccion == 'tamaño') {
    document.getElementById("resultado").innerHTML ='Cantidad de libros disponibles: ' +libros.tamanio_Libros();
  }
}