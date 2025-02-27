
alert("suma de dos numeros")

let n=25;
alert("Valor de n: " + n);
let n2=23;
alert("Valor de n2: " + n2);

let numbers=[n,n2]

let suma = 0;


for (let i=0; i<numbers.length; i++){
    suma +=numbers[i];
}

alert("La suma de los números es: " + suma);