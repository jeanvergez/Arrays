let Comidas = [];
Comidas.push("Pizza","Hamburguesa","Tacos","Sushi")
console.log(Comidas[3]);
Comidas.unshift("Ensalada");
console.log(Comidas)
Comidas[4] = "Ramen"; 
console.log(Comidas);
Comidas.shift(); 
console.log(Comidas);
Comidas.splice(2); 
console.log(Comidas);
delete(Comidas[1]);
console.log(Comidas);
Comidas[1] = "Sándwich";
console.log(Comidas);