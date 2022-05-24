
let n1, n2, n3;

n1=(prompt(`Numero 1: `));
n2=(prompt(`Numero 2: `));
n3=(prompt(`Numero 3: `));

let v=[n1, n2, n3];

alert(`Los numeros ingresados son:\n ${v}`);
alert('Los numero ordenados son: \n'+v.sort((a, b) => a - b));

/*let n1, n2, n3;
let v=[10,2,5];
console.log(v);
console.log(v.sort((a, b) => a - b ));*/
