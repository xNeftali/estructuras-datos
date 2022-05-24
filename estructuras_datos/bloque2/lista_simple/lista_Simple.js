class Nodo //Operacion de Crear un nodo
{
    constructor(dato,siguiente)
    {
        this.dato=dato;
        this.siguiente=siguiente;
    }
       
};
 
class listasimple
{
   constructor()
   {
       this.primero=null;
       this.ultimo=null;
   }
 
   insertarnodo(valor){
       const nuevonodo=new Nodo(valor,null); //Crear o instanciar el nodo
     
       if (this.primero==null)
       {
          //Es el primer nodo de la lista o que la lista estaba vacia
          this.primero=nuevonodo;
          this.ultimo= this.primero;
       }
       else
       {
          this.ultimo.siguiente=nuevonodo;
          this.ultimo=nuevonodo;
       }
   }
 
   vacia()
    {
      if (this.primero==null)
         console.log("Lista vacia");
      else
         console.log("Lista No esta vacia, por lo menos hay un nodo");
    }
 
    recorrer()
    {
       this.temporal=this.primero;
 
       while (this.temporal!=null)
       {
           console.log(`[${this.temporal.dato}]`);
           this.temporal=this.temporal.siguiente;
       }
         
    }
 
    eliminarnodo()
    {
        this.temporal=this.primero;
 
        if (this.primero!=null)
        {
            if (this.primero.dato==this.ultimo.dato)
            {
                this.ultimo=null;
            }
            this.temporal=this.primero.siguiente;
            this.primero.siguiente=null;
            this.primero=this.temporal;
 
        }
     
    }
 
 
};
 
const nodos_lista=new listasimple();
nodos_lista.insertarnodo(3);
nodos_lista.insertarnodo(23);
nodos_lista.insertarnodo(33);
nodos_lista.insertarnodo(43);
 
 console.log(nodos_lista);
 
 
 
nodos_lista.recorrer();
 
console.log(nodos_lista);
 
nodos_lista.vacia();
 
nodos_lista.eliminarnodo();
 
nodos_lista.eliminarnodo();
 
nodos_lista.eliminarnodo();
 
nodos_lista.eliminarnodo();
 
console.log(nodos_lista);
 
 
nodos_lista.insertarnodo(3333);
 
console.log(nodos_lista);