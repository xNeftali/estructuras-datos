function CircularLinkedList(){  
    this.cabeza = null;
  }
   
    CircularLinkedList.prototype.push = function(valor){
     var cabeza = this.cabeza,
       ultimo = cabeza,
         nodo = {value: valor, next: null, anterior: null};
    
       if(!cabeza){
          nodo.next = nodo;
          nodo.anterior = nodo;
          this.cabeza = nodo;
       }
      else{
          while(ultimo.next != cabeza){
            ultimo = ultimo.next;
          }
          
          nodo.next = cabeza;
          nodo.anterior = ultimo;
       
          cabeza.anterior = nodo;
          ultimo.next = nodo;
       }   
      }
  
    var listacircularsimple = new CircularLinkedList();
    listacircularsimple.push(3);
  listacircularsimple.push(4);
  listacircularsimple.push(5);
  
  console.log(listacircularsimple);