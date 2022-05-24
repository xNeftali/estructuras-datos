//implementar la condicion if




//persona mayor de edad
let edad=17;
if(edad>=18){
    console.log(`Es mayor de edad, tiene ${edad}`);
}
else{
    console.log(`Es menor de edad, tiene ${edad}`);
}

//mostrar el dia de la semana de acuerdo al dia numerico
let dia;

//solicitar un valor por teclado
dia=prompt("Dame el numero de dia de la semana (1 al 7)");

    //alert(`El dia corresponde a un dia de la semana valido`);
    if(dia==1){
        alert(`El numero ${dia} corresponde al DOMINGO`);
    }
    else if(dia==2){
        alert(`El numero ${dia} corresponde al LUNES`);
    }
    else if(dia==3){
        alert(`El numero ${dia} corresponde al MARTES`);
    }
    else if(dia==4){
        alert(`El numero ${dia} corresponde al MIERCOLES`);
    }
    else if(dia==5){
        alert(`El numero ${dia} corresponde al JUEVES`);
    }
    else if(dia==6){
        alert(`El numero ${dia} corresponde al VIERNES`);
    }
    else if(dia==7){
        alert(`El numero ${dia} corresponde al SABADO`);
    }
    else{
        alert(`El numero ${dia} NO corresponde`);
    }
