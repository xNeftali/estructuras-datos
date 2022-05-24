class Nodo{
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
       const nuevonodo=new Nodo(valor,null);
     
       if (this.primero==null)
       {
          this.primero=nuevonodo;
          this.ultimo= this.primero;
       }
       else
       {
          this.ultimo.siguiente=nuevonodo;
          this.ultimo=nuevonodo;
       }
   }

   buscar(valor){
    let contador = 0;
    this.temporal = this.primero;
    while(this.temporal != this.ultimo){ 
        if(this.temporal.dato == valor){
            console.log("Si esta en la lista");
            contador++;
        }
        this.temporal = this.temporal.siguiente;
    }
}
}

const vector=new listasimple();
vector.insertarnodo(5);
vector.insertarnodo(4);
vector.insertarnodo(10);
vector.insertarnodo(-1);
vector.insertarnodo(5);
 
 console.log(vector);

 vector.buscar(10);
console.log(contador); 

