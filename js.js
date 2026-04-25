
let array = ["Jazz", "Blues"];
array.push("Rock-n-Roll");
array[Math.floor(array.length / 2)] = "Classics";
try{
document.getElementById("eje1.0").innerHTML = "<div class='resulfacha'><p>El elemento eliminado fue: " + array[0] + "(tambien lo mostre por consola)</p></div>";
console.log(array.shift());
array.unshift("Rap", "Reggae");
console.log(array);
document.getElementById("eje1").innerHTML = "<div class='resulfacha'><p>El array final es: " + array + "</p></div>";
}catch(error){}
//------------------------------------------------------------------------------------------------------------------------------------
let dias=["Domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
try{
const boton = document.querySelector("#botoneje2")

boton.addEventListener("click", function() {
    let pedido = prompt("Ingrese un num del 0-6 y se le devolvera el dia de la semana correspondiente")
    document.getElementById("eje2").innerHTML = "<div class='resulfacha'><p>El dia de la semana correspondiente es: " + dias[pedido] + "</p></div>";
})
}catch(error){}