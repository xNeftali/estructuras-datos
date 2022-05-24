
let vp=[], vn=[];

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Ingresa un numero`));
    
    if (numero % 2 ==0) {
        vp.push(numero);
    } else {
        vn.push(numero);
    }
}
alert(`Los numeros pares son:${vp} y los nones son: ${vn}`);
