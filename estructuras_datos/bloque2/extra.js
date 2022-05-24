let matriz = [
  [, ,],
  [, ,],
  [, ,],
];

let n;
let uno = 0,
  dos = 0,
  tres = 0;

for (i = 0; i < 3; i++) {
  n = parseInt(prompt(`Ingresa el número de la posición [0][${i}]:`));
  if (n == 1) {
    if (uno == 0) {
      matriz[0][i] = n;
      uno++;
    }
  }
  if (n == 2) {
    if (dos == 0) {
      matriz[0][i] = n;
      dos++;
    }
  }
  if (n == 3) {
    if (tres == 0) {
      matriz[0][i] = n;
      tres++;
    }
  }
}

uno = 0;
dos = 0;
tres = 0;

for (i = 0; i < 3; i++) {
  n = parseInt(prompt(`Ingresa el número de la posición [1][${i}]:`));
  if (n == 1) {
    if (uno == 0) {
      if (n != matriz[0][i]) {
        matriz[1][i] = n;
        uno++;
      }
    }
  }
  if (n == 2) {
    if (dos == 0) {
      if (n != matriz[0][i]) {
        matriz[1][i] = n;
        dos++;
      }
    }
  }
  if (n == 3) {
    if (tres == 0) {
      if (n != matriz[0][i]) {
        matriz[1][i] = n;
        tres++;
      }
    }
  }
}

uno = 0;
dos = 0;
tres = 0;

for (i = 0; i < 3; i++) {
  n = parseInt(prompt(`Ingresa el número de la posición [2][${i}]:`));
  if (n == 1) {
    if (uno == 0) {
      if (n != matriz[0][i] && n != matriz[1][i]) {
        matriz[2][i] = n;
        uno++;
      }
    }
  }
  if (n == 2) {
    if (dos == 0) {
      if (n != matriz[0][i] && n != matriz[1][i]) {
        matriz[2][i] = n;
        dos++;
      }
    }
  }
  if (n == 3) {
    if (tres == 0) {
      if (n != matriz[0][i] && n != matriz[1][i]) {
        matriz[2][i] = n;
        tres++;
      }
    }
  }
}

alert(`Matriz llena`);

if (
  matriz[0][0] + matriz[1][1] + matriz[2][2] ==
  matriz[2][0] + matriz[1][1] + matriz[0][2]
) {
  alert(`Gano el juego`);
  console.log(`Gano el juego`);
} else {
  alert(`Sorry, vuelva intentar`);
  console.log(`Sorry, vuelva intentar`);
}
