//declarar un arreglo

// //almacenar en un arreglo los numeros del 1 al 10
// let numeros=[];

// for (let i=0;i<10;i++)
//   numeros[i]=i+1;

//   //numeros[0]=1; ... numeros[9]=10

//   for (let i=0;i<10;i++)
//    console.log(numeros[i]);

//   for (const numero of numeros) {
//      console.log(numero);
//   }

//   numeros.forEach(numero => {
//     console.log(numero);
//   });

  //Crear un programa para llenar un arreglo 10 posiciones con los siguientes datos:
// en las posiciones pares meter un 1 y en las nones un cero 

// array2[0]=1;
// array2[1]=0;
// array2[2]=1;
// array2[3]=0;
// array2[4]=1;  ... array2[8]=1; array2[9]=0;

// let arrays2=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

//  for(let i=0;i<10;i++)
//  {
//   (i % 2 == 0)? arrays2[i]=1 : arrays2[i]=0   
//  }

// for (const array2 of arrays2) {
//   console.log(array2);
// }

//Arreglos de matrices

// let matriz = [
//   [1, 0],
//   [0, 1]
//  ];

//  //R,C

//  for(let r=0;r<2;r++)
//  {
//     for(let c=0;c<2;c++)
//       {
//           console.log(matriz[r][c]);
//       }
//  }

//Crear un programa que genere en automatico una matriz de 3*3 
// en la cual llene con 1 la diagonal superior izquierda y en todas 
// las demas posiciones coloque un 0

// let matriz = [
//                [1, 0, 0],
//                [0, 1, 0],
//                [0, 0, 1],
//              ];

//             R  C
//      matriz[0][0]=1; 
//      matriz[1][1]=1; 
//      matriz[2][2]=1; 

// let matriz=[[,,],[,,],[,,]];

// for(let r=0;r<3;r++)
// {
//   for(let c=0;c<3;c++)
//   {
//     if (r==c)
//       matriz[r][c]=1;
//     else
//       matriz[r][c]=0;
//   }
// }

// for (const matriz1 of matriz) {
//   console.log(matriz1);
// }