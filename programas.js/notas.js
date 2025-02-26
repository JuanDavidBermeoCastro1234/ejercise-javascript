
alert("Bienvenido al sistema de notas");

let nota1 = Number( prompt("ingrese su primera nota "));
let nota2 = Number(prompt("ingrese su segunda nota "));
let nota3 = Number(prompt("ingrese su tercera nota"));

// let aprobo = (nota1 >= 65 ) ;
    let notas = (nota1 + nota2 + nota3 )/3;
    let aprobo =notas>=65?"Aprobado":"Desaprobado";

    console.log(`Resultado: ${aprobo}`);

