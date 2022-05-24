let matriz1=[[ , ],[ , ]];
let matriz2=[[ , ],[ , ]];
let vector=[];

for(let i = 0; i < 2; i++){
    for(let x = 0; x < 2; x++){
        matriz1[i][x] = parseInt(prompt(`Ingrese un valor en la matriz 1: `));
        matriz2[i][x] = parseInt(prompt(`Ingrese un valor en la matriz 2: `));
        let mult = matriz1[i][x] * matriz2[i][x];
        vector.push(mult);
    }
}
alert(`El resultado de la multiplicacion es: ${vector}`);