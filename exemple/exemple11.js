/******************
**** PARTIE 1  ****
/******************/

const prénom = 'Guy';//Je crée une variable a qui j'attribue une valeur string

//J'affiche dans la console le contenu de ma variable:
console.log(prénom);
//Je crée une autre variable dans laquelle je concatène une chaine de caractère
//avec la chaine de caractère contenu dans ma variable précédente.
let salutation = 'Bonjour ' + prénom; 

//J'affiche dans la console le contenu de ma variable avec un petit texte juste avant:
console.log("Mais qui voilà ???\n" + salutation);

console.log("*****************************\n\n");

//Autre chaine de caractère
const rencontre = 'Je suis vraiment heureux de te rencontrer'

//J'affiche dans la console le contenu de ces variables en utilisant cette fois deux accents
//Grâve pour délimiter le contenu à afficher, je remplace la concaténation par un ${nomDeMaVariable}:
console.log(`Mais qui voilà??? ${salutation},\n ${rencontre}`);

console.log("*****************************\n\n");


/******************
**** PARTIE 2  ****
/******************/
//Je peux déclarer un nombre indéfini de variable de même type sur une seule ligne
//Je peux aussi créer une variable sans lui assigner de valeur initiale (ici résultat)
let nombre1 = 8, nombre2 = 4, nombre3 = 12, résultat;

//ADDITION
résultat = nombre1 + nombre3;
console.log('le résultat de l\'addition est : ' + résultat);

//SOUSTRACTION
résultat = nombre3 - nombre2;
console.log(`Le résultat de la soustraction est ${résultat}`);

//DIVISION
résultat = nombre3 / nombre2;
console.log(`${nombre3}/${nombre2}=${résultat}`);

//MULTIPLICATION
résultat = nombre1 * nombre3;
console.log(`${nombre1}X${nombre3}=${résultat}`);

//MODULO
résultat = 5%2;
console.log('le résultat de 5 Modulo 2 est = ' + résultat);

//EXPONENTIELLE

résultat = 5**2;
console.log(`Le résultat de 5 exp 2 est = ${résultat}`);

console.log("******************************************************")
//D'autre manière de réaliser des opérations:

résultat = 2;
résultat += 3;//Je rajoute 3 à ma variable résultat
console.log(résultat);

résultat -= 3;//Je retire 3
console.log(résultat);

résultat *= 2;
console.log(résultat);

résultat /= 4;
console.log(résultat);

//J'incrémente ma variable (je rajoute 1)
résultat++;
console.log(résultat);

//Je décrémente ma variable (je retire 1)
résultat--
console.log(résultat)