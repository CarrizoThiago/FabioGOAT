
let array = ["Jazz", "Blues"];
array.push("Rock-n-Roll");
array[Math.floor(array.length / 2)] = "Classics";
document.getElementById("eje1.0").innerHTML = "<div class='resulfacha'><p>El elemento eliminado fue: " + array[0] + "(tambien lo mostre por consola)</p></div>";
console.log(array.shift());
array.unshift("Rap", "Reggae");
console.log(array);
document.getElementById("eje1").innerHTML = "<div class='resulfacha'><p>El array final es: " + array + "</p></div>";