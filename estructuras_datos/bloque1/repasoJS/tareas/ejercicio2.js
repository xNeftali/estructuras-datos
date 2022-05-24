/*let sel= prompt("1. Triangulo  2.Rectangulo  3.Circulo");
let b, h, r, area;
switch(sel){
    case 1: 
        b= prompt("valor de la base");
        h= prompt("Valor de la altura");
        area=(b*h)/2;
        alert(`El area del triangulo es: ${area}`);
    break;
    case 2: area=b*h;
    break;
    case 3: area=pi(r*r);
    break;
    case 4: alert(`Seleccion no valida`);
    break;
}*/
let sel= prompt("1. Triangulo  2.Rectangulo  3.Circulo");
let b, h, r, area;
const PI=3.1416;
if(sel==1){
    b= prompt("valor de la base");
    h= prompt("Valor de la altura");
    area=(b*h)/2;
    alert(`El area del triangulo es: ${area}`);
}
else{
    if(sel==2){
        b= prompt("valor de la base");
        h= prompt("Valor de la altura");
        area=b*h;
        alert(`El area del rectangulo es: ${area}`);
    }
    else{
        if(sel==3){
            r= prompt("valor del radio: ");
            area=PI*(r*r);
            alert(`El area del circulo es: ${area}`);
        }
        else{
            alert(`seleccion no valida, verifique`)
        }
    }
}
