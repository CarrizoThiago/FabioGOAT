let array = ["Jazz", "Blues"];
array.push("Rock-n-Roll");
array[Math.floor(array.length / 2)] = "Classics";
console.log(array.shift());
array.unshift("Rap", "Reggae");
console.log(array);