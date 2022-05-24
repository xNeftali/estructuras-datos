/* Crear un programa que simule una nota de venta en la cual, se vaya guardando
el precio unitario (PU), cantidad de articulos comprados (cant), apartir  de esto 
se almacene un tercer arreglo el precio neto (PN) que se calcula con la siguiente
formula: PN=PU*CANT. Lo anterio se debe de solicitar y calcular de forma indeterminada
mientras el usuario compre algun articulo
Al final el programa debera imprimir:
a.- El detalle de los productos comprados (cant, pu, pn)
b.- El subtotal a pagar (sumatoria de pn), IVA 16% sobre el subtotal
    y el total a pagar (subtotal + IVA)*/

    let pu = [];
    let cant = [];
    let pn = [];
    
    let i = 0;
    let comprar;
    do{
        pu[i] = parseFloat(prompt(`Ingrese el precio del producto`));
        cant[i] = parseInt(prompt(`Ingrese la cantidad de productos`));
        pn[i] = pu[i] * cant[i];
    
        i++;
        comprar = prompt(`¿Desea realizar otra compra? \n Si  No`);
    }while(comprar === "si");
    
    let subtotal = 0;
    
    for(let y = 0; y < i; y++){
        alert(`Precio del producto No°${y + 1}:  $${pu[y]} \nCantidad: ${cant[y]} \nPrecio Neto: $${pn[y]}`);
        subtotal += pn[y];
    }
    
    let iva = 0.16 * subtotal;
    let total = iva + subtotal;
    alert(`SUBTOTAL: $${subtotal} \nIVA: $${iva} \nTOTAL: $${total}`);

