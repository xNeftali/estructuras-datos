//Estructura dinamica de pila "stack"
 
class Nodo
{
    constructor(dato,enlace)
    {
        this.dato=dato;
        this.enlace=enlace;
    }
}
 
class Pilas
{
    constructor()
    {
        this.tope=null;
    }
 
    push_v1(valor)
    {
       const nodonuevo=new Nodo(valor,null);
       
       if (this.tope==null) //el primer elemento de la pila
       {
           this.tope=nodonuevo;
       }
       else //cuando ya hay mas de un nodo
       {
           nodonuevo.enlace=this.tope;
           this.tope=nodonuevo;
       }
       
    }
 
    push_v2(valor)
    {
       const nodonuevo=new Nodo(valor,this.tope);
       this.tope=nodonuevo;
    }
 
    pop()
    {
        if (this.tope!=null)
        {
            this.auxiliar_tope=this.tope;
            this.tope=this.tope.enlace;
            this.auxiliar_tope.enlace=null;
            this.auxiliar_tope=null;
        }
    }
 
    vacia()
    {
        if (this.tope==null)
          return true
    }
 
    novacia()
    {
        if (this.tope!=null)
          return true
    }
 
 
    tamaniopila()
    {
      let nodospila=0;
 
      //this.auxiliar_tope=null;
      this.auxiliar_tope=this.tope;
      nodospila++;
 
      while (this.auxiliar_tope.enlace!=null) //recorrer la pila hasta el ultimo elemento
      {
         this.auxiliar_tope=this.auxiliar_tope.enlace; //mover el puntero al siguiente nodo
         nodospila++;
      }
 
      return nodospila;
 
    }
 
    topepila()
    {
        return this.tope.dato;
    }
 
   
    limpiarpila()
    {
        let tamanio = this.tamaniopila();
        console.log(tamanio);

        for (let i = 1;  i<tamanio; i++) {
          this.pop();
        }
    }

    buscarelemento(){

    }

    imprimir(){
        let valores="";
        this.auxiliar_tope=this.tope;   
        while (this.auxiliar_tope.enlace!=null) //recorrer la pila hasta el ultimo elemento
        {
            // console.log(this.auxiliar_tope.dato);
            valores = valores+ this.auxiliar_tope.dato + ', ';
           this.auxiliar_tope=this.auxiliar_tope.enlace; //mover el puntero al siguiente nodo
        } 
        valores = valores + ', ' + this.auxiliar_tope.dato;
        return valores;
    }
}
 
//Instanciar a traves de un objeto la clase Pilas
const pila =new Pilas();
 
//utilizar mi objeto "pila" y agregar elementos a traves de el metodo "push"
// pila.push(63);
// pila.push(33);
 
pila.push_v2(3);
pila.push_v2(5);
pila.push_v2(10);
pila.push_v2(50);
 
console.log(pila);
 
//pila.pop(); //quita el 50
 
console.log(pila);
 
//pila.pop(); //el 10
 
console.log(pila);
 
//pila.pop();// 5
 
console.log(pila);
 
//pila.pop();// 3
 
console.log(pila);
 
//pila.pop();
 
console.log(pila);
 
if (pila.vacia())
  console.log("La pila esta vacia no hay nodos");
 else
  console.log("La pila contiene nodos");
 
console.log(pila);
 
console.log(`El tamaño de la pila es: ${pila.tamaniopila()}`);

console.log(`El valor que se encuentra en la cima: ${pila.topepila()}`);

pila.limpiarpila();

console.log(pila);

console.log(pila.imprimir());