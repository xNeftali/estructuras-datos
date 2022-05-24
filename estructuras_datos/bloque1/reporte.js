//Arreglo
//Arreglo unidimensional
let comida=["Hamburguesa", "Papas fritas", "Nuggets", "Helado", "Refresco"];
//Seleccionar una comida del menu.
let seleccion="Hamburguesa"//prompt(`¿Que desea ordenar?`);
//Metodo de buscar en el arreglo
let veri = comida.includes(seleccion);
console.log(veri);
//Imprimir un mensaje de acuerdo a lo seleccionado
if(veri==true){
    console.log
    (`La comida ${seleccion} esta en el menú`);
}else{
    console.log(`La comida no esta en el menú`);
}
//metodo menor a mayor
let precios=[50.00, 20.00, 65.00, 35.00,20.00];
console.log
('Los precios son: \n'+precios.sort((a, b) => a - b));

//matriz 5*2
matriz=[
    ["Hamburguesa"]["50.00"],
    ["Papas fritas"]["20.00"],
    ["Nuggets"]["65.00"],
    ["Helado"]["35.00"],
    ["Refresco"]["20.00"]
];
let buscar = prompt ("buscar producto");
let b;

for(let i =0; i<5; i++){
    if (matriz[i][0]== buscar){
        b=matriz[i][0];
    }
    else{
        b="no";
    }
}
if(b=="no"){
    alert("El producto no esta en la lista")
}else{
    for(let i = 0; i< 5; i++){
        if(b == matriz[i][0]){
            alert(matriz[i][0]+""+matriz[i][1])
        }
    }
}