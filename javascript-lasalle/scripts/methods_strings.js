console.log("%cMètodes %carrays %ci strings", "font-weight: bold; color: red; font-size: 2.5em", "color: blue", "font-family: Arial"); // aplica cada conjunt d'estils de CSS al text a partir de cada %c

// ! els mètodes d'strings no modifiquen la string, en generen una de nova ⚠


text = "   Aquesta és una string que ha escrit l'Omar per fer exercicis de mètodes y més mètodes  "

//Ejercicios: provar métodes trim(), pad...(), replace(), replaceAll(), split(), to...Case() y slice()

console.log(text.trim());

console.log(text.padStart(90,'a'));

let newText = text.replace("Aquesta","esta")
console.log(newText);

let newText2 = text.replaceAll("mètodes","métodos")
console.log(newText2);

let palabras = text.split(' ');
console.log(palabras);

let part1 = text.slice(10,20);
console.log(part1);

let result = text.toUpperCase();
console.log(result);

let result2 = text.toLowerCase();
console.log(result2);



a = "text"
b = 'text'
c = `text`

frase = 'el profe a dicho "usad las comillas que queráis"'
phrase = "the teacher said 'use whatever you want'"

console.log(a.padStart(10, "-+"));
console.log(a.padEnd(10, "-"));
console.log(a.padEnd(10, "-").padStart(20, "-"));
console.log(a.padEnd(a.length + 10, "-").padStart(a.length + 20, "-"));



// Ejercicio DNI. 

dni = "12345678A"
console.log("DNI completo: " + dni);
console.log("DNI ofuscado: " + dni.slice(4).padStart(9, "X").slice(0,-2).padEnd(9, "X")); // elimina los 4 caracteres iniciales, añade X al principio hasta tener 9 caracteres, elimina los 2 caracteres finales, añade X al final hasta tener 9 caracteres

console.log("DNI ofuscado: " + (((dni.slice(4)).padStart(9, "X")).slice(0,-2)).padEnd(9, "X")); // esta es otra manera de ver el ejercicio, como se vería en matermáticas (uso de paréntesis) pero Omar no lo puso porque le parece feo


// lo siguiente es otra forma de hacerlo, sobreescribiendo la variable dni cada vez, paso a paso. Hay que tener cuidado con esto porque podemos perder información. Si aplico un trim por ejemplo no pasa nada, pero si uso algunos otros métodos sí que puedo perder info

dni = dni.slice(4)
dni = dni.padStart(9, "X")
dni = dni.slice(0, -2)
dni = dni.padEnd(9, "X")
console.log("DNI sobreescrito: " + dni);

email = "OmarOlmedoFerrer@Inventado.com"
console.log(email.toLowerCase());
console.log(email.toUpperCase());

console.log("Text original: '" + text.trim() + "'");
console.log("Text alterat: '" + text.trim().replace("l'Omar", "el profe") + "'");

altered = text.trim().replace("l'Omar", "el profe"); // guardo el resultado de alterar la string original

textAlt = text.trim().replaceAll(" ", "_") // guardo la string con los espacios cambiados per guiones bajos

console.log("Text sense espais: '" + textAlt + "'");
console.log("Text original: '" + text + "'");

console.log(text.trim().split(" "));



//Ejercicios: probar métodos de búsqueda indexOf(), includes(),... With()

nom = "Omar"

console.log(text.indexOf(nom));
console.log(text.slice(text.indexOf(nom)));
console.log(text.slice(text.indexOf(nom), text.indexOf(nom) + nom.length));

console.log(text.includes(nom));
console.log(text.includes("Carlos"));

console.log("Text comença amb 'Aquesta': " + text.trim().startsWith("Aquesta"));
console.log("Text comença amb 'Aquestes': " + text.trim().startsWith("Aquestes"));

console.log("Text acaba amb 'mètodes': " + text.trim().endsWith("mètodes"));
console.log("Text acaba amb 'mètode': " + text.trim().endsWith("mètode"));

console.log(text.indexOf(nom)); // esto me da el index (número de posición de Omar)



// Exercici: censurar el nom en el text de dalt

censura = "el profe"

console.log("Text normal: " + text);
console.log("Text censurat: " + text.replace(nom, "".padEnd(nom.length, "X"))); // string vacía añadiendo tantas "x" como ocupe el nombre
console.log("Text censurat: " + altered.replace(censura, "".padEnd(censura.length, "X")));



// el "+" concatena al false and true y los convierte en strings