/*1) Tratemos 5 operaciones de array.
● Crear un array con los items “Jazz” y “Blues”.
● Agregar “Rock-n-Roll” al final.
● Reemplazar el valor en el medio por “Classics”. Tu código para
encontrar el valor medio debe funcionar con cualquier array de longitud
impar.
● Quitar el primer valor del array y mostrarlo.
● Anteponer Rap y Reggae al array.*/

let array = ["Jazz", "Blues"];
array.push("Rock-n-Roll");
array[Math.floor(array.length / 2)] = "Classics";
console.log(array.shift());
array.unshift("Rap", "Reggae");
console.log(array);