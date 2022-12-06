//- factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

var acum = 1;
for (let i=1; i<=10;i++){
    acum = acum * i;
};
console.log(acum)

//- factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
let i =1
var acum2 = 1;
while (i <=10){
    acum2 = acum2 * i;
    i++;
}
console.log(acum2)

//- factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

i =1
var acum3 = 1;
while (i <10){
    if(i===10){
        break;
    }
    acum3 = acum3 * i;
    i++;

}
console.log(acum3)