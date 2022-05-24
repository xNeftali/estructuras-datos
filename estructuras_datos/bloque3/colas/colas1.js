//Estructura de datos dinamoca "colas o filas" con nodos
 
class nodos
{
    constructor(dato,enlace)
    {
        this.dato=dato;
        this.enlace=enlace;
    }
}
 
class colas
{
    constructor()
    {
        this.primer=null;
        this.ultimo=null;
    }
 
    encolar(valor)
    {
      const nodonuevo=new nodos(valor,null);
 
      if (this.inicio==null && this.ultimo==null) //no hay nodos es el primer nodo de la cola
      {
          this.primer=nodonuevo;
          this.ultimo=nodonuevo;
      }
      else
      {
          this.ultimo.enlace=nodonuevo;
          this.ultimo=nodonuevo;
      }
 
    }
 
    desencolar()
    {
     
       if (this.primer!=null) //si hay nodos
       {
        if (this.primer==this.ultimo) //cuando solo hay un nodo en la fila
        {
            this.ultimo=null;
        }
        this.aux_primer=this.primer;
        this.primer=this.primer.enlace;
        this.aux_primer.enlace=null;
        delete this.aux_primer; //destruir por completo un objeto en este caso el puntero o apuntador
       }
 
    }
 
    colavacia()
    {
        if (this.primer==null && this.ultimo==null)
          return true;
    }
 
    iniciocola()
    {
        if (this.primer!=null)
           return this.primer.dato;
        else
           return null;   
    }
 
    tamaniocola()
    {
        let tam=0;
       this.aux_primer=this.primer;
 
       while (this.aux_primer!=null) //recorrer la cola
       {
           tam++;
           this.aux_primer=this.aux_primer.enlace;
       }
 
       delete this.aux_primer;
 
       return tam;
    }
 
    limpiarcola()
    {
       let tam=this.tamaniocola();
       
       for(let i=1;i<=tam;i++)
           this.desencolar();
 
    }
 
    imprimir()
    {
        let valorescola="";
 
        this.aux_primer=this.primer;
 
        while (this.aux_primer!=null) //recorrer la cola
        {
            valorescola=valorescola+this.aux_primer.dato+",";
            this.aux_primer=this.aux_primer.enlace;
        }
 
        delete this.aux_primer;
 
        return valorescola;
    }
 
    buscar(valor)
    {
        let encontro=0;
 
        this.aux_primer=this.primer;
 
        while (this.aux_primer!=null) //recorrer la cola
        {
            if (valor==this.aux_primer.dato)
               encontro++;
            this.aux_primer=this.aux_primer.enlace;
        }
 
        delete this.aux_primer;
 
        return encontro;
    }
}
 
//Instanciar un objeto de la clase colas para utilizar los metodos
 
const cola=new colas();
 
//agregar o encolar nodos a la fila o cola
 
cola.encolar(7);
 
cola.encolar(5);
 
cola.encolar(30);
 
console.log(cola);
 
//eliminar o desencolar nodos de la fila o cola
 
//cola.desencolar();
console.log(cola);
 
//cola.desencolar();
console.log(cola);
 
//cola.desencolar();
console.log(cola);
 
//cola.desencolar();
console.log(cola);
 
 
let comprobarcolavacia=cola.colavacia();
 
if (comprobarcolavacia)
  console.log("Cola vacia");
else 
  console.log("Cola No vacia");
 
let enfrentecola=cola.iniciocola();
 
if (enfrentecola!=null)
   console.log(`El valor que esta al principio o enfrente de la cola es: ${enfrentecola}`);
else
console.log(`La cola esta vacia no existe un elemento al principio o enfrente`);
 
 
let tamanio=cola.tamaniocola();
 
if (tamanio>0)
  console.log(`El tamaño de la cola es: ${tamanio}`);
else
  console.log(`La cola o fila esta Vacia`);
 
 
//limpiar cola o fila dejar vacia sin nodos
 
//cola.limpiarcola();
console.log(cola);
 
//imprimir el contenido de la fila o cola
 
console.log(cola.imprimir());
 
//buscar un valor dentro de la cola o fila
 
let siencontro;
let valor=5;
siencontro=cola.buscar(valor);
 
if (siencontro>0)
   console.log(`Si se encontro el valor ${valor} dentro de la cola`);
else
   console.log(`No existe ese valor buscado dentro de la cola o fila`);