let vector1=[];
let vector2=[];
let vector3=[];

for (let i = 0; i < 5; i++) {
    vector1[i]=Math.ceil(Math.random()*100);
    vector2[i]=Math.ceil(Math.random()*100);
    vector3[i]= vector1[i] + vector2[i];
}
console.log(vector1);
console.log(vector2);
console.log(vector3);