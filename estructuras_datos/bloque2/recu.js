// 2.- Crear una solución en donde implementes una matriz de (3 X 3), en la cual te permita solo introducir 
// los numeros 1,2 o 3 con la finalidad de verificar que en sus 2 diagonales (IZQ y DER) y 
// sus lineas (vertical y horizontal ) los numeros sumen 6. 

// Es decir el programa solo deberá de permitir el ingreso de los números (1,2 o 3) para llenar 
// de izquierda a derecha la matriz, posteriormente comprobar las 4 combinaciones para verificar
// si se lleno de forma correcta, en caso de que así sea,  immprimir con Consola y Alert lo siguiente:

// a).- Matriz llenada 
// b).- "Gano el Juego" o "Sorry, vuelva a intentar"

let mat=[[ , , ],[ , , ],[ , , ]];
  
  let num;
  let uno = 0, dos = 0, tres = 0;
  
  for (i = 0; i < 3; i++) {
    num = parseInt(prompt(`Ingresa un numero:`));
    if (num == 1) {
      if (uno == 0) {
        mat[0][i] = num;
        uno++;
      }
    }
    if (num == 2) {
      if (dos == 0) {
        mat[0][i] = num;
        dos++;
      }
    }
    if (num == 3) {
      if (tres == 0) {
        mat[0][i] = num;
        tres++;
      }
    }
  }
  
  uno = 0;
  dos = 0;
  tres = 0;
  
  for (i = 0; i < 3; i++) {
    num = parseInt(prompt(`Ingresa un numero:`));
    if (num == 1) {
      if (uno == 0) {
        if (num != mat[0][i]) {
          mat[1][i] = num;
          uno++;
        }
      }
    }
    if (num == 2) {
      if (dos == 0) {
        if (num != mat[0][i]) {
          mat[1][i] = num;
          dos++;
        }
      }
    }
    if (num == 3) {
      if (tres == 0) {
        if (num != mat[0][i]) {
          mat[1][i] = num;
          tres++;
        }
      }
    }
  }
  
  uno = 0;
  dos = 0;
  tres = 0;
  
  for (i = 0; i < 3; i++) {
    num = parseInt(prompt(`Ingresa un número:`));
    if (num == 1) {
      if (uno == 0) {
        if (num != mat[0][i] && num != mat[1][i]) {
          mat[2][i] = num;
          uno++;
        }
      }
    }
    if (num == 2) {
      if (dos == 0) {
        if (num != mat[0][i] && num != mat[1][i]) {
          mat[2][i] = num;
          dos++;
        }
      }
    }
    if (num == 3) {
      if (tres == 0) {
        if (num != mat[0][i] && num != mat[1][i]) {
          mat[2][i] = num;
          tres++;
        }
      }
    }
  }
  
  alert(`Matriz llena`);
  
  if (
    mat[0][0] + mat[1][1] + mat[2][2] ==
    mat[2][0] + mat[1][1] + mat[0][2]
  ) {
    alert(`Gano el juego`);
    console.log(`Gano el juego`);
  } else {
    alert(`Sorry, vuelva intentar`);
    console.log(`Sorry, vuelva intentar`);
  }
  