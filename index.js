console.log("hola mundo")


// tipos de datos
// string: se usa para hacer una cadena de caracteres las cuales siempre tendran comillas, por ejemplo "a" "hola" "hola mundo"
// boolean: true false.
// Null: nulo      - el cual significa que la variable esta vacia 
// Number: 123456789 22 1233;
// "121" es un string, es distinto a 123 que es un number 
// Undefined. 
//object: objeto 

// // definicion de variables 
// // var
// // let
// // const


// let MiPrimeraVariable = "Mi primera Variable"
// //console.log(MiPrimeraVariable);

// //Mutabilidad
// MiPrimeraVariable = "Esto ha cambiado"
// //console.log(MiPrimeraVariable);

// //boolean

// let miBoolean = true 
// let miOtroBool = false 

// let miNumero = 0 
// let miNumero2 = 12
// let miNumero3 = -258


// //console.log(miNumero, miNumero2, miBoolean, MiPrimeraVariable)

// let undef 
// //console.log(undef);

// let nulo = null

// //console.log("nulo", 12, nulo);


// // Objeto: es una agrupacion de datos, y estos datos hacen sentido entre si.


// // Objeto vacio 
// const miPrimerObjeto = {}

// //objeto son agrupaciones de datos que hacen sentido entre sí 
// const miObjeto = {
//     unNumero : 12,
//     unString : "Esta cadena de caracteres",
//     unaCondicion: true,
// }

// //console.log(miObjeto); //esta manera de usar console.log funciona para hacer que aparesca algo especifico en nuestra consola

// //arreglos
// const arrVacio = []
// const arr = [1, 2, "Hola", miObjeto]

// //console.log(arrVacio, arr);

// arrVacio.push(5)
// arrVacio.push(3)
// arrVacio.push(1)
// arrVacio.push("Hola")
// arrVacio.push(MiPrimeraVariable)

// //console.log(arrVacio);


// const suma = 1 + 2
// const restar = 1 - 2 
// const multiplicar = 2 * 3
// const division = 9 / 3

// //console.log(suma, restar, multiplicar, division);


// const modulo = 10 % 3 
// //console.log(modulo);


// let num = 5 
// //num++
// //num++
// //num++
// //num++
// //num++

// //num--
// //num--
// //num--
// //num--
// //num--

// num += 5
// num -= 5 
// num *= 5
// num /= 2
// //console.log(num);


// // operadores de comparacion 
// // igualdad estricta 
// const resultado1 = 5 === 6 // funciona para comprar los numeros si so iguales o no
// const resultado2 = 5 === 5

// // igualdad no estricta, strings puedes ser iguales a numeros si el valor es el mismo
// const resultado3 = 5 == "5" //funciona para comparar un string con un numero, es importante de hacerlo solo con dos signos de igualdad

// const resultado4 = 5 < 6
// const resultado5 = 5 < 5
// const resultado6 = 5 > 6
// const resultado7 = 5 > 4 
// const resultado8 = 5 <= 5
// const resultado9 = 5 <= 6
// const resultado10 = 5 >= 5
// const resultado11 = 5 >= 6


// const resultado12 = 5 !== 6
// const resultado13 = 5 != "5"
// //console.log(resultado12, resultado13);


// // or ||, and &&, not !

// const resultadoOr = false || false || "Hola" || "Mundo"// estos buscan casi siempre buscar la propiedad true
// console.log(resultadoOr);

// const resultadoAnd = true && true && true && false // estos buscan usar la propiedad false 

// //console.log(resultadoAnd);

// const resultadoNot = !true

// //console.log(resultadoNot);


// //  Control de flujo!


// // Control de flujo if 



// const edad = 5
// if  (edad > 5 && edad < 18) {
// console.log("El niño puede jugar");
// } 

// // console.log("fin programa");

// // Control de flujo while 

// let x = false 
// while (x)  {
//   console.log(x);
//   x = false
// }

// //console.log("terminanando el loop")


// // control de flujo  -  switch 


// // let y = 2;
// // switch (y) {
// //     case 1:  {
// //        console.log("yo soy el caso 1");
// //        break;
// //     }
// //     case 2:  {
// //        console.log("chanchito feliz");
// //        break;
// //     }
// //     case 3: 
// //         console.log("chanchito triste");
// //         break;

// //     default:
// //         console.log("no hay chanchito!  :(");
// //         break;
// //     }






// // function iterar(arg1) {
// //     for (let i = 0; i < arg1.length; i++) {
// //         console.log(arg1[i]);
// //     }  
// // }

// // const numeros = [1, 2, "hola", 4, 5];
// // const nombres = ["Pedro", 'Juan', 'Felipe', 'Chanchito feliz', 'Chanchito triste'];
// // iterar(numeros)
// // iterar(nombres)


// function suma(a, b) {
//         return a + b;
//             }  

//         const resultado = suma(1, 2);
//         const resultado1 = suma(5, 6);
//         const resultado2 = suma(resultado, resultado1);

//         console.log(resultado2);

        function sumar(a, b, cb) {
          const r = a + b  
          cb(r)
        }

        function callback(result) {
            console.log("resultado", result);
        }

        // sumar(2, 3, callback)


        // Fat arrow function 
        const miFatArrowFunction = (a, b) => a + b
        const otraFAF = (a, b) => {
            return a + b
        }
        const r = otraFAF(4, 4)
        //console.log(r);

        sumar(2, 3, function (r) {
          console.log('soy una funcion anonima y el resultado es:', r)
        })

    
  