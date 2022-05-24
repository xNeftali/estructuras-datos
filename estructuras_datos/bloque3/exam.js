class Nodo {
    constructor(dato,enlace)
    {
        this.dato = dato;
        this.enlace = enlace;
    }
}

class Pila {
    constructor() {
        this.end = null;
    }

    añadirnodos(valor) {
       const nodonuevo = new Nodo(valor,this.end);
       this.end = nodonuevo;
    }

    sacar() {
        if (this.end != null) {
            this.temporal = this.end;
            this.end = this.end.enlace;
            this.temporal.enlace = null;
            this.temporal = null;
        }
    }
}


const imagen3 = new Pila();
imagen3.añadirnodos(90);
imagen3.añadirnodos(80);

console.log(imagen3);

imagen3.sacar();
imagen3.sacar();

console.log(imagen3);


class otraestructura {

    constructor() {
    
    this.array={}; 
    this.cima=0;
    };
    
    añadir(valor) {
    
    this.cima++;
    this.array[this.cima] = valor;
    }
}

const guardar = new otraestructura();
guardar.añadir(90);
guardar.añadir(80);

console.log(guardar);