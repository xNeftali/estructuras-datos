class Nodo {
    constructor(dato, siguiente, anterior) { //Punteros
        this.dato = dato;
        this.siguiente = siguiente;
        this.anterior = anterior;
    };
};

class ListaDoblementeEnlazada {
    constructor() {
        this.cabeza = null; //Variable que va a contener el primer dato (inicio de la lista)
        this.cola = null;   //Variable que va a contener el ultimo dato (final de la lista)
        //Se inicializan en null porque se inician vacios 
        this.tamano = 0;    //Variable que va a contener el tamaño de la lista de como va a estar creciendo
    };

    /*
    addCabeza(dato) {
        const nuevoNodo = new Nodo(dato, this.cabeza, null);

        if (this.cabeza) {
            nuevoNodo.siguiente = this.cabeza;  //ESta linea sirve para que el dato siguiente apunte a la cabeza
            this.cabeza.anterior = nuevoNodo;   //Esta linea sirve para el nuevo valor apunte al dato anterior
            this.cabeza = nuevoNodo;            //Esta linea sirve para que la cabeza apunte al nuevo valor
        } else {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        };
        this.tamano++;
    };
    */

    addCola(dato) {
        const nuevoNodo = new Nodo(dato, null, this.cola);

        if (this.cola) {
            nuevoNodo.anterior = this.cola;     //ESta linea sirve para que el valor siguiente apunte al final de la lista
            this.cola.siguiente = nuevoNodo;    //Esta linea sirve para el dato siguiente apunto al nuevo valor
            this.cola = nuevoNodo;              //Esta linea sirve para que el final de la lista apunte al nuevo valor
        } else {
            this.cola = nuevoNodo;
            this.cabeza = nuevoNodo;
        };
        this.tamano++;
    };

    /*
    insertarDato(dato, index) {
        if (index < 0 || index > this.tamano) {
            return null
        };

        const nuevoNodo = new Nodo(dato, null, null);
        let valorActual = this.cabeza;
        let anteriorus;

        if (index === 0) {
            nuevoNodo.siguiente = valorActual;
            valorActual.anterior = nuevoNodo;
            this.cabeza = nuevoNodo;
        } else {
            for (let i = 0; i < index; i++) {
                anteriorus = valorActual;
                valorActual = valorActual.siguiente;
            };

            nuevoNodo.siguiente =valorActual;
            nuevoNodo.anterior = anteriorus;
            valorActual.anterior = nuevoNodo;
            anteriorus.siguiente = nuevoNodo;
        };
        this.tamano++;
    };

    removeCabeza() {
        if (!this.cabeza) {
            return null
        };

        const valueToReturn = this.cabeza.dato;

        if (this.cabeza === this.cola) {
            this.cabeza = null;
            this.cola = null;
        } else {
            this.cabeza = this.cabeza.siguiente;
            this.cabeza.anterior = null;
        };
        this.tamano--;
        return valueToReturn;
    }

    removeCola() {
        if (!this.cola) {
            return null
        };

        const valueToReturn = this.cola.dato;

        if (this.cabeza === this.cola) {
            this.cabeza = null;
            this.cola = null;
        } else {
            this.cola = this.cola.anterior;
            this.cola.siguiente = null;
        };
        this.tamano--;
        return valueToReturn;
    };

    removedato(dato) {
        let valorActual = this.cabeza;
        let anteriorus = null;

        while(valorActual !== null) {
            if (valorActual.dato === dato) {
                if (!anteriorus) {
                    this.removeCabeza();
                } else if (!valorActual.siguiente) {
                    this.removeCola();
                } else {
                    anteriorus.siguiente = valorActual.siguiente;
                    valorActual.siguiente.anterior = anteriorus;
                };
                this.tamano--;
                return valorActual.dato;
            };
            anteriorus = valorActual;
            valorActual = valorActual.siguiente;
        };
        return null;
    }
    */

    imprimir() {
        let valorActual = this.cabeza;
        let result = '';
        while(valorActual) {
            result += valorActual.dato + ' <-> ';
            valorActual = valorActual.siguiente;
        };

        return result += ' X ';
    };

    getTamano() {
        return this.tamano;
    };

}

const lista = new ListaDoblementeEnlazada();

/*
lista.addCabeza(3);
console.log(lista.imprimir())

lista.addCabeza(2);
console.log(lista.imprimir())
*/

lista.addCola(7);
console.log(lista.imprimir())

lista.addCola(8);
console.log(lista.imprimir())

/*
lista.insertarDato(4, 3);   // 0 --> 3
console.log(lista.imprimir())

lista.removeCabeza();
console.log(lista.imprimir())

lista.removeCola();
console.log(lista.imprimir())

lista.removedato(4);
console.log(lista.imprimir())
*/

console.log(lista.getTamano());
