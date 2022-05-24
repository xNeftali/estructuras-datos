

/*let v=["azul", "amarillo", "rojo", "verde", "rosa"];
color= v.indexOf("azul");
console.log(color);
if (color== -1) {
    console.log(`El color no existe`);
} else{
    console.log(`El color existe`);
}*/
let v=["azul", "amarillo", "rojo", "verde", "rosa"];
let color=prompt(`escribe un color: `);
let veri = v.includes(color);
console.log(veri);
if (veri==true) {
    alert(`El color existe`);
} else{
    alert(`El color no existe`);
}
