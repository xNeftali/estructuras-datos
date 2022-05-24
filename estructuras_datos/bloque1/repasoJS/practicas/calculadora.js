/*let n1, n2, operacion, sum, res;


operacion=prompt(`¿Que operacion quieres realizar? Suma/Resta/Multiplicacion/Division`);

if(operacion==`suma`){
    n1= parseInt(prompt(`Ingresa el numero uno: `));
    n2=parseInt(prompt(`Ingresa el numero dos: `));
    sum= n1+n2;
    alert(`El resultado es ${sum}`);
}
if (operacion=`resta`) {
    n1= parseInt(prompt(`Ingresa el numero uno: `));
    n2=parseInt(prompt(`Ingresa el numero dos: `));
    sum= n1-n2;
    alert(`El resultado es ${sum}`);
}*/

function resultados(){
    let seleccion = document.getElementById("operacion").value;
    if (seleccion=="suma") {
        let uno = document.getElementById("n1").value;
        let dos = document.getElementById("n2").value;
        let suma = parseFloat(uno) + parseFloat(dos);
        document.getElementById("resultado").innerHTML = uno+ " + " + dos+ " = " + suma;
    }
    if(seleccion=="resta"){
        let uno = document.getElementById("n1").value;
        let dos = document.getElementById("n2").value;
        let resta = parseFloat(uno) - parseFloat(dos);
        document.getElementById("resultado").innerHTML = uno+ " - " + dos+ " = " + resta;
    }
    if(seleccion=="multiplicacion"){
        let uno = document.getElementById("n1").value;
        let dos = document.getElementById("n2").value;
        let multiplicacion = parseFloat(uno) * parseFloat(dos);
        document.getElementById("resultado").innerHTML = uno+ " x " + dos+ " = " + multiplicacion;
    }
    if(seleccion=="division"){
        let uno = document.getElementById("n1").value;
        let dos = document.getElementById("n2").value;
        let division = parseFloat(uno) / parseFloat(dos);
        document.getElementById("resultado").innerHTML = uno+ " / " + dos+ " = " + division;
    }
}
